import { User, UserBuilder, Address} from "./models"

// Builder - design pattern

const address:Address = new Address("10,20","villa del pilar 2");
const user:User = new UserBuilder("Alejandro")
                        .setAddress(address)
                        .setLastName("moreno")
                        .setPhone("1111111")
                        .getUser();


console.log(user);

//-----------------------------------------------------------------//