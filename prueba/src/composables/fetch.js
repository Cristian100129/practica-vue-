export default async function fetchUsers(){
        try {
          const response = await fetch("https://reqres.in/api/users?page=2");
          const data = await response.json();
  
            return data.data.map((user) => ({
            id: user.id,
            name: user.first_name.toUpperCase(),
            email: user.last_name.toLowerCase(),
            avatar: user.avatar
          }));
        } catch (error) {
          console.log("Ha habido un error al conseguir los datos", error);
        }finally{
            console.log("aspero")
        }
    }
    
