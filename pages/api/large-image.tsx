import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'

export default async function handler(req: NextRequest) {
  // playground link:
  // https://og-playground.vercel.app/?share=nVRdb9owFP0rlqXBJkE-CgkQEaatq9Q-bA9rtb3wko-bxNSJPcchpIj_PjshBYq2SctDbJ9j3-N7j-09jlgM2MPLmGzXBUKlbCj4-73uI5QBSTPpoaFtWe-Gow6sSSyzN1hMSk6DRqEJhV2PStjJT5SkhcIjKCSIngk0-iAhL6-oTVVKkjS3TIGF1r6kdfwvREAkCWvjMlrlxTn7UwRcEQWrVacnwiB6TgWriviWUSYUX2dEwjX9kAcpKLoS9H0mJS890yQaK42q0EmWmRGx3OQZk2xsu7Y1Vz93bs2ccWIv4sVk5k6cxPlIdpSEvgjHtnFj2INf_twaJLm_4ekgEoz7KivVNIOo9CUpmlKk4Yfr7TySF70bXWt0XvDTjO_AIdB1KthYtP2hnnI4rIuV7vTOvvX2T6b91Zx_2qNlEWqFlXS5Tft13VHy93OrnaG_LYH6M9v5a2whC80c5Dpr3JMJoVQxrUsntE8B5YFIifZfL-S74VH4VVqJ80BmKFYxvk5mhrMwbhw6cY2FkpneG-60G4zd6csar5amnt1v21T77mpnquL9ZxUTVaHOval1CeoArV8iD-hpgTrJ1wcTHTN9YupMT06BKCng_ng7bWP-ireLH3kQaQUuYHx-CS7NCVc_QERA0V2cAvoGsmbieWmGF5n3LR5hxvWVK7G3x-0TgL25ZY1wZyz2pnoQQ1il2EsCWsIIQ8425Knh-oGRdTtScXQN7vIQYuxJUcHh8Bs
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          backgroundColor: 'white',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1610816168075-f19d937635f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg
            height={80}
            viewBox='0 0 75 65'
            fill='white'
            style={{ margin: '0 75px' }}
          >
            <path d='M37.59.25l36.95 64H.64l36.95-64z'></path>
          </svg>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontStyle: 'normal',
            color: 'white',
            marginTop: 30,
            lineHeight: 1.8,
            whiteSpace: 'pre-wrap'
          }}
        >
          <b>Vercel Edge Network</b>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  )
}

export const config = {
  runtime: 'experimental-edge'
}
