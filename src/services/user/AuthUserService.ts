import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prismaCLient } from "../../prisma";
import { AuthRequest } from "../../models/interfaces/user/auth/AuthRequest";

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    if (!email) throw new Error("O Email precisa ser enviado!");
    if (!password) throw new Error("A Senha precisa ser enviada!");

    const user = await prismaCLient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) throw new Error("Email ou senha incorretos.");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("Senha incorreta.");

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET as string,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  }
}

export { AuthUserService };
