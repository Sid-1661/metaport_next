import { sendMail } from "../../../service/mailService";
import { NextResponse } from "next/server";

// old code
// const handler = async (req, res) => {
//   try {
//     const { method } = req;
//     switch (method) {
//       case "POST": {
//         //Do some thing
//         await sendMail(
//           "TEST",
//           "dontkillme@bunnyfiedlabs.com",
//           "THI IS A TEST FOR MY MEDIUM USERS"
//         );
//         res.status(200).send("Success");
//         break;
//       }
//       case "GET": {
//         //Do some thing
//         res.status(200).send(req.auth_data);
//         break;
//       }
//       default:
//         res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
//         res.status(405).end(`Method ${method} Not Allowed`);
//         break;
//     }
//   } catch (err) {
//     res.status(400).json({
//       error_code: "api_one",
//       message: err.message,
//     });
//   }
// };

// export default handler;

// new route code
export async function GET(request) {
    return NextResponse.json({ status: 200, data: request.auth_data });
}

export async function POST(request) {
    const res = await sendMail(
        "TEST",
        "dontkillme@bunnyfiedlabs.com",
        "THI IS A TEST FOR MY MEDIUM USERS"
    );
    const data = await res.json();
    return NextResponse.json({ status: 200, data });
}
