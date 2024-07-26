import { prismaCLient } from "../../prisma";
import { hash } from "bcryptjs";
import { UserRequest } from "../../models/interfaces/user/UserRequest";

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email) throw new Error("Email incorreto!");

    const userAlreadyExists = await prismaCLient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) throw new Error("Este email já existe.");

    const passwordHash = await hash(password, 8);

    const user = await prismaCLient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
