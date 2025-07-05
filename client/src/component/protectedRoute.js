import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, screenLoading } = useSelector(
    (state) => state.userReducer
  );
  const navigate = useNavigate();
// console.log("children",children);
// console.log("in protected Route")
//  console.log("isauth in protected",isAuthenticated)
//  console.log("iscreenloading in protected",screenLoading)
  useEffect(() => {
    if (!screenLoading && !isAuthenticated) navigate('/login')
  }, [isAuthenticated, screenLoading]);

  return children;
};

export default ProtectedRoute;