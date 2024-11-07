"use server";

import { useId } from "react";

export const createUser = async (user) => {
  console.log("This is the user from the server action: ", user);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/createUser`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid:user.id,
        firstName:user.given_name,
        lastName:user.family_name,
        email:user.email,
       image: user.picture,r
       
      }),
    });
    
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

// export const fetchUserData = async (user, accessToken) => {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/createUser`, {
//       method: "POST",
//       cache: "no-store",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//       },
//       body: JSON.stringify({
//         uid: user.id,
//         email: user.email,
//         name: user.given_name,
//         avatar: user.picture,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result; // Return the result to the caller
//   } catch (error) {
//     console.error("Error creating user:", error);
//     throw error; // Rethrow the error for handling in the component
//   }
// };

