export const BASE_URL = 'http://localhost:4444'

export const createdUser = (data) => {
  const response = jQuery.ajax({
    method: 'POST',
    url: `${BASE_URL}/users`,
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

export const verifyUserExist = (email) => {
  return jQuery.ajax({
    method: 'GET',
    url: `${BASE_URL}/users/registered?email=${email}`,
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

export const sendToken = async () => {
  var email = jQuery("[id='contact.email']").val()
  const response = await jQuery.ajax({
    method: 'POST',
    url: `${BASE_URL}/auth/send-token`,
    data: { email: email},
    success: function (responseSendToken){
      console.log('responseSendToken', responseSendToken)
      console.log('Token Criado com sucesso')
    },
    error: function(error) {
      console.log('Error occured', error);
      return false
    }
  })

  return response
}

export const authToken = (email, token) => {
  console.log('authToken')
  const response = jQuery.ajax({
    method: 'POST',
    url: `${BASE_URL}/auth/login`,
    data: {
      email: email,
      otp: token,
      'customer_data': true
    },
    success: function (responseSendToken){
      console.log('Login concluído=>', responseSendToken)
      return responseSendToken.user
    },
    error: function(error) {
      console.log('Error occured', error);
      return error
    }
  })

  return response
}

export const authLogin = () => {

}
