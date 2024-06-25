import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UserType } from '../models/User';
import { Users } from 'src/_data_/data';

@Resolver()
export class UserResolver {
  @Query((returns) => UserType)
  getUserById(@Args('userId', { type: () => Int }) userId: number) {
    return Users.find(user => user.userId === userId);
  }
}
