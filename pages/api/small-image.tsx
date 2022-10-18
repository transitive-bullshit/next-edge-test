import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'

export default async function handler(req: NextRequest) {
  // playground link:
  // https://og-playground.vercel.app/?share=nVRNj9owEP0rlqVCK0HiLCRARKja7Uq7h_bQXbUXLvmYJGad2HUcAov477UDWWBRW6k5xPZ74xnPvLF3OOYJYB_PE7pelghVassg2O3MHKEcaJYrH_UdQt71BwewoYnK32AJrQQLtxpNGWw6VMFGfWI0KzUeQ6lAdkxo0AcFRXVFrepK0XR7yzVYmtiXtPH_hUqIFeWtX87qojxnf8pQaKLkjZ50RBTGz5nkdZnccsal5pucKrimH4owA03Xkr3PlRKVb9vUYJVVlybJKrdiXtgi54oPHc8hU_3zpmTiDlNnlsxGE2_kpu5HumE0CmQ0dKwby-n9CqaklxbBSmS9WHIR6Kz0sO3FVaBoua1kFvWa4IYQbUZVUISbD9ene6Qv5nCm9Oi8_ieL7yAgNGUr-VC2874x2e-X5cJMOqHfSv0nDf-q1T_VMmERagPr0NU66_YdOivYTUlrYb41heYz3wRLTBBBExd57hJ3ZEoZ00wr2gntUkBFKDNq2sFsFJv-MfBraB1chCpHifbxdTSx3Jl147KRZ810mPG95Y0Pi6E3flnixdw21t2xbX3uQ-1sXbz_rGKqK3RQb0wuQeOg1UsWITtt0I193afomOkT1y0-OjlitIT742V1rOkr3m5-FGFsIggJw_M7cSlOtPgBMgaG7pIM0DdQDZfPczu6yLwb8QBzYW5ghf0dbl8E7E8JGeCDsNgfm0UCUZ1hPw1ZBQMMBV_Rp60w741q2pX2Y2pwV0SQYF_JGvb73w
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
            'url(https://images.unsplash.com/photo-1610816168075-f19d937635f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max)',
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
