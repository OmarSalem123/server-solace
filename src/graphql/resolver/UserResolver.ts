import { Query, Resolver } from '@nestjs/graphql';
import { UserType } from '../models/User';

@Resolver()
export class UserResolver {
  @Query((returns) => UserType)
  getUser() {
    return {
      userId: 1,
      firstName: 'omar',
      fatherName: 'aly',
    };
  }
}
