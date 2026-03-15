import { signUp } from "../lib/actions"; // Import the server action

const Register = () => {
  return (
    <div className="text-black bg-amber-400 w-screen h-screen flex justify-center">
      <div className="bg-amber-600 w-[500px] h-[700px] mt-[20%] p-[20px] rounded-[10px] flex justify-center">
        <form
          // 3. Cast to the standard HTML Form Action type
          action={signUp as unknown as (formData: FormData) => Promise<void>}
        >
          <input name="email" type="email" placeholder="Email" required />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
export default Register;
