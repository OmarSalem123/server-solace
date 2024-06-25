import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LocalizedNameType {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@ObjectType()
export class CountryType {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class NationalityType {
  @Field((type) => CountryType)
  country: CountryType;

  @Field((type) => Int)
  countryId: number;
}

@ObjectType()
export class MaritalStatusType {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class NationalIdType {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@ObjectType()
export class UserType {
  @Field((type) => Int)
  userId: number;

  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field((type) => LocalizedNameType)
  localizedName: LocalizedNameType;

  @Field((type) => NationalIdType)
  nationalId: NationalIdType;

  @Field((type) => [NationalityType])
  nationalities: NationalityType[];

  @Field((type) => MaritalStatusType)
  maritalStatus: MaritalStatusType;

  @Field((type) => Int)
  dependants: number;
}
