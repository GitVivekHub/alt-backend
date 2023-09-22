import { CacheModule, Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { ALTModuleTrackingController } from "./altModuleTracking.controller";
import { ALTModuleTrackingService } from "../adapters/hasura/altModuleTracking.adapter";
import { ProgramService } from "../adapters/hasura/altProgram.adapter";
import { ALTProgramAssociationService } from "../adapters/hasura/altProgramAssociation.adapter";
import { ALTCourseTrackingService } from "../adapters/hasura/altCourseTracking.adapter";
// import { HasuraUserService } from "src/adapters/hasura/user.adapter";
import { ALTHasuraUserService } from "src/adapters/hasura/altUser.adapter";

const ttl = process.env.TTL as never;

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      ttl: ttl,
    }),
  ],
  controllers: [ALTModuleTrackingController],
  providers: [
    ALTModuleTrackingService,
    ProgramService,
    ALTProgramAssociationService,
    ALTCourseTrackingService,
    ALTHasuraUserService,
  ],
})
export class ALTModuleTrackingModule {}
