import { veifyUserExist } from '../services/api'
function addBoxToOpenModal () {
  console.log('addBoxToOpenModal')
  jQuery("#boxBuyMoreFaster").remove()
  jQuery("#buyMoreFaster").append(jQuery(`
    <div class="m-bottom-half panel-buy-fast" role="button" tabindex="0" data-testid="panel-buy-fast"
      onClick="openModalLogin()"
      id="boxBuyMoreFaster"
    >
      <div class="title-container-buy-fast">
        <svg class="svg" width="16px" height="16px" viewBox="0 0 1024 1024">
          <path d="M830.353 427.18C826.144 433.392 823.652 440.604 823.127 448.086C822.603 455.569 824.065 463.057 827.367 469.795C837.956 494.48 845.41 520.393 849.554 546.928C860.537 615.545 850.265 685.875 820.113 748.499C816.451 755.367 810.976 761.104 804.282 765.085C797.588 769.067 789.93 771.142 782.139 771.085H242.39C234.555 771.101 226.867 768.962 220.168 764.903C213.47 760.844 208.02 755.021 204.416 748.072C177.103 692.734 165.338 631.03 170.375 569.539C175.411 508.047 197.061 449.073 233.015 398.904C268.97 348.735 317.881 309.251 374.536 284.661C431.191 260.071 493.465 251.298 554.719 259.275C585.712 262.914 616.027 270.95 644.748 283.14C651.494 286.437 658.991 287.898 666.483 287.374C673.975 286.85 681.196 284.361 687.416 280.157C693.896 275.893 699.09 269.945 702.437 262.952C705.784 255.96 707.159 248.188 706.413 240.473C705.667 232.758 702.828 225.393 698.203 219.169C693.577 212.946 687.34 208.1 680.162 205.154C597.736 169.854 506.269 161.392 418.754 180.97C331.238 200.548 252.125 247.17 192.65 314.214C133.176 381.258 96.3658 465.315 87.4482 554.445C78.5306 643.574 97.9591 733.244 142.974 810.717C150.42 823.598 161.112 834.309 173.986 841.785C186.861 849.262 201.471 853.242 216.363 853.332H807.313C822.35 853.392 837.135 849.482 850.173 841.998C863.21 834.515 874.036 823.723 881.555 810.717C914.511 753.674 933.781 689.778 937.852 624.046C941.924 558.313 930.687 492.532 905.022 431.867C901.771 424.953 896.72 419.039 890.397 414.743C884.073 410.448 876.71 407.928 869.077 407.449C861.444 406.97 853.823 408.548 847.011 412.02C840.198 415.491 834.445 420.727 830.353 427.18Z"></path><path d="M451.889 537.553C435.877 553.546 426.881 575.237 426.881 597.854C426.881 609.052 429.09 620.142 433.381 630.488C437.672 640.834 443.961 650.235 451.889 658.154C459.818 666.073 469.23 672.354 479.59 676.64C489.949 680.926 501.052 683.131 512.264 683.131C534.909 683.131 556.627 674.147 572.639 658.154L814.14 296.351L451.889 537.553Z">
          </path>
        </svg>  Quer agilizar sua compra?
      </div>
      <div class="content-container-buy-fast">
        <div>
          <div>Aproveite os dados da sua carteira digital.</div>
        </div>
        <svg class="svg" width="16px" height="16px" viewBox="0 0 1024 1024">
          <path d="M779.8,562.7L339.5,1003c-28,28-73.4,28-101.4,0c-28-28-28-73.4,0-101.4L627.7,512L238.1,122.4c-28-28-28-73.4,0-101.4 c28-28,73.4-28,101.4,0l440.3,440.3c14,14,21,32.3,21,50.7C800.8,530.3,793.8,548.7,779.8,562.7z">
          </path>
        </svg>
      </div>
    </div>
  `))
}

export const verifyEmailExistWallet = async (email) => {
  if (!email) return false
  try {
    let response = await veifyUserExist(email)
  
    if (!response?.registered_email) {
      window.SDKCheckout.publishEvent('VALIDATE_EMAIL_EXIST_ON_CHECKOUT', email)
    } else if (email) {
      addBoxToOpenModal()
    }
  } catch(err) {
    console.log(err);
  }
}
