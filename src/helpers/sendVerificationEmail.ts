import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from '@/types/ApiResponse';

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
        from: 'no-reply@truthvault.xyz', 
        to: email,
        subject: 'TrueFeedback || Verification Code', 
        react: VerificationEmail({ username, otp: verifyCode }),
      });
   return{
    success:true, message: 'Verification mail sent successfully'
   } 
} catch (emailError) {
    console.error("Error sending verification mail", emailError);
    return {success: false, message: 'Failed to send verification mail'}

}
}
