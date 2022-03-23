import { ApolloServer, gql } from "apollo-server-micro";
import Cors from "micro-cors";

const typeDefs = gql`
  scalar DateTime
  scalar Time
  scalar Email
  scalar URL

  enum WeekDay {
    MONDAY
    TUESDAY
    WEDNESDAY
    THURSDAY
    FRIDAY
    SATURDAY
    SUNDAY
  }

  type Restaurant {
    id: ID!
    name: String
    description: String
    address: String
    openingHours: [OpeningHour]
    photos: [Photo]
    rating: Rating
  }

  type Photo {
    id: ID!
    url: URL!
    uploadedBy: User!
    uploadedOn: DateTime!
  }

  type OpeningHour {
    day: WeekDay
    open: Time
    close: Time
  }

  type User {
    id: ID!
    name: String
    email: Email!
    userRatings: [UserRating]
  }

  type UserRating {
    id: ID!
    user: User!
    restaurant: Restaurant!
    rating: Rating
  }

  type Rating {
    taste: Int
    texture: Int
    visual: Int
  }

  input RatingInput {
    taste: Int
    texture: Int
    visual: Int
  }

  input CreateUserRatingInput {
    userId: ID!
    restaurantId: ID!
    rating: RatingInput
  }

  input UpdateUserRatingInput {
    userRatingId: ID!
    rating: RatingInput
  }

  type CreateUserRatingPayload {
    userRating: UserRating
    restaurant: Restaurant
  }

  type UpdateUserRatingPayload {
    userRating: UserRating
    restaurant: Restaurant
  }

  type RestaurantEdge {
    node: Restaurant
    cursor: String
  }

  type PageInfo {
    hasPreviousPage: Boolean
    hasNextPage: Boolean
    startCursor: String
    endCursor: String
  }

  type RestaurantConnection {
    edges: [RestaurantEdge!]!
    pageInfo: PageInfo
  }

  type Query {
    restaurants(
      before: String
      after: String
      first: Int
      last: Int
    ): RestaurantConnection
    restaurant(id: ID!): Restaurant
    users: [User!]
    user(id: ID!): User
    loggedInUser: User
  }

  type Mutation {
    createUserRating(input: CreateUserRatingInput!): CreateUserRatingPayload
    updateUserRating(input: UpdateUserRatingInput!): UpdateUserRatingPayload
  }
`;

const cors = Cors();

export default cors(async function handler(req, res) {
  const apolloServer = new ApolloServer({
    typeDefs,
    mockEntireSchema: true,
    mocks: {
      DateTime: () => "2022-03-20T20:00:00.000Z",
      Time: () => "12:00:00Z",
      URL: () => "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      Email: () => "test@example.com",
    },
  });

  const startServer = apolloServer.start();
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
