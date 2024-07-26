import { prismaCLient } from "../../prisma";
import { RemoveUserRequest } from "../../models/interfaces/user/RemoveUserRequest";

class RemoveUserService {
  async execute({ user_id }: RemoveUserRequest) {
    if (user_id) {
      const removeUser = await prismaCLient.user.delete({
        where: {
          id: user_id,
        },
      });

      return removeUser;
    }
  }
}

export { RemoveUserService };
