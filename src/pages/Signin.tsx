import SignInForm from "../common/components/auth/SigninForm";
import PageLayout from "../common/layouts/PageLayout";

export default function SignIn() {
  return (
    <div>
      <PageLayout>
        <SignInForm></SignInForm>
      </PageLayout>
    </div>
  );
}
