import { prismaCLient } from "../../prisma";

class DetailUserService {
  async execute(user_id: string) {
    if (user_id) {
      const user = await prismaCLient.user.findFirst({
        where: {
          id: user_id,
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
}

export { DetailUserService };
