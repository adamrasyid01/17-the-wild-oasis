import { useMutation } from "@tanstack/react-query";
import { Login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { login, isLoading };
}
