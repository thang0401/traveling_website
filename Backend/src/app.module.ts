import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './User/user.module';
import { User } from './User/entities/user.entity';
import { ToursModule } from './tours/tours.module';
import { Tour } from './tours/entities/tour.entity';
import { NestFactory } from '@nestjs/core';
//import { GraphQLModule, defaultFieldResolver, GraphQLSchema } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig, Plugin  } from '@nestjs/apollo';
// import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProductModule,
    UserModule,
    ToursModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres#0',
      database: 'traveling_website',
      entities: [User, Tour], // Ensure all entities are included here
      synchronize: true, // Only for development, consider setting false for production
      logging: true // Enable if you want to see SQL logs
    }),
    AuthModule,
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: 'schema.gql'
    // }),
    // AuthModule, // Uncomment if you have an AuthModule to include
  ],
  controllers: [AppController], // Include all your controllers here
  providers: [AppService], // Include all your services here
})
export class AppModule {}

async function AngularJS() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS if needed
  await app.listen(3001); // Start your NestJS application
}

AngularJS();
