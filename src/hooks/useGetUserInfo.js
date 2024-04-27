// const {} = JSON.Parse()
// inside this curly bracket , we are destructuring the information what we are going to use/want.
// and JSON.parse is basically returns stringify to object[shayd]


export const useGetUserInfo = () => {
    const { name, profilePhoto, userID, isAuth } =
      JSON.parse(localStorage.getItem("auth")) || {};
  
    return { name, profilePhoto, userID, isAuth };
  };