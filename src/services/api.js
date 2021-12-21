export const BASE_URL = 'http://localhost:4444/users'

export const createdUser = (data) => {
  const response = jQuery.ajax({
    method: 'POST',
    url: 'http://localhost:4444/users/',
    data: data,
    success: function (responseRequest){
      console.log('responseRequest', responseRequest)
      return 'Usuário criado com sucesso'
    }
  }).done(function(msg) {
    console.log('done msg', msg)
  });

  return response
}

export const veifyUserExist = (email) => {
  return jQuery.ajax({
    method: 'GET',
    url: `${BASE_URL}/registered?email=${email}`,
    success: function(data) {
      console.log('success', data)
      return data;
    },
    error: function(error) {
      console.log('Error occured', error);
      return false
    }
  })
}

export const getUserById = async (id) => {
  console.log('enter getUserById2')
  jQuery.support.cors = true;
  const response = await jQuery.ajax({
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    dataType: "application/json",
    url: `${BASE_URL}/${id}`,
  })

  console.log('response>>>>', response)
  const keys = [
    'zipcode',
    'first_name',
    'last_name',
    'address',
    'number',
    'floor',
    'locality',
    'city',
    'state',
    'country',
    'phone',
    'between_streets',
    'reference'
  ]
  const addresses = response.address
  let address = {}
  let user = {
    contact_name: response.name,
    contact_phone: response.phone,
    // contact_accepts_marketing: true,
  }
  addresses.map(item => {
    keys.map((key) => {
      address = {
        ...address, [`${item.type}_${key}`]: `${item[key]}` || null
      }
      return true
    })    
  })
  console.log('returned===>', { user, ...address })
  console.log('finish getUserById')
  return  { code: 200, user: { ...user, ...address }}
}