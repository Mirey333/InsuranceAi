
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Makler
 * 
 */
export type Makler = $Result.DefaultSelection<Prisma.$MaklerPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model Communication
 * 
 */
export type Communication = $Result.DefaultSelection<Prisma.$CommunicationPayload>
/**
 * Model LeadActivity
 * 
 */
export type LeadActivity = $Result.DefaultSelection<Prisma.$LeadActivityPayload>
/**
 * Model LandingPage
 * 
 */
export type LandingPage = $Result.DefaultSelection<Prisma.$LandingPagePayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model SystemSettings
 * 
 */
export type SystemSettings = $Result.DefaultSelection<Prisma.$SystemSettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  TENANT_ADMIN: 'TENANT_ADMIN',
  MAKLER: 'MAKLER',
  VIEWER: 'VIEWER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const TenantPlan: {
  STARTER: 'STARTER',
  PROFESSIONAL: 'PROFESSIONAL',
  ENTERPRISE: 'ENTERPRISE'
};

export type TenantPlan = (typeof TenantPlan)[keyof typeof TenantPlan]


export const CampaignStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  COMPLETED: 'COMPLETED',
  ARCHIVED: 'ARCHIVED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const Platform: {
  FACEBOOK: 'FACEBOOK',
  INSTAGRAM: 'INSTAGRAM',
  GOOGLE: 'GOOGLE',
  YOUTUBE: 'YOUTUBE',
  LINKEDIN: 'LINKEDIN',
  TIKTOK: 'TIKTOK'
};

export type Platform = (typeof Platform)[keyof typeof Platform]


export const LeadStatus: {
  NEU: 'NEU',
  KONTAKTIERT: 'KONTAKTIERT',
  QUALIFIZIERT: 'QUALIFIZIERT',
  WARM: 'WARM',
  HEISS: 'HEISS',
  TERMIN_VEREINBART: 'TERMIN_VEREINBART',
  PRAESENTATION_GEHALTEN: 'PRAESENTATION_GEHALTEN',
  ABGESCHLOSSEN: 'ABGESCHLOSSEN',
  VERLOREN: 'VERLOREN',
  NICHT_INTERESSIERT: 'NICHT_INTERESSIERT'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]


export const CommunicationType: {
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
  WHATSAPP: 'WHATSAPP',
  SMS: 'SMS',
  LETTER: 'LETTER',
  VIDEO_CALL: 'VIDEO_CALL',
  IN_PERSON: 'IN_PERSON'
};

export type CommunicationType = (typeof CommunicationType)[keyof typeof CommunicationType]


export const CommunicationDirection: {
  INBOUND: 'INBOUND',
  OUTBOUND: 'OUTBOUND'
};

export type CommunicationDirection = (typeof CommunicationDirection)[keyof typeof CommunicationDirection]


export const CommunicationStatus: {
  DRAFT: 'DRAFT',
  SENT: 'SENT',
  DELIVERED: 'DELIVERED',
  READ: 'READ',
  REPLIED: 'REPLIED',
  FAILED: 'FAILED',
  BOUNCED: 'BOUNCED'
};

export type CommunicationStatus = (typeof CommunicationStatus)[keyof typeof CommunicationStatus]


export const LeadActivityType: {
  CREATED: 'CREATED',
  STATUS_CHANGED: 'STATUS_CHANGED',
  CONTACTED: 'CONTACTED',
  NOTE_ADDED: 'NOTE_ADDED',
  SCORE_UPDATED: 'SCORE_UPDATED',
  FOLLOW_UP_SCHEDULED: 'FOLLOW_UP_SCHEDULED',
  DOCUMENT_UPLOADED: 'DOCUMENT_UPLOADED',
  MEETING_SCHEDULED: 'MEETING_SCHEDULED',
  CONTRACT_SIGNED: 'CONTRACT_SIGNED'
};

export type LeadActivityType = (typeof LeadActivityType)[keyof typeof LeadActivityType]


export const LandingPageTemplate: {
  ALTERSVORSORGE: 'ALTERSVORSORGE',
  BAUFINANZIERUNG: 'BAUFINANZIERUNG',
  KRANKENVERSICHERUNG: 'KRANKENVERSICHERUNG',
  LEBENSVERSICHERUNG: 'LEBENSVERSICHERUNG',
  BERUFSUNFAEHIGKEIT: 'BERUFSUNFAEHIGKEIT',
  RIESTER_RENTE: 'RIESTER_RENTE',
  RUERUP_RENTE: 'RUERUP_RENTE',
  CUSTOM: 'CUSTOM'
};

export type LandingPageTemplate = (typeof LandingPageTemplate)[keyof typeof LandingPageTemplate]


export const LandingPageStatus: {
  DRAFT: 'DRAFT',
  REVIEW: 'REVIEW',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type LandingPageStatus = (typeof LandingPageStatus)[keyof typeof LandingPageStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type TenantPlan = $Enums.TenantPlan

export const TenantPlan: typeof $Enums.TenantPlan

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

export type CommunicationType = $Enums.CommunicationType

export const CommunicationType: typeof $Enums.CommunicationType

export type CommunicationDirection = $Enums.CommunicationDirection

export const CommunicationDirection: typeof $Enums.CommunicationDirection

export type CommunicationStatus = $Enums.CommunicationStatus

export const CommunicationStatus: typeof $Enums.CommunicationStatus

export type LeadActivityType = $Enums.LeadActivityType

export const LeadActivityType: typeof $Enums.LeadActivityType

export type LandingPageTemplate = $Enums.LandingPageTemplate

export const LandingPageTemplate: typeof $Enums.LandingPageTemplate

export type LandingPageStatus = $Enums.LandingPageStatus

export const LandingPageStatus: typeof $Enums.LandingPageStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.makler`: Exposes CRUD operations for the **Makler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maklers
    * const maklers = await prisma.makler.findMany()
    * ```
    */
  get makler(): Prisma.MaklerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communication`: Exposes CRUD operations for the **Communication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communications
    * const communications = await prisma.communication.findMany()
    * ```
    */
  get communication(): Prisma.CommunicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leadActivity`: Exposes CRUD operations for the **LeadActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadActivities
    * const leadActivities = await prisma.leadActivity.findMany()
    * ```
    */
  get leadActivity(): Prisma.LeadActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.landingPage`: Exposes CRUD operations for the **LandingPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LandingPages
    * const landingPages = await prisma.landingPage.findMany()
    * ```
    */
  get landingPage(): Prisma.LandingPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemSettings`: Exposes CRUD operations for the **SystemSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSettings.findMany()
    * ```
    */
  get systemSettings(): Prisma.SystemSettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tenant: 'Tenant',
    Session: 'Session',
    Makler: 'Makler',
    Campaign: 'Campaign',
    Lead: 'Lead',
    Communication: 'Communication',
    LeadActivity: 'LeadActivity',
    LandingPage: 'LandingPage',
    ApiKey: 'ApiKey',
    SystemSettings: 'SystemSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tenant" | "session" | "makler" | "campaign" | "lead" | "communication" | "leadActivity" | "landingPage" | "apiKey" | "systemSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Makler: {
        payload: Prisma.$MaklerPayload<ExtArgs>
        fields: Prisma.MaklerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaklerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaklerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaklerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaklerPayload>
          }
          findFirst: {
            args: Prisma.MaklerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaklerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaklerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaklerPayload>
          }
          findMany: {
            args: Prisma.MaklerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaklerPayload>[]
          }
          create: {
            args: Prisma.MaklerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaklerPayload>
          }
          createMany: {
            args: Prisma.MaklerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaklerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaklerPayload>[]
          }
          delete: {
            args: Prisma.MaklerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaklerPayload>
          }
          update: {
            args: Prisma.MaklerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaklerPayload>
          }
          deleteMany: {
            args: Prisma.MaklerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaklerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaklerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaklerPayload>[]
          }
          upsert: {
            args: Prisma.MaklerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaklerPayload>
          }
          aggregate: {
            args: Prisma.MaklerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMakler>
          }
          groupBy: {
            args: Prisma.MaklerGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaklerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaklerCountArgs<ExtArgs>
            result: $Utils.Optional<MaklerCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      Communication: {
        payload: Prisma.$CommunicationPayload<ExtArgs>
        fields: Prisma.CommunicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          findFirst: {
            args: Prisma.CommunicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          findMany: {
            args: Prisma.CommunicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>[]
          }
          create: {
            args: Prisma.CommunicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          createMany: {
            args: Prisma.CommunicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>[]
          }
          delete: {
            args: Prisma.CommunicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          update: {
            args: Prisma.CommunicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          deleteMany: {
            args: Prisma.CommunicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>[]
          }
          upsert: {
            args: Prisma.CommunicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationPayload>
          }
          aggregate: {
            args: Prisma.CommunicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunication>
          }
          groupBy: {
            args: Prisma.CommunicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunicationCountArgs<ExtArgs>
            result: $Utils.Optional<CommunicationCountAggregateOutputType> | number
          }
        }
      }
      LeadActivity: {
        payload: Prisma.$LeadActivityPayload<ExtArgs>
        fields: Prisma.LeadActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadActivityPayload>
          }
          findFirst: {
            args: Prisma.LeadActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadActivityPayload>
          }
          findMany: {
            args: Prisma.LeadActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadActivityPayload>[]
          }
          create: {
            args: Prisma.LeadActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadActivityPayload>
          }
          createMany: {
            args: Prisma.LeadActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadActivityPayload>[]
          }
          delete: {
            args: Prisma.LeadActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadActivityPayload>
          }
          update: {
            args: Prisma.LeadActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadActivityPayload>
          }
          deleteMany: {
            args: Prisma.LeadActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadActivityPayload>[]
          }
          upsert: {
            args: Prisma.LeadActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadActivityPayload>
          }
          aggregate: {
            args: Prisma.LeadActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadActivity>
          }
          groupBy: {
            args: Prisma.LeadActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadActivityCountArgs<ExtArgs>
            result: $Utils.Optional<LeadActivityCountAggregateOutputType> | number
          }
        }
      }
      LandingPage: {
        payload: Prisma.$LandingPagePayload<ExtArgs>
        fields: Prisma.LandingPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandingPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandingPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>
          }
          findFirst: {
            args: Prisma.LandingPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandingPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>
          }
          findMany: {
            args: Prisma.LandingPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>[]
          }
          create: {
            args: Prisma.LandingPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>
          }
          createMany: {
            args: Prisma.LandingPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandingPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>[]
          }
          delete: {
            args: Prisma.LandingPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>
          }
          update: {
            args: Prisma.LandingPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>
          }
          deleteMany: {
            args: Prisma.LandingPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandingPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LandingPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>[]
          }
          upsert: {
            args: Prisma.LandingPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPagePayload>
          }
          aggregate: {
            args: Prisma.LandingPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLandingPage>
          }
          groupBy: {
            args: Prisma.LandingPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandingPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandingPageCountArgs<ExtArgs>
            result: $Utils.Optional<LandingPageCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      SystemSettings: {
        payload: Prisma.$SystemSettingsPayload<ExtArgs>
        fields: Prisma.SystemSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findMany: {
            args: Prisma.SystemSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          create: {
            args: Prisma.SystemSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          createMany: {
            args: Prisma.SystemSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          update: {
            args: Prisma.SystemSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          upsert: {
            args: Prisma.SystemSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSettings>
          }
          groupBy: {
            args: Prisma.SystemSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tenant?: TenantOmit
    session?: SessionOmit
    makler?: MaklerOmit
    campaign?: CampaignOmit
    lead?: LeadOmit
    communication?: CommunicationOmit
    leadActivity?: LeadActivityOmit
    landingPage?: LandingPageOmit
    apiKey?: ApiKeyOmit
    systemSettings?: SystemSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    users: number
    maklers: number
    campaigns: number
    leads: number
    landingPages: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TenantCountOutputTypeCountUsersArgs
    maklers?: boolean | TenantCountOutputTypeCountMaklersArgs
    campaigns?: boolean | TenantCountOutputTypeCountCampaignsArgs
    leads?: boolean | TenantCountOutputTypeCountLeadsArgs
    landingPages?: boolean | TenantCountOutputTypeCountLandingPagesArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountMaklersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaklerWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountLandingPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandingPageWhereInput
  }


  /**
   * Count Type MaklerCountOutputType
   */

  export type MaklerCountOutputType = {
    campaigns: number
    leads: number
    landingPages: number
  }

  export type MaklerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | MaklerCountOutputTypeCountCampaignsArgs
    leads?: boolean | MaklerCountOutputTypeCountLeadsArgs
    landingPages?: boolean | MaklerCountOutputTypeCountLandingPagesArgs
  }

  // Custom InputTypes
  /**
   * MaklerCountOutputType without action
   */
  export type MaklerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaklerCountOutputType
     */
    select?: MaklerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaklerCountOutputType without action
   */
  export type MaklerCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * MaklerCountOutputType without action
   */
  export type MaklerCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * MaklerCountOutputType without action
   */
  export type MaklerCountOutputTypeCountLandingPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandingPageWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    leadSources: number
    landingPages: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leadSources?: boolean | CampaignCountOutputTypeCountLeadSourcesArgs
    landingPages?: boolean | CampaignCountOutputTypeCountLandingPagesArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountLeadSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountLandingPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandingPageWhereInput
  }


  /**
   * Count Type LeadCountOutputType
   */

  export type LeadCountOutputType = {
    communications: number
    activities: number
  }

  export type LeadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communications?: boolean | LeadCountOutputTypeCountCommunicationsArgs
    activities?: boolean | LeadCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadCountOutputType
     */
    select?: LeadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountCommunicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    tenantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.UserRole
    tenantId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    makler?: boolean | User$maklerArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tenant?: boolean | User$tenantArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | User$tenantArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | User$tenantArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "tenantId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makler?: boolean | User$maklerArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tenant?: boolean | User$tenantArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | User$tenantArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | User$tenantArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      makler: Prisma.$MaklerPayload<ExtArgs> | null
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      tenant: Prisma.$TenantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.UserRole
      tenantId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    makler<T extends User$maklerArgs<ExtArgs> = {}>(args?: Subset<T, User$maklerArgs<ExtArgs>>): Prisma__MaklerClient<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tenant<T extends User$tenantArgs<ExtArgs> = {}>(args?: Subset<T, User$tenantArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly tenantId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.makler
   */
  export type User$maklerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerInclude<ExtArgs> | null
    where?: MaklerWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.tenant
   */
  export type User$tenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantAvgAggregateOutputType = {
    maxMaklers: number | null
    maxLeads: number | null
  }

  export type TenantSumAggregateOutputType = {
    maxMaklers: number | null
    maxLeads: number | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    subdomain: string | null
    domain: string | null
    isActive: boolean | null
    plan: $Enums.TenantPlan | null
    maxMaklers: number | null
    maxLeads: number | null
    dataRegion: string | null
    gdprContact: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    subdomain: string | null
    domain: string | null
    isActive: boolean | null
    plan: $Enums.TenantPlan | null
    maxMaklers: number | null
    maxLeads: number | null
    dataRegion: string | null
    gdprContact: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    subdomain: number
    domain: number
    isActive: number
    plan: number
    maxMaklers: number
    maxLeads: number
    dataRegion: number
    gdprContact: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantAvgAggregateInputType = {
    maxMaklers?: true
    maxLeads?: true
  }

  export type TenantSumAggregateInputType = {
    maxMaklers?: true
    maxLeads?: true
  }

  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    subdomain?: true
    domain?: true
    isActive?: true
    plan?: true
    maxMaklers?: true
    maxLeads?: true
    dataRegion?: true
    gdprContact?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    subdomain?: true
    domain?: true
    isActive?: true
    plan?: true
    maxMaklers?: true
    maxLeads?: true
    dataRegion?: true
    gdprContact?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    subdomain?: true
    domain?: true
    isActive?: true
    plan?: true
    maxMaklers?: true
    maxLeads?: true
    dataRegion?: true
    gdprContact?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _avg?: TenantAvgAggregateInputType
    _sum?: TenantSumAggregateInputType
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    subdomain: string
    domain: string | null
    isActive: boolean
    plan: $Enums.TenantPlan
    maxMaklers: number
    maxLeads: number
    dataRegion: string
    gdprContact: string | null
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subdomain?: boolean
    domain?: boolean
    isActive?: boolean
    plan?: boolean
    maxMaklers?: boolean
    maxLeads?: boolean
    dataRegion?: boolean
    gdprContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Tenant$usersArgs<ExtArgs>
    maklers?: boolean | Tenant$maklersArgs<ExtArgs>
    campaigns?: boolean | Tenant$campaignsArgs<ExtArgs>
    leads?: boolean | Tenant$leadsArgs<ExtArgs>
    landingPages?: boolean | Tenant$landingPagesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subdomain?: boolean
    domain?: boolean
    isActive?: boolean
    plan?: boolean
    maxMaklers?: boolean
    maxLeads?: boolean
    dataRegion?: boolean
    gdprContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subdomain?: boolean
    domain?: boolean
    isActive?: boolean
    plan?: boolean
    maxMaklers?: boolean
    maxLeads?: boolean
    dataRegion?: boolean
    gdprContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    subdomain?: boolean
    domain?: boolean
    isActive?: boolean
    plan?: boolean
    maxMaklers?: boolean
    maxLeads?: boolean
    dataRegion?: boolean
    gdprContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subdomain" | "domain" | "isActive" | "plan" | "maxMaklers" | "maxLeads" | "dataRegion" | "gdprContact" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Tenant$usersArgs<ExtArgs>
    maklers?: boolean | Tenant$maklersArgs<ExtArgs>
    campaigns?: boolean | Tenant$campaignsArgs<ExtArgs>
    leads?: boolean | Tenant$leadsArgs<ExtArgs>
    landingPages?: boolean | Tenant$landingPagesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      maklers: Prisma.$MaklerPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
      landingPages: Prisma.$LandingPagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      subdomain: string
      domain: string | null
      isActive: boolean
      plan: $Enums.TenantPlan
      maxMaklers: number
      maxLeads: number
      dataRegion: string
      gdprContact: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Tenant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maklers<T extends Tenant$maklersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$maklersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends Tenant$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends Tenant$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    landingPages<T extends Tenant$landingPagesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$landingPagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly subdomain: FieldRef<"Tenant", 'String'>
    readonly domain: FieldRef<"Tenant", 'String'>
    readonly isActive: FieldRef<"Tenant", 'Boolean'>
    readonly plan: FieldRef<"Tenant", 'TenantPlan'>
    readonly maxMaklers: FieldRef<"Tenant", 'Int'>
    readonly maxLeads: FieldRef<"Tenant", 'Int'>
    readonly dataRegion: FieldRef<"Tenant", 'String'>
    readonly gdprContact: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.users
   */
  export type Tenant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant.maklers
   */
  export type Tenant$maklersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerInclude<ExtArgs> | null
    where?: MaklerWhereInput
    orderBy?: MaklerOrderByWithRelationInput | MaklerOrderByWithRelationInput[]
    cursor?: MaklerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaklerScalarFieldEnum | MaklerScalarFieldEnum[]
  }

  /**
   * Tenant.campaigns
   */
  export type Tenant$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Tenant.leads
   */
  export type Tenant$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Tenant.landingPages
   */
  export type Tenant$landingPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    where?: LandingPageWhereInput
    orderBy?: LandingPageOrderByWithRelationInput | LandingPageOrderByWithRelationInput[]
    cursor?: LandingPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LandingPageScalarFieldEnum | LandingPageScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Makler
   */

  export type AggregateMakler = {
    _count: MaklerCountAggregateOutputType | null
    _min: MaklerMinAggregateOutputType | null
    _max: MaklerMaxAggregateOutputType | null
  }

  export type MaklerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tenantId: string | null
    firstName: string | null
    lastName: string | null
    company: string | null
    phone: string | null
    website: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    logo: string | null
    primaryColor: string | null
    secondaryColor: string | null
  }

  export type MaklerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tenantId: string | null
    firstName: string | null
    lastName: string | null
    company: string | null
    phone: string | null
    website: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    logo: string | null
    primaryColor: string | null
    secondaryColor: string | null
  }

  export type MaklerCountAggregateOutputType = {
    id: number
    userId: number
    tenantId: number
    firstName: number
    lastName: number
    company: number
    phone: number
    website: number
    address: number
    city: number
    postalCode: number
    isActive: number
    createdAt: number
    updatedAt: number
    logo: number
    primaryColor: number
    secondaryColor: number
    _all: number
  }


  export type MaklerMinAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    firstName?: true
    lastName?: true
    company?: true
    phone?: true
    website?: true
    address?: true
    city?: true
    postalCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    logo?: true
    primaryColor?: true
    secondaryColor?: true
  }

  export type MaklerMaxAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    firstName?: true
    lastName?: true
    company?: true
    phone?: true
    website?: true
    address?: true
    city?: true
    postalCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    logo?: true
    primaryColor?: true
    secondaryColor?: true
  }

  export type MaklerCountAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    firstName?: true
    lastName?: true
    company?: true
    phone?: true
    website?: true
    address?: true
    city?: true
    postalCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    logo?: true
    primaryColor?: true
    secondaryColor?: true
    _all?: true
  }

  export type MaklerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Makler to aggregate.
     */
    where?: MaklerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maklers to fetch.
     */
    orderBy?: MaklerOrderByWithRelationInput | MaklerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaklerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maklers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maklers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maklers
    **/
    _count?: true | MaklerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaklerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaklerMaxAggregateInputType
  }

  export type GetMaklerAggregateType<T extends MaklerAggregateArgs> = {
        [P in keyof T & keyof AggregateMakler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMakler[P]>
      : GetScalarType<T[P], AggregateMakler[P]>
  }




  export type MaklerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaklerWhereInput
    orderBy?: MaklerOrderByWithAggregationInput | MaklerOrderByWithAggregationInput[]
    by: MaklerScalarFieldEnum[] | MaklerScalarFieldEnum
    having?: MaklerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaklerCountAggregateInputType | true
    _min?: MaklerMinAggregateInputType
    _max?: MaklerMaxAggregateInputType
  }

  export type MaklerGroupByOutputType = {
    id: string
    userId: string
    tenantId: string
    firstName: string
    lastName: string
    company: string
    phone: string | null
    website: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    logo: string | null
    primaryColor: string
    secondaryColor: string
    _count: MaklerCountAggregateOutputType | null
    _min: MaklerMinAggregateOutputType | null
    _max: MaklerMaxAggregateOutputType | null
  }

  type GetMaklerGroupByPayload<T extends MaklerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaklerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaklerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaklerGroupByOutputType[P]>
            : GetScalarType<T[P], MaklerGroupByOutputType[P]>
        }
      >
    >


  export type MaklerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    phone?: boolean
    website?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    logo?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaigns?: boolean | Makler$campaignsArgs<ExtArgs>
    leads?: boolean | Makler$leadsArgs<ExtArgs>
    landingPages?: boolean | Makler$landingPagesArgs<ExtArgs>
    _count?: boolean | MaklerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["makler"]>

  export type MaklerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    phone?: boolean
    website?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    logo?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["makler"]>

  export type MaklerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    phone?: boolean
    website?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    logo?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["makler"]>

  export type MaklerSelectScalar = {
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    phone?: boolean
    website?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    logo?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
  }

  export type MaklerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tenantId" | "firstName" | "lastName" | "company" | "phone" | "website" | "address" | "city" | "postalCode" | "isActive" | "createdAt" | "updatedAt" | "logo" | "primaryColor" | "secondaryColor", ExtArgs["result"]["makler"]>
  export type MaklerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaigns?: boolean | Makler$campaignsArgs<ExtArgs>
    leads?: boolean | Makler$leadsArgs<ExtArgs>
    landingPages?: boolean | Makler$landingPagesArgs<ExtArgs>
    _count?: boolean | MaklerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaklerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type MaklerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $MaklerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Makler"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
      landingPages: Prisma.$LandingPagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tenantId: string
      firstName: string
      lastName: string
      company: string
      phone: string | null
      website: string | null
      address: string | null
      city: string | null
      postalCode: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      logo: string | null
      primaryColor: string
      secondaryColor: string
    }, ExtArgs["result"]["makler"]>
    composites: {}
  }

  type MaklerGetPayload<S extends boolean | null | undefined | MaklerDefaultArgs> = $Result.GetResult<Prisma.$MaklerPayload, S>

  type MaklerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaklerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaklerCountAggregateInputType | true
    }

  export interface MaklerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Makler'], meta: { name: 'Makler' } }
    /**
     * Find zero or one Makler that matches the filter.
     * @param {MaklerFindUniqueArgs} args - Arguments to find a Makler
     * @example
     * // Get one Makler
     * const makler = await prisma.makler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaklerFindUniqueArgs>(args: SelectSubset<T, MaklerFindUniqueArgs<ExtArgs>>): Prisma__MaklerClient<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Makler that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaklerFindUniqueOrThrowArgs} args - Arguments to find a Makler
     * @example
     * // Get one Makler
     * const makler = await prisma.makler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaklerFindUniqueOrThrowArgs>(args: SelectSubset<T, MaklerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaklerClient<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Makler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaklerFindFirstArgs} args - Arguments to find a Makler
     * @example
     * // Get one Makler
     * const makler = await prisma.makler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaklerFindFirstArgs>(args?: SelectSubset<T, MaklerFindFirstArgs<ExtArgs>>): Prisma__MaklerClient<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Makler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaklerFindFirstOrThrowArgs} args - Arguments to find a Makler
     * @example
     * // Get one Makler
     * const makler = await prisma.makler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaklerFindFirstOrThrowArgs>(args?: SelectSubset<T, MaklerFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaklerClient<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maklers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaklerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maklers
     * const maklers = await prisma.makler.findMany()
     * 
     * // Get first 10 Maklers
     * const maklers = await prisma.makler.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maklerWithIdOnly = await prisma.makler.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaklerFindManyArgs>(args?: SelectSubset<T, MaklerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Makler.
     * @param {MaklerCreateArgs} args - Arguments to create a Makler.
     * @example
     * // Create one Makler
     * const Makler = await prisma.makler.create({
     *   data: {
     *     // ... data to create a Makler
     *   }
     * })
     * 
     */
    create<T extends MaklerCreateArgs>(args: SelectSubset<T, MaklerCreateArgs<ExtArgs>>): Prisma__MaklerClient<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maklers.
     * @param {MaklerCreateManyArgs} args - Arguments to create many Maklers.
     * @example
     * // Create many Maklers
     * const makler = await prisma.makler.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaklerCreateManyArgs>(args?: SelectSubset<T, MaklerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maklers and returns the data saved in the database.
     * @param {MaklerCreateManyAndReturnArgs} args - Arguments to create many Maklers.
     * @example
     * // Create many Maklers
     * const makler = await prisma.makler.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maklers and only return the `id`
     * const maklerWithIdOnly = await prisma.makler.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaklerCreateManyAndReturnArgs>(args?: SelectSubset<T, MaklerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Makler.
     * @param {MaklerDeleteArgs} args - Arguments to delete one Makler.
     * @example
     * // Delete one Makler
     * const Makler = await prisma.makler.delete({
     *   where: {
     *     // ... filter to delete one Makler
     *   }
     * })
     * 
     */
    delete<T extends MaklerDeleteArgs>(args: SelectSubset<T, MaklerDeleteArgs<ExtArgs>>): Prisma__MaklerClient<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Makler.
     * @param {MaklerUpdateArgs} args - Arguments to update one Makler.
     * @example
     * // Update one Makler
     * const makler = await prisma.makler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaklerUpdateArgs>(args: SelectSubset<T, MaklerUpdateArgs<ExtArgs>>): Prisma__MaklerClient<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maklers.
     * @param {MaklerDeleteManyArgs} args - Arguments to filter Maklers to delete.
     * @example
     * // Delete a few Maklers
     * const { count } = await prisma.makler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaklerDeleteManyArgs>(args?: SelectSubset<T, MaklerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maklers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaklerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maklers
     * const makler = await prisma.makler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaklerUpdateManyArgs>(args: SelectSubset<T, MaklerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maklers and returns the data updated in the database.
     * @param {MaklerUpdateManyAndReturnArgs} args - Arguments to update many Maklers.
     * @example
     * // Update many Maklers
     * const makler = await prisma.makler.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maklers and only return the `id`
     * const maklerWithIdOnly = await prisma.makler.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaklerUpdateManyAndReturnArgs>(args: SelectSubset<T, MaklerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Makler.
     * @param {MaklerUpsertArgs} args - Arguments to update or create a Makler.
     * @example
     * // Update or create a Makler
     * const makler = await prisma.makler.upsert({
     *   create: {
     *     // ... data to create a Makler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Makler we want to update
     *   }
     * })
     */
    upsert<T extends MaklerUpsertArgs>(args: SelectSubset<T, MaklerUpsertArgs<ExtArgs>>): Prisma__MaklerClient<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maklers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaklerCountArgs} args - Arguments to filter Maklers to count.
     * @example
     * // Count the number of Maklers
     * const count = await prisma.makler.count({
     *   where: {
     *     // ... the filter for the Maklers we want to count
     *   }
     * })
    **/
    count<T extends MaklerCountArgs>(
      args?: Subset<T, MaklerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaklerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Makler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaklerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaklerAggregateArgs>(args: Subset<T, MaklerAggregateArgs>): Prisma.PrismaPromise<GetMaklerAggregateType<T>>

    /**
     * Group by Makler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaklerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaklerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaklerGroupByArgs['orderBy'] }
        : { orderBy?: MaklerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaklerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaklerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Makler model
   */
  readonly fields: MaklerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Makler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaklerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaigns<T extends Makler$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Makler$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends Makler$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Makler$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    landingPages<T extends Makler$landingPagesArgs<ExtArgs> = {}>(args?: Subset<T, Makler$landingPagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Makler model
   */
  interface MaklerFieldRefs {
    readonly id: FieldRef<"Makler", 'String'>
    readonly userId: FieldRef<"Makler", 'String'>
    readonly tenantId: FieldRef<"Makler", 'String'>
    readonly firstName: FieldRef<"Makler", 'String'>
    readonly lastName: FieldRef<"Makler", 'String'>
    readonly company: FieldRef<"Makler", 'String'>
    readonly phone: FieldRef<"Makler", 'String'>
    readonly website: FieldRef<"Makler", 'String'>
    readonly address: FieldRef<"Makler", 'String'>
    readonly city: FieldRef<"Makler", 'String'>
    readonly postalCode: FieldRef<"Makler", 'String'>
    readonly isActive: FieldRef<"Makler", 'Boolean'>
    readonly createdAt: FieldRef<"Makler", 'DateTime'>
    readonly updatedAt: FieldRef<"Makler", 'DateTime'>
    readonly logo: FieldRef<"Makler", 'String'>
    readonly primaryColor: FieldRef<"Makler", 'String'>
    readonly secondaryColor: FieldRef<"Makler", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Makler findUnique
   */
  export type MaklerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerInclude<ExtArgs> | null
    /**
     * Filter, which Makler to fetch.
     */
    where: MaklerWhereUniqueInput
  }

  /**
   * Makler findUniqueOrThrow
   */
  export type MaklerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerInclude<ExtArgs> | null
    /**
     * Filter, which Makler to fetch.
     */
    where: MaklerWhereUniqueInput
  }

  /**
   * Makler findFirst
   */
  export type MaklerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerInclude<ExtArgs> | null
    /**
     * Filter, which Makler to fetch.
     */
    where?: MaklerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maklers to fetch.
     */
    orderBy?: MaklerOrderByWithRelationInput | MaklerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maklers.
     */
    cursor?: MaklerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maklers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maklers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maklers.
     */
    distinct?: MaklerScalarFieldEnum | MaklerScalarFieldEnum[]
  }

  /**
   * Makler findFirstOrThrow
   */
  export type MaklerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerInclude<ExtArgs> | null
    /**
     * Filter, which Makler to fetch.
     */
    where?: MaklerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maklers to fetch.
     */
    orderBy?: MaklerOrderByWithRelationInput | MaklerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maklers.
     */
    cursor?: MaklerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maklers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maklers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maklers.
     */
    distinct?: MaklerScalarFieldEnum | MaklerScalarFieldEnum[]
  }

  /**
   * Makler findMany
   */
  export type MaklerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerInclude<ExtArgs> | null
    /**
     * Filter, which Maklers to fetch.
     */
    where?: MaklerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maklers to fetch.
     */
    orderBy?: MaklerOrderByWithRelationInput | MaklerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maklers.
     */
    cursor?: MaklerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maklers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maklers.
     */
    skip?: number
    distinct?: MaklerScalarFieldEnum | MaklerScalarFieldEnum[]
  }

  /**
   * Makler create
   */
  export type MaklerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerInclude<ExtArgs> | null
    /**
     * The data needed to create a Makler.
     */
    data: XOR<MaklerCreateInput, MaklerUncheckedCreateInput>
  }

  /**
   * Makler createMany
   */
  export type MaklerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maklers.
     */
    data: MaklerCreateManyInput | MaklerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Makler createManyAndReturn
   */
  export type MaklerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * The data used to create many Maklers.
     */
    data: MaklerCreateManyInput | MaklerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Makler update
   */
  export type MaklerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerInclude<ExtArgs> | null
    /**
     * The data needed to update a Makler.
     */
    data: XOR<MaklerUpdateInput, MaklerUncheckedUpdateInput>
    /**
     * Choose, which Makler to update.
     */
    where: MaklerWhereUniqueInput
  }

  /**
   * Makler updateMany
   */
  export type MaklerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maklers.
     */
    data: XOR<MaklerUpdateManyMutationInput, MaklerUncheckedUpdateManyInput>
    /**
     * Filter which Maklers to update
     */
    where?: MaklerWhereInput
    /**
     * Limit how many Maklers to update.
     */
    limit?: number
  }

  /**
   * Makler updateManyAndReturn
   */
  export type MaklerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * The data used to update Maklers.
     */
    data: XOR<MaklerUpdateManyMutationInput, MaklerUncheckedUpdateManyInput>
    /**
     * Filter which Maklers to update
     */
    where?: MaklerWhereInput
    /**
     * Limit how many Maklers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Makler upsert
   */
  export type MaklerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerInclude<ExtArgs> | null
    /**
     * The filter to search for the Makler to update in case it exists.
     */
    where: MaklerWhereUniqueInput
    /**
     * In case the Makler found by the `where` argument doesn't exist, create a new Makler with this data.
     */
    create: XOR<MaklerCreateInput, MaklerUncheckedCreateInput>
    /**
     * In case the Makler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaklerUpdateInput, MaklerUncheckedUpdateInput>
  }

  /**
   * Makler delete
   */
  export type MaklerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerInclude<ExtArgs> | null
    /**
     * Filter which Makler to delete.
     */
    where: MaklerWhereUniqueInput
  }

  /**
   * Makler deleteMany
   */
  export type MaklerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maklers to delete
     */
    where?: MaklerWhereInput
    /**
     * Limit how many Maklers to delete.
     */
    limit?: number
  }

  /**
   * Makler.campaigns
   */
  export type Makler$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Makler.leads
   */
  export type Makler$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Makler.landingPages
   */
  export type Makler$landingPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    where?: LandingPageWhereInput
    orderBy?: LandingPageOrderByWithRelationInput | LandingPageOrderByWithRelationInput[]
    cursor?: LandingPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LandingPageScalarFieldEnum | LandingPageScalarFieldEnum[]
  }

  /**
   * Makler without action
   */
  export type MaklerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Makler
     */
    select?: MaklerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Makler
     */
    omit?: MaklerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaklerInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    budget: number | null
    spent: number | null
    impressions: number | null
    clicks: number | null
    leads: number | null
    conversions: number | null
    ctr: number | null
    cpl: number | null
    conversionRate: number | null
  }

  export type CampaignSumAggregateOutputType = {
    budget: number | null
    spent: number | null
    impressions: number | null
    clicks: number | null
    leads: number | null
    conversions: number | null
    ctr: number | null
    cpl: number | null
    conversionRate: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    maklerId: string | null
    tenantId: string | null
    name: string | null
    description: string | null
    status: $Enums.CampaignStatus | null
    budget: number | null
    spent: number | null
    platform: $Enums.Platform | null
    createdAt: Date | null
    updatedAt: Date | null
    impressions: number | null
    clicks: number | null
    leads: number | null
    conversions: number | null
    ctr: number | null
    cpl: number | null
    conversionRate: number | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    maklerId: string | null
    tenantId: string | null
    name: string | null
    description: string | null
    status: $Enums.CampaignStatus | null
    budget: number | null
    spent: number | null
    platform: $Enums.Platform | null
    createdAt: Date | null
    updatedAt: Date | null
    impressions: number | null
    clicks: number | null
    leads: number | null
    conversions: number | null
    ctr: number | null
    cpl: number | null
    conversionRate: number | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    maklerId: number
    tenantId: number
    name: number
    description: number
    status: number
    budget: number
    spent: number
    platform: number
    targeting: number
    createdAt: number
    updatedAt: number
    impressions: number
    clicks: number
    leads: number
    conversions: number
    ctr: number
    cpl: number
    conversionRate: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    budget?: true
    spent?: true
    impressions?: true
    clicks?: true
    leads?: true
    conversions?: true
    ctr?: true
    cpl?: true
    conversionRate?: true
  }

  export type CampaignSumAggregateInputType = {
    budget?: true
    spent?: true
    impressions?: true
    clicks?: true
    leads?: true
    conversions?: true
    ctr?: true
    cpl?: true
    conversionRate?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    maklerId?: true
    tenantId?: true
    name?: true
    description?: true
    status?: true
    budget?: true
    spent?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
    impressions?: true
    clicks?: true
    leads?: true
    conversions?: true
    ctr?: true
    cpl?: true
    conversionRate?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    maklerId?: true
    tenantId?: true
    name?: true
    description?: true
    status?: true
    budget?: true
    spent?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
    impressions?: true
    clicks?: true
    leads?: true
    conversions?: true
    ctr?: true
    cpl?: true
    conversionRate?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    maklerId?: true
    tenantId?: true
    name?: true
    description?: true
    status?: true
    budget?: true
    spent?: true
    platform?: true
    targeting?: true
    createdAt?: true
    updatedAt?: true
    impressions?: true
    clicks?: true
    leads?: true
    conversions?: true
    ctr?: true
    cpl?: true
    conversionRate?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    maklerId: string
    tenantId: string
    name: string
    description: string | null
    status: $Enums.CampaignStatus
    budget: number
    spent: number
    platform: $Enums.Platform
    targeting: JsonValue
    createdAt: Date
    updatedAt: Date
    impressions: number
    clicks: number
    leads: number
    conversions: number
    ctr: number
    cpl: number
    conversionRate: number
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maklerId?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    budget?: boolean
    spent?: boolean
    platform?: boolean
    targeting?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    impressions?: boolean
    clicks?: boolean
    leads?: boolean
    conversions?: boolean
    ctr?: boolean
    cpl?: boolean
    conversionRate?: boolean
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    leadSources?: boolean | Campaign$leadSourcesArgs<ExtArgs>
    landingPages?: boolean | Campaign$landingPagesArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maklerId?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    budget?: boolean
    spent?: boolean
    platform?: boolean
    targeting?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    impressions?: boolean
    clicks?: boolean
    leads?: boolean
    conversions?: boolean
    ctr?: boolean
    cpl?: boolean
    conversionRate?: boolean
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maklerId?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    budget?: boolean
    spent?: boolean
    platform?: boolean
    targeting?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    impressions?: boolean
    clicks?: boolean
    leads?: boolean
    conversions?: boolean
    ctr?: boolean
    cpl?: boolean
    conversionRate?: boolean
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    maklerId?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    budget?: boolean
    spent?: boolean
    platform?: boolean
    targeting?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    impressions?: boolean
    clicks?: boolean
    leads?: boolean
    conversions?: boolean
    ctr?: boolean
    cpl?: boolean
    conversionRate?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "maklerId" | "tenantId" | "name" | "description" | "status" | "budget" | "spent" | "platform" | "targeting" | "createdAt" | "updatedAt" | "impressions" | "clicks" | "leads" | "conversions" | "ctr" | "cpl" | "conversionRate", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    leadSources?: boolean | Campaign$leadSourcesArgs<ExtArgs>
    landingPages?: boolean | Campaign$landingPagesArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      makler: Prisma.$MaklerPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
      leadSources: Prisma.$LeadPayload<ExtArgs>[]
      landingPages: Prisma.$LandingPagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      maklerId: string
      tenantId: string
      name: string
      description: string | null
      status: $Enums.CampaignStatus
      budget: number
      spent: number
      platform: $Enums.Platform
      targeting: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      impressions: number
      clicks: number
      leads: number
      conversions: number
      ctr: number
      cpl: number
      conversionRate: number
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    makler<T extends MaklerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaklerDefaultArgs<ExtArgs>>): Prisma__MaklerClient<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leadSources<T extends Campaign$leadSourcesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$leadSourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    landingPages<T extends Campaign$landingPagesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$landingPagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly maklerId: FieldRef<"Campaign", 'String'>
    readonly tenantId: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly budget: FieldRef<"Campaign", 'Float'>
    readonly spent: FieldRef<"Campaign", 'Float'>
    readonly platform: FieldRef<"Campaign", 'Platform'>
    readonly targeting: FieldRef<"Campaign", 'Json'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
    readonly impressions: FieldRef<"Campaign", 'Int'>
    readonly clicks: FieldRef<"Campaign", 'Int'>
    readonly leads: FieldRef<"Campaign", 'Int'>
    readonly conversions: FieldRef<"Campaign", 'Int'>
    readonly ctr: FieldRef<"Campaign", 'Float'>
    readonly cpl: FieldRef<"Campaign", 'Float'>
    readonly conversionRate: FieldRef<"Campaign", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.leadSources
   */
  export type Campaign$leadSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Campaign.landingPages
   */
  export type Campaign$landingPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    where?: LandingPageWhereInput
    orderBy?: LandingPageOrderByWithRelationInput | LandingPageOrderByWithRelationInput[]
    cursor?: LandingPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LandingPageScalarFieldEnum | LandingPageScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadAvgAggregateOutputType = {
    score: number | null
    budget: number | null
  }

  export type LeadSumAggregateOutputType = {
    score: number | null
    budget: number | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    maklerId: string | null
    tenantId: string | null
    campaignId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    address: string | null
    city: string | null
    postalCode: string | null
    status: $Enums.LeadStatus | null
    score: number | null
    source: string | null
    interest: string | null
    budget: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastContact: Date | null
    nextFollowUp: Date | null
    consentGiven: boolean | null
    consentDate: Date | null
    marketingConsent: boolean | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    maklerId: string | null
    tenantId: string | null
    campaignId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    address: string | null
    city: string | null
    postalCode: string | null
    status: $Enums.LeadStatus | null
    score: number | null
    source: string | null
    interest: string | null
    budget: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastContact: Date | null
    nextFollowUp: Date | null
    consentGiven: boolean | null
    consentDate: Date | null
    marketingConsent: boolean | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    maklerId: number
    tenantId: number
    campaignId: number
    firstName: number
    lastName: number
    email: number
    phone: number
    dateOfBirth: number
    address: number
    city: number
    postalCode: number
    status: number
    score: number
    source: number
    interest: number
    budget: number
    notes: number
    createdAt: number
    updatedAt: number
    lastContact: number
    nextFollowUp: number
    consentGiven: number
    consentDate: number
    marketingConsent: number
    _all: number
  }


  export type LeadAvgAggregateInputType = {
    score?: true
    budget?: true
  }

  export type LeadSumAggregateInputType = {
    score?: true
    budget?: true
  }

  export type LeadMinAggregateInputType = {
    id?: true
    maklerId?: true
    tenantId?: true
    campaignId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    address?: true
    city?: true
    postalCode?: true
    status?: true
    score?: true
    source?: true
    interest?: true
    budget?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    lastContact?: true
    nextFollowUp?: true
    consentGiven?: true
    consentDate?: true
    marketingConsent?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    maklerId?: true
    tenantId?: true
    campaignId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    address?: true
    city?: true
    postalCode?: true
    status?: true
    score?: true
    source?: true
    interest?: true
    budget?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    lastContact?: true
    nextFollowUp?: true
    consentGiven?: true
    consentDate?: true
    marketingConsent?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    maklerId?: true
    tenantId?: true
    campaignId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    address?: true
    city?: true
    postalCode?: true
    status?: true
    score?: true
    source?: true
    interest?: true
    budget?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    lastContact?: true
    nextFollowUp?: true
    consentGiven?: true
    consentDate?: true
    marketingConsent?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _avg?: LeadAvgAggregateInputType
    _sum?: LeadSumAggregateInputType
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    maklerId: string
    tenantId: string
    campaignId: string | null
    firstName: string
    lastName: string
    email: string
    phone: string | null
    dateOfBirth: Date | null
    address: string | null
    city: string | null
    postalCode: string | null
    status: $Enums.LeadStatus
    score: number
    source: string | null
    interest: string | null
    budget: number | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    lastContact: Date | null
    nextFollowUp: Date | null
    consentGiven: boolean
    consentDate: Date | null
    marketingConsent: boolean
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maklerId?: boolean
    tenantId?: boolean
    campaignId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    status?: boolean
    score?: boolean
    source?: boolean
    interest?: boolean
    budget?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastContact?: boolean
    nextFollowUp?: boolean
    consentGiven?: boolean
    consentDate?: boolean
    marketingConsent?: boolean
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | Lead$campaignArgs<ExtArgs>
    communications?: boolean | Lead$communicationsArgs<ExtArgs>
    activities?: boolean | Lead$activitiesArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maklerId?: boolean
    tenantId?: boolean
    campaignId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    status?: boolean
    score?: boolean
    source?: boolean
    interest?: boolean
    budget?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastContact?: boolean
    nextFollowUp?: boolean
    consentGiven?: boolean
    consentDate?: boolean
    marketingConsent?: boolean
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | Lead$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maklerId?: boolean
    tenantId?: boolean
    campaignId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    status?: boolean
    score?: boolean
    source?: boolean
    interest?: boolean
    budget?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastContact?: boolean
    nextFollowUp?: boolean
    consentGiven?: boolean
    consentDate?: boolean
    marketingConsent?: boolean
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | Lead$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    maklerId?: boolean
    tenantId?: boolean
    campaignId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    status?: boolean
    score?: boolean
    source?: boolean
    interest?: boolean
    budget?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastContact?: boolean
    nextFollowUp?: boolean
    consentGiven?: boolean
    consentDate?: boolean
    marketingConsent?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "maklerId" | "tenantId" | "campaignId" | "firstName" | "lastName" | "email" | "phone" | "dateOfBirth" | "address" | "city" | "postalCode" | "status" | "score" | "source" | "interest" | "budget" | "notes" | "createdAt" | "updatedAt" | "lastContact" | "nextFollowUp" | "consentGiven" | "consentDate" | "marketingConsent", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | Lead$campaignArgs<ExtArgs>
    communications?: boolean | Lead$communicationsArgs<ExtArgs>
    activities?: boolean | Lead$activitiesArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | Lead$campaignArgs<ExtArgs>
  }
  export type LeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | Lead$campaignArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      makler: Prisma.$MaklerPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs> | null
      communications: Prisma.$CommunicationPayload<ExtArgs>[]
      activities: Prisma.$LeadActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      maklerId: string
      tenantId: string
      campaignId: string | null
      firstName: string
      lastName: string
      email: string
      phone: string | null
      dateOfBirth: Date | null
      address: string | null
      city: string | null
      postalCode: string | null
      status: $Enums.LeadStatus
      score: number
      source: string | null
      interest: string | null
      budget: number | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      lastContact: Date | null
      nextFollowUp: Date | null
      consentGiven: boolean
      consentDate: Date | null
      marketingConsent: boolean
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    makler<T extends MaklerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaklerDefaultArgs<ExtArgs>>): Prisma__MaklerClient<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaign<T extends Lead$campaignArgs<ExtArgs> = {}>(args?: Subset<T, Lead$campaignArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    communications<T extends Lead$communicationsArgs<ExtArgs> = {}>(args?: Subset<T, Lead$communicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Lead$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Lead$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly maklerId: FieldRef<"Lead", 'String'>
    readonly tenantId: FieldRef<"Lead", 'String'>
    readonly campaignId: FieldRef<"Lead", 'String'>
    readonly firstName: FieldRef<"Lead", 'String'>
    readonly lastName: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly phone: FieldRef<"Lead", 'String'>
    readonly dateOfBirth: FieldRef<"Lead", 'DateTime'>
    readonly address: FieldRef<"Lead", 'String'>
    readonly city: FieldRef<"Lead", 'String'>
    readonly postalCode: FieldRef<"Lead", 'String'>
    readonly status: FieldRef<"Lead", 'LeadStatus'>
    readonly score: FieldRef<"Lead", 'Int'>
    readonly source: FieldRef<"Lead", 'String'>
    readonly interest: FieldRef<"Lead", 'String'>
    readonly budget: FieldRef<"Lead", 'Float'>
    readonly notes: FieldRef<"Lead", 'String'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
    readonly updatedAt: FieldRef<"Lead", 'DateTime'>
    readonly lastContact: FieldRef<"Lead", 'DateTime'>
    readonly nextFollowUp: FieldRef<"Lead", 'DateTime'>
    readonly consentGiven: FieldRef<"Lead", 'Boolean'>
    readonly consentDate: FieldRef<"Lead", 'DateTime'>
    readonly marketingConsent: FieldRef<"Lead", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead.campaign
   */
  export type Lead$campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
  }

  /**
   * Lead.communications
   */
  export type Lead$communicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    where?: CommunicationWhereInput
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    cursor?: CommunicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * Lead.activities
   */
  export type Lead$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadActivity
     */
    select?: LeadActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadActivity
     */
    omit?: LeadActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadActivityInclude<ExtArgs> | null
    where?: LeadActivityWhereInput
    orderBy?: LeadActivityOrderByWithRelationInput | LeadActivityOrderByWithRelationInput[]
    cursor?: LeadActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadActivityScalarFieldEnum | LeadActivityScalarFieldEnum[]
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model Communication
   */

  export type AggregateCommunication = {
    _count: CommunicationCountAggregateOutputType | null
    _min: CommunicationMinAggregateOutputType | null
    _max: CommunicationMaxAggregateOutputType | null
  }

  export type CommunicationMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    type: $Enums.CommunicationType | null
    direction: $Enums.CommunicationDirection | null
    subject: string | null
    content: string | null
    status: $Enums.CommunicationStatus | null
    sentAt: Date | null
    readAt: Date | null
  }

  export type CommunicationMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    type: $Enums.CommunicationType | null
    direction: $Enums.CommunicationDirection | null
    subject: string | null
    content: string | null
    status: $Enums.CommunicationStatus | null
    sentAt: Date | null
    readAt: Date | null
  }

  export type CommunicationCountAggregateOutputType = {
    id: number
    leadId: number
    type: number
    direction: number
    subject: number
    content: number
    status: number
    sentAt: number
    readAt: number
    _all: number
  }


  export type CommunicationMinAggregateInputType = {
    id?: true
    leadId?: true
    type?: true
    direction?: true
    subject?: true
    content?: true
    status?: true
    sentAt?: true
    readAt?: true
  }

  export type CommunicationMaxAggregateInputType = {
    id?: true
    leadId?: true
    type?: true
    direction?: true
    subject?: true
    content?: true
    status?: true
    sentAt?: true
    readAt?: true
  }

  export type CommunicationCountAggregateInputType = {
    id?: true
    leadId?: true
    type?: true
    direction?: true
    subject?: true
    content?: true
    status?: true
    sentAt?: true
    readAt?: true
    _all?: true
  }

  export type CommunicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communication to aggregate.
     */
    where?: CommunicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communications to fetch.
     */
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communications
    **/
    _count?: true | CommunicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunicationMaxAggregateInputType
  }

  export type GetCommunicationAggregateType<T extends CommunicationAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunication[P]>
      : GetScalarType<T[P], AggregateCommunication[P]>
  }




  export type CommunicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationWhereInput
    orderBy?: CommunicationOrderByWithAggregationInput | CommunicationOrderByWithAggregationInput[]
    by: CommunicationScalarFieldEnum[] | CommunicationScalarFieldEnum
    having?: CommunicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunicationCountAggregateInputType | true
    _min?: CommunicationMinAggregateInputType
    _max?: CommunicationMaxAggregateInputType
  }

  export type CommunicationGroupByOutputType = {
    id: string
    leadId: string
    type: $Enums.CommunicationType
    direction: $Enums.CommunicationDirection
    subject: string | null
    content: string
    status: $Enums.CommunicationStatus
    sentAt: Date
    readAt: Date | null
    _count: CommunicationCountAggregateOutputType | null
    _min: CommunicationMinAggregateOutputType | null
    _max: CommunicationMaxAggregateOutputType | null
  }

  type GetCommunicationGroupByPayload<T extends CommunicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunicationGroupByOutputType[P]>
            : GetScalarType<T[P], CommunicationGroupByOutputType[P]>
        }
      >
    >


  export type CommunicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    type?: boolean
    direction?: boolean
    subject?: boolean
    content?: boolean
    status?: boolean
    sentAt?: boolean
    readAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communication"]>

  export type CommunicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    type?: boolean
    direction?: boolean
    subject?: boolean
    content?: boolean
    status?: boolean
    sentAt?: boolean
    readAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communication"]>

  export type CommunicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    type?: boolean
    direction?: boolean
    subject?: boolean
    content?: boolean
    status?: boolean
    sentAt?: boolean
    readAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communication"]>

  export type CommunicationSelectScalar = {
    id?: boolean
    leadId?: boolean
    type?: boolean
    direction?: boolean
    subject?: boolean
    content?: boolean
    status?: boolean
    sentAt?: boolean
    readAt?: boolean
  }

  export type CommunicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "type" | "direction" | "subject" | "content" | "status" | "sentAt" | "readAt", ExtArgs["result"]["communication"]>
  export type CommunicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type CommunicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type CommunicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $CommunicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Communication"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      type: $Enums.CommunicationType
      direction: $Enums.CommunicationDirection
      subject: string | null
      content: string
      status: $Enums.CommunicationStatus
      sentAt: Date
      readAt: Date | null
    }, ExtArgs["result"]["communication"]>
    composites: {}
  }

  type CommunicationGetPayload<S extends boolean | null | undefined | CommunicationDefaultArgs> = $Result.GetResult<Prisma.$CommunicationPayload, S>

  type CommunicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunicationCountAggregateInputType | true
    }

  export interface CommunicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Communication'], meta: { name: 'Communication' } }
    /**
     * Find zero or one Communication that matches the filter.
     * @param {CommunicationFindUniqueArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunicationFindUniqueArgs>(args: SelectSubset<T, CommunicationFindUniqueArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Communication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunicationFindUniqueOrThrowArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunicationFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Communication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationFindFirstArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunicationFindFirstArgs>(args?: SelectSubset<T, CommunicationFindFirstArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Communication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationFindFirstOrThrowArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunicationFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communications
     * const communications = await prisma.communication.findMany()
     * 
     * // Get first 10 Communications
     * const communications = await prisma.communication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communicationWithIdOnly = await prisma.communication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunicationFindManyArgs>(args?: SelectSubset<T, CommunicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Communication.
     * @param {CommunicationCreateArgs} args - Arguments to create a Communication.
     * @example
     * // Create one Communication
     * const Communication = await prisma.communication.create({
     *   data: {
     *     // ... data to create a Communication
     *   }
     * })
     * 
     */
    create<T extends CommunicationCreateArgs>(args: SelectSubset<T, CommunicationCreateArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communications.
     * @param {CommunicationCreateManyArgs} args - Arguments to create many Communications.
     * @example
     * // Create many Communications
     * const communication = await prisma.communication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunicationCreateManyArgs>(args?: SelectSubset<T, CommunicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communications and returns the data saved in the database.
     * @param {CommunicationCreateManyAndReturnArgs} args - Arguments to create many Communications.
     * @example
     * // Create many Communications
     * const communication = await prisma.communication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communications and only return the `id`
     * const communicationWithIdOnly = await prisma.communication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunicationCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Communication.
     * @param {CommunicationDeleteArgs} args - Arguments to delete one Communication.
     * @example
     * // Delete one Communication
     * const Communication = await prisma.communication.delete({
     *   where: {
     *     // ... filter to delete one Communication
     *   }
     * })
     * 
     */
    delete<T extends CommunicationDeleteArgs>(args: SelectSubset<T, CommunicationDeleteArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Communication.
     * @param {CommunicationUpdateArgs} args - Arguments to update one Communication.
     * @example
     * // Update one Communication
     * const communication = await prisma.communication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunicationUpdateArgs>(args: SelectSubset<T, CommunicationUpdateArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communications.
     * @param {CommunicationDeleteManyArgs} args - Arguments to filter Communications to delete.
     * @example
     * // Delete a few Communications
     * const { count } = await prisma.communication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunicationDeleteManyArgs>(args?: SelectSubset<T, CommunicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communications
     * const communication = await prisma.communication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunicationUpdateManyArgs>(args: SelectSubset<T, CommunicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communications and returns the data updated in the database.
     * @param {CommunicationUpdateManyAndReturnArgs} args - Arguments to update many Communications.
     * @example
     * // Update many Communications
     * const communication = await prisma.communication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communications and only return the `id`
     * const communicationWithIdOnly = await prisma.communication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunicationUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Communication.
     * @param {CommunicationUpsertArgs} args - Arguments to update or create a Communication.
     * @example
     * // Update or create a Communication
     * const communication = await prisma.communication.upsert({
     *   create: {
     *     // ... data to create a Communication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Communication we want to update
     *   }
     * })
     */
    upsert<T extends CommunicationUpsertArgs>(args: SelectSubset<T, CommunicationUpsertArgs<ExtArgs>>): Prisma__CommunicationClient<$Result.GetResult<Prisma.$CommunicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationCountArgs} args - Arguments to filter Communications to count.
     * @example
     * // Count the number of Communications
     * const count = await prisma.communication.count({
     *   where: {
     *     // ... the filter for the Communications we want to count
     *   }
     * })
    **/
    count<T extends CommunicationCountArgs>(
      args?: Subset<T, CommunicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Communication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunicationAggregateArgs>(args: Subset<T, CommunicationAggregateArgs>): Prisma.PrismaPromise<GetCommunicationAggregateType<T>>

    /**
     * Group by Communication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunicationGroupByArgs['orderBy'] }
        : { orderBy?: CommunicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Communication model
   */
  readonly fields: CommunicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Communication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Communication model
   */
  interface CommunicationFieldRefs {
    readonly id: FieldRef<"Communication", 'String'>
    readonly leadId: FieldRef<"Communication", 'String'>
    readonly type: FieldRef<"Communication", 'CommunicationType'>
    readonly direction: FieldRef<"Communication", 'CommunicationDirection'>
    readonly subject: FieldRef<"Communication", 'String'>
    readonly content: FieldRef<"Communication", 'String'>
    readonly status: FieldRef<"Communication", 'CommunicationStatus'>
    readonly sentAt: FieldRef<"Communication", 'DateTime'>
    readonly readAt: FieldRef<"Communication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Communication findUnique
   */
  export type CommunicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communication to fetch.
     */
    where: CommunicationWhereUniqueInput
  }

  /**
   * Communication findUniqueOrThrow
   */
  export type CommunicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communication to fetch.
     */
    where: CommunicationWhereUniqueInput
  }

  /**
   * Communication findFirst
   */
  export type CommunicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communication to fetch.
     */
    where?: CommunicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communications to fetch.
     */
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communications.
     */
    cursor?: CommunicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communications.
     */
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * Communication findFirstOrThrow
   */
  export type CommunicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communication to fetch.
     */
    where?: CommunicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communications to fetch.
     */
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communications.
     */
    cursor?: CommunicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communications.
     */
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * Communication findMany
   */
  export type CommunicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter, which Communications to fetch.
     */
    where?: CommunicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communications to fetch.
     */
    orderBy?: CommunicationOrderByWithRelationInput | CommunicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communications.
     */
    cursor?: CommunicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communications.
     */
    skip?: number
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * Communication create
   */
  export type CommunicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Communication.
     */
    data: XOR<CommunicationCreateInput, CommunicationUncheckedCreateInput>
  }

  /**
   * Communication createMany
   */
  export type CommunicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communications.
     */
    data: CommunicationCreateManyInput | CommunicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Communication createManyAndReturn
   */
  export type CommunicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * The data used to create many Communications.
     */
    data: CommunicationCreateManyInput | CommunicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Communication update
   */
  export type CommunicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Communication.
     */
    data: XOR<CommunicationUpdateInput, CommunicationUncheckedUpdateInput>
    /**
     * Choose, which Communication to update.
     */
    where: CommunicationWhereUniqueInput
  }

  /**
   * Communication updateMany
   */
  export type CommunicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communications.
     */
    data: XOR<CommunicationUpdateManyMutationInput, CommunicationUncheckedUpdateManyInput>
    /**
     * Filter which Communications to update
     */
    where?: CommunicationWhereInput
    /**
     * Limit how many Communications to update.
     */
    limit?: number
  }

  /**
   * Communication updateManyAndReturn
   */
  export type CommunicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * The data used to update Communications.
     */
    data: XOR<CommunicationUpdateManyMutationInput, CommunicationUncheckedUpdateManyInput>
    /**
     * Filter which Communications to update
     */
    where?: CommunicationWhereInput
    /**
     * Limit how many Communications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Communication upsert
   */
  export type CommunicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Communication to update in case it exists.
     */
    where: CommunicationWhereUniqueInput
    /**
     * In case the Communication found by the `where` argument doesn't exist, create a new Communication with this data.
     */
    create: XOR<CommunicationCreateInput, CommunicationUncheckedCreateInput>
    /**
     * In case the Communication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunicationUpdateInput, CommunicationUncheckedUpdateInput>
  }

  /**
   * Communication delete
   */
  export type CommunicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
    /**
     * Filter which Communication to delete.
     */
    where: CommunicationWhereUniqueInput
  }

  /**
   * Communication deleteMany
   */
  export type CommunicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communications to delete
     */
    where?: CommunicationWhereInput
    /**
     * Limit how many Communications to delete.
     */
    limit?: number
  }

  /**
   * Communication without action
   */
  export type CommunicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Communication
     */
    select?: CommunicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Communication
     */
    omit?: CommunicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationInclude<ExtArgs> | null
  }


  /**
   * Model LeadActivity
   */

  export type AggregateLeadActivity = {
    _count: LeadActivityCountAggregateOutputType | null
    _min: LeadActivityMinAggregateOutputType | null
    _max: LeadActivityMaxAggregateOutputType | null
  }

  export type LeadActivityMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    type: $Enums.LeadActivityType | null
    description: string | null
    createdAt: Date | null
  }

  export type LeadActivityMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    type: $Enums.LeadActivityType | null
    description: string | null
    createdAt: Date | null
  }

  export type LeadActivityCountAggregateOutputType = {
    id: number
    leadId: number
    type: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type LeadActivityMinAggregateInputType = {
    id?: true
    leadId?: true
    type?: true
    description?: true
    createdAt?: true
  }

  export type LeadActivityMaxAggregateInputType = {
    id?: true
    leadId?: true
    type?: true
    description?: true
    createdAt?: true
  }

  export type LeadActivityCountAggregateInputType = {
    id?: true
    leadId?: true
    type?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type LeadActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadActivity to aggregate.
     */
    where?: LeadActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadActivities to fetch.
     */
    orderBy?: LeadActivityOrderByWithRelationInput | LeadActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadActivities
    **/
    _count?: true | LeadActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadActivityMaxAggregateInputType
  }

  export type GetLeadActivityAggregateType<T extends LeadActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadActivity[P]>
      : GetScalarType<T[P], AggregateLeadActivity[P]>
  }




  export type LeadActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadActivityWhereInput
    orderBy?: LeadActivityOrderByWithAggregationInput | LeadActivityOrderByWithAggregationInput[]
    by: LeadActivityScalarFieldEnum[] | LeadActivityScalarFieldEnum
    having?: LeadActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadActivityCountAggregateInputType | true
    _min?: LeadActivityMinAggregateInputType
    _max?: LeadActivityMaxAggregateInputType
  }

  export type LeadActivityGroupByOutputType = {
    id: string
    leadId: string
    type: $Enums.LeadActivityType
    description: string
    metadata: JsonValue | null
    createdAt: Date
    _count: LeadActivityCountAggregateOutputType | null
    _min: LeadActivityMinAggregateOutputType | null
    _max: LeadActivityMaxAggregateOutputType | null
  }

  type GetLeadActivityGroupByPayload<T extends LeadActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadActivityGroupByOutputType[P]>
            : GetScalarType<T[P], LeadActivityGroupByOutputType[P]>
        }
      >
    >


  export type LeadActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    type?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadActivity"]>

  export type LeadActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    type?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadActivity"]>

  export type LeadActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    type?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadActivity"]>

  export type LeadActivitySelectScalar = {
    id?: boolean
    leadId?: boolean
    type?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type LeadActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "type" | "description" | "metadata" | "createdAt", ExtArgs["result"]["leadActivity"]>
  export type LeadActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $LeadActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadActivity"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      type: $Enums.LeadActivityType
      description: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["leadActivity"]>
    composites: {}
  }

  type LeadActivityGetPayload<S extends boolean | null | undefined | LeadActivityDefaultArgs> = $Result.GetResult<Prisma.$LeadActivityPayload, S>

  type LeadActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadActivityCountAggregateInputType | true
    }

  export interface LeadActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadActivity'], meta: { name: 'LeadActivity' } }
    /**
     * Find zero or one LeadActivity that matches the filter.
     * @param {LeadActivityFindUniqueArgs} args - Arguments to find a LeadActivity
     * @example
     * // Get one LeadActivity
     * const leadActivity = await prisma.leadActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadActivityFindUniqueArgs>(args: SelectSubset<T, LeadActivityFindUniqueArgs<ExtArgs>>): Prisma__LeadActivityClient<$Result.GetResult<Prisma.$LeadActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeadActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadActivityFindUniqueOrThrowArgs} args - Arguments to find a LeadActivity
     * @example
     * // Get one LeadActivity
     * const leadActivity = await prisma.leadActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadActivityClient<$Result.GetResult<Prisma.$LeadActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadActivityFindFirstArgs} args - Arguments to find a LeadActivity
     * @example
     * // Get one LeadActivity
     * const leadActivity = await prisma.leadActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadActivityFindFirstArgs>(args?: SelectSubset<T, LeadActivityFindFirstArgs<ExtArgs>>): Prisma__LeadActivityClient<$Result.GetResult<Prisma.$LeadActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadActivityFindFirstOrThrowArgs} args - Arguments to find a LeadActivity
     * @example
     * // Get one LeadActivity
     * const leadActivity = await prisma.leadActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadActivityClient<$Result.GetResult<Prisma.$LeadActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeadActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadActivities
     * const leadActivities = await prisma.leadActivity.findMany()
     * 
     * // Get first 10 LeadActivities
     * const leadActivities = await prisma.leadActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadActivityWithIdOnly = await prisma.leadActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadActivityFindManyArgs>(args?: SelectSubset<T, LeadActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeadActivity.
     * @param {LeadActivityCreateArgs} args - Arguments to create a LeadActivity.
     * @example
     * // Create one LeadActivity
     * const LeadActivity = await prisma.leadActivity.create({
     *   data: {
     *     // ... data to create a LeadActivity
     *   }
     * })
     * 
     */
    create<T extends LeadActivityCreateArgs>(args: SelectSubset<T, LeadActivityCreateArgs<ExtArgs>>): Prisma__LeadActivityClient<$Result.GetResult<Prisma.$LeadActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeadActivities.
     * @param {LeadActivityCreateManyArgs} args - Arguments to create many LeadActivities.
     * @example
     * // Create many LeadActivities
     * const leadActivity = await prisma.leadActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadActivityCreateManyArgs>(args?: SelectSubset<T, LeadActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadActivities and returns the data saved in the database.
     * @param {LeadActivityCreateManyAndReturnArgs} args - Arguments to create many LeadActivities.
     * @example
     * // Create many LeadActivities
     * const leadActivity = await prisma.leadActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadActivities and only return the `id`
     * const leadActivityWithIdOnly = await prisma.leadActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeadActivity.
     * @param {LeadActivityDeleteArgs} args - Arguments to delete one LeadActivity.
     * @example
     * // Delete one LeadActivity
     * const LeadActivity = await prisma.leadActivity.delete({
     *   where: {
     *     // ... filter to delete one LeadActivity
     *   }
     * })
     * 
     */
    delete<T extends LeadActivityDeleteArgs>(args: SelectSubset<T, LeadActivityDeleteArgs<ExtArgs>>): Prisma__LeadActivityClient<$Result.GetResult<Prisma.$LeadActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeadActivity.
     * @param {LeadActivityUpdateArgs} args - Arguments to update one LeadActivity.
     * @example
     * // Update one LeadActivity
     * const leadActivity = await prisma.leadActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadActivityUpdateArgs>(args: SelectSubset<T, LeadActivityUpdateArgs<ExtArgs>>): Prisma__LeadActivityClient<$Result.GetResult<Prisma.$LeadActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeadActivities.
     * @param {LeadActivityDeleteManyArgs} args - Arguments to filter LeadActivities to delete.
     * @example
     * // Delete a few LeadActivities
     * const { count } = await prisma.leadActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadActivityDeleteManyArgs>(args?: SelectSubset<T, LeadActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadActivities
     * const leadActivity = await prisma.leadActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadActivityUpdateManyArgs>(args: SelectSubset<T, LeadActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadActivities and returns the data updated in the database.
     * @param {LeadActivityUpdateManyAndReturnArgs} args - Arguments to update many LeadActivities.
     * @example
     * // Update many LeadActivities
     * const leadActivity = await prisma.leadActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeadActivities and only return the `id`
     * const leadActivityWithIdOnly = await prisma.leadActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeadActivity.
     * @param {LeadActivityUpsertArgs} args - Arguments to update or create a LeadActivity.
     * @example
     * // Update or create a LeadActivity
     * const leadActivity = await prisma.leadActivity.upsert({
     *   create: {
     *     // ... data to create a LeadActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadActivity we want to update
     *   }
     * })
     */
    upsert<T extends LeadActivityUpsertArgs>(args: SelectSubset<T, LeadActivityUpsertArgs<ExtArgs>>): Prisma__LeadActivityClient<$Result.GetResult<Prisma.$LeadActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeadActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadActivityCountArgs} args - Arguments to filter LeadActivities to count.
     * @example
     * // Count the number of LeadActivities
     * const count = await prisma.leadActivity.count({
     *   where: {
     *     // ... the filter for the LeadActivities we want to count
     *   }
     * })
    **/
    count<T extends LeadActivityCountArgs>(
      args?: Subset<T, LeadActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadActivityAggregateArgs>(args: Subset<T, LeadActivityAggregateArgs>): Prisma.PrismaPromise<GetLeadActivityAggregateType<T>>

    /**
     * Group by LeadActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadActivityGroupByArgs['orderBy'] }
        : { orderBy?: LeadActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadActivity model
   */
  readonly fields: LeadActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeadActivity model
   */
  interface LeadActivityFieldRefs {
    readonly id: FieldRef<"LeadActivity", 'String'>
    readonly leadId: FieldRef<"LeadActivity", 'String'>
    readonly type: FieldRef<"LeadActivity", 'LeadActivityType'>
    readonly description: FieldRef<"LeadActivity", 'String'>
    readonly metadata: FieldRef<"LeadActivity", 'Json'>
    readonly createdAt: FieldRef<"LeadActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeadActivity findUnique
   */
  export type LeadActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadActivity
     */
    select?: LeadActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadActivity
     */
    omit?: LeadActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadActivityInclude<ExtArgs> | null
    /**
     * Filter, which LeadActivity to fetch.
     */
    where: LeadActivityWhereUniqueInput
  }

  /**
   * LeadActivity findUniqueOrThrow
   */
  export type LeadActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadActivity
     */
    select?: LeadActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadActivity
     */
    omit?: LeadActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadActivityInclude<ExtArgs> | null
    /**
     * Filter, which LeadActivity to fetch.
     */
    where: LeadActivityWhereUniqueInput
  }

  /**
   * LeadActivity findFirst
   */
  export type LeadActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadActivity
     */
    select?: LeadActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadActivity
     */
    omit?: LeadActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadActivityInclude<ExtArgs> | null
    /**
     * Filter, which LeadActivity to fetch.
     */
    where?: LeadActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadActivities to fetch.
     */
    orderBy?: LeadActivityOrderByWithRelationInput | LeadActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadActivities.
     */
    cursor?: LeadActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadActivities.
     */
    distinct?: LeadActivityScalarFieldEnum | LeadActivityScalarFieldEnum[]
  }

  /**
   * LeadActivity findFirstOrThrow
   */
  export type LeadActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadActivity
     */
    select?: LeadActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadActivity
     */
    omit?: LeadActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadActivityInclude<ExtArgs> | null
    /**
     * Filter, which LeadActivity to fetch.
     */
    where?: LeadActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadActivities to fetch.
     */
    orderBy?: LeadActivityOrderByWithRelationInput | LeadActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadActivities.
     */
    cursor?: LeadActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadActivities.
     */
    distinct?: LeadActivityScalarFieldEnum | LeadActivityScalarFieldEnum[]
  }

  /**
   * LeadActivity findMany
   */
  export type LeadActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadActivity
     */
    select?: LeadActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadActivity
     */
    omit?: LeadActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadActivityInclude<ExtArgs> | null
    /**
     * Filter, which LeadActivities to fetch.
     */
    where?: LeadActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadActivities to fetch.
     */
    orderBy?: LeadActivityOrderByWithRelationInput | LeadActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadActivities.
     */
    cursor?: LeadActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadActivities.
     */
    skip?: number
    distinct?: LeadActivityScalarFieldEnum | LeadActivityScalarFieldEnum[]
  }

  /**
   * LeadActivity create
   */
  export type LeadActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadActivity
     */
    select?: LeadActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadActivity
     */
    omit?: LeadActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a LeadActivity.
     */
    data: XOR<LeadActivityCreateInput, LeadActivityUncheckedCreateInput>
  }

  /**
   * LeadActivity createMany
   */
  export type LeadActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadActivities.
     */
    data: LeadActivityCreateManyInput | LeadActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeadActivity createManyAndReturn
   */
  export type LeadActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadActivity
     */
    select?: LeadActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadActivity
     */
    omit?: LeadActivityOmit<ExtArgs> | null
    /**
     * The data used to create many LeadActivities.
     */
    data: LeadActivityCreateManyInput | LeadActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadActivity update
   */
  export type LeadActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadActivity
     */
    select?: LeadActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadActivity
     */
    omit?: LeadActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a LeadActivity.
     */
    data: XOR<LeadActivityUpdateInput, LeadActivityUncheckedUpdateInput>
    /**
     * Choose, which LeadActivity to update.
     */
    where: LeadActivityWhereUniqueInput
  }

  /**
   * LeadActivity updateMany
   */
  export type LeadActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadActivities.
     */
    data: XOR<LeadActivityUpdateManyMutationInput, LeadActivityUncheckedUpdateManyInput>
    /**
     * Filter which LeadActivities to update
     */
    where?: LeadActivityWhereInput
    /**
     * Limit how many LeadActivities to update.
     */
    limit?: number
  }

  /**
   * LeadActivity updateManyAndReturn
   */
  export type LeadActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadActivity
     */
    select?: LeadActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadActivity
     */
    omit?: LeadActivityOmit<ExtArgs> | null
    /**
     * The data used to update LeadActivities.
     */
    data: XOR<LeadActivityUpdateManyMutationInput, LeadActivityUncheckedUpdateManyInput>
    /**
     * Filter which LeadActivities to update
     */
    where?: LeadActivityWhereInput
    /**
     * Limit how many LeadActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadActivity upsert
   */
  export type LeadActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadActivity
     */
    select?: LeadActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadActivity
     */
    omit?: LeadActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the LeadActivity to update in case it exists.
     */
    where: LeadActivityWhereUniqueInput
    /**
     * In case the LeadActivity found by the `where` argument doesn't exist, create a new LeadActivity with this data.
     */
    create: XOR<LeadActivityCreateInput, LeadActivityUncheckedCreateInput>
    /**
     * In case the LeadActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadActivityUpdateInput, LeadActivityUncheckedUpdateInput>
  }

  /**
   * LeadActivity delete
   */
  export type LeadActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadActivity
     */
    select?: LeadActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadActivity
     */
    omit?: LeadActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadActivityInclude<ExtArgs> | null
    /**
     * Filter which LeadActivity to delete.
     */
    where: LeadActivityWhereUniqueInput
  }

  /**
   * LeadActivity deleteMany
   */
  export type LeadActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadActivities to delete
     */
    where?: LeadActivityWhereInput
    /**
     * Limit how many LeadActivities to delete.
     */
    limit?: number
  }

  /**
   * LeadActivity without action
   */
  export type LeadActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadActivity
     */
    select?: LeadActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadActivity
     */
    omit?: LeadActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadActivityInclude<ExtArgs> | null
  }


  /**
   * Model LandingPage
   */

  export type AggregateLandingPage = {
    _count: LandingPageCountAggregateOutputType | null
    _avg: LandingPageAvgAggregateOutputType | null
    _sum: LandingPageSumAggregateOutputType | null
    _min: LandingPageMinAggregateOutputType | null
    _max: LandingPageMaxAggregateOutputType | null
  }

  export type LandingPageAvgAggregateOutputType = {
    views: number | null
    submissions: number | null
    conversionRate: number | null
  }

  export type LandingPageSumAggregateOutputType = {
    views: number | null
    submissions: number | null
    conversionRate: number | null
  }

  export type LandingPageMinAggregateOutputType = {
    id: string | null
    maklerId: string | null
    tenantId: string | null
    campaignId: string | null
    name: string | null
    slug: string | null
    template: $Enums.LandingPageTemplate | null
    status: $Enums.LandingPageStatus | null
    headline: string | null
    subheadline: string | null
    metaTitle: string | null
    metaDescription: string | null
    views: number | null
    submissions: number | null
    conversionRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
  }

  export type LandingPageMaxAggregateOutputType = {
    id: string | null
    maklerId: string | null
    tenantId: string | null
    campaignId: string | null
    name: string | null
    slug: string | null
    template: $Enums.LandingPageTemplate | null
    status: $Enums.LandingPageStatus | null
    headline: string | null
    subheadline: string | null
    metaTitle: string | null
    metaDescription: string | null
    views: number | null
    submissions: number | null
    conversionRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
  }

  export type LandingPageCountAggregateOutputType = {
    id: number
    maklerId: number
    tenantId: number
    campaignId: number
    name: number
    slug: number
    template: number
    status: number
    headline: number
    subheadline: number
    content: number
    formFields: number
    metaTitle: number
    metaDescription: number
    views: number
    submissions: number
    conversionRate: number
    createdAt: number
    updatedAt: number
    publishedAt: number
    _all: number
  }


  export type LandingPageAvgAggregateInputType = {
    views?: true
    submissions?: true
    conversionRate?: true
  }

  export type LandingPageSumAggregateInputType = {
    views?: true
    submissions?: true
    conversionRate?: true
  }

  export type LandingPageMinAggregateInputType = {
    id?: true
    maklerId?: true
    tenantId?: true
    campaignId?: true
    name?: true
    slug?: true
    template?: true
    status?: true
    headline?: true
    subheadline?: true
    metaTitle?: true
    metaDescription?: true
    views?: true
    submissions?: true
    conversionRate?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
  }

  export type LandingPageMaxAggregateInputType = {
    id?: true
    maklerId?: true
    tenantId?: true
    campaignId?: true
    name?: true
    slug?: true
    template?: true
    status?: true
    headline?: true
    subheadline?: true
    metaTitle?: true
    metaDescription?: true
    views?: true
    submissions?: true
    conversionRate?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
  }

  export type LandingPageCountAggregateInputType = {
    id?: true
    maklerId?: true
    tenantId?: true
    campaignId?: true
    name?: true
    slug?: true
    template?: true
    status?: true
    headline?: true
    subheadline?: true
    content?: true
    formFields?: true
    metaTitle?: true
    metaDescription?: true
    views?: true
    submissions?: true
    conversionRate?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
    _all?: true
  }

  export type LandingPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LandingPage to aggregate.
     */
    where?: LandingPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingPages to fetch.
     */
    orderBy?: LandingPageOrderByWithRelationInput | LandingPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandingPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LandingPages
    **/
    _count?: true | LandingPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LandingPageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LandingPageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandingPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandingPageMaxAggregateInputType
  }

  export type GetLandingPageAggregateType<T extends LandingPageAggregateArgs> = {
        [P in keyof T & keyof AggregateLandingPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLandingPage[P]>
      : GetScalarType<T[P], AggregateLandingPage[P]>
  }




  export type LandingPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandingPageWhereInput
    orderBy?: LandingPageOrderByWithAggregationInput | LandingPageOrderByWithAggregationInput[]
    by: LandingPageScalarFieldEnum[] | LandingPageScalarFieldEnum
    having?: LandingPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandingPageCountAggregateInputType | true
    _avg?: LandingPageAvgAggregateInputType
    _sum?: LandingPageSumAggregateInputType
    _min?: LandingPageMinAggregateInputType
    _max?: LandingPageMaxAggregateInputType
  }

  export type LandingPageGroupByOutputType = {
    id: string
    maklerId: string
    tenantId: string
    campaignId: string | null
    name: string
    slug: string
    template: $Enums.LandingPageTemplate
    status: $Enums.LandingPageStatus
    headline: string
    subheadline: string | null
    content: JsonValue
    formFields: JsonValue
    metaTitle: string | null
    metaDescription: string | null
    views: number
    submissions: number
    conversionRate: number
    createdAt: Date
    updatedAt: Date
    publishedAt: Date | null
    _count: LandingPageCountAggregateOutputType | null
    _avg: LandingPageAvgAggregateOutputType | null
    _sum: LandingPageSumAggregateOutputType | null
    _min: LandingPageMinAggregateOutputType | null
    _max: LandingPageMaxAggregateOutputType | null
  }

  type GetLandingPageGroupByPayload<T extends LandingPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandingPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandingPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandingPageGroupByOutputType[P]>
            : GetScalarType<T[P], LandingPageGroupByOutputType[P]>
        }
      >
    >


  export type LandingPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maklerId?: boolean
    tenantId?: boolean
    campaignId?: boolean
    name?: boolean
    slug?: boolean
    template?: boolean
    status?: boolean
    headline?: boolean
    subheadline?: boolean
    content?: boolean
    formFields?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    views?: boolean
    submissions?: boolean
    conversionRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | LandingPage$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["landingPage"]>

  export type LandingPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maklerId?: boolean
    tenantId?: boolean
    campaignId?: boolean
    name?: boolean
    slug?: boolean
    template?: boolean
    status?: boolean
    headline?: boolean
    subheadline?: boolean
    content?: boolean
    formFields?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    views?: boolean
    submissions?: boolean
    conversionRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | LandingPage$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["landingPage"]>

  export type LandingPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maklerId?: boolean
    tenantId?: boolean
    campaignId?: boolean
    name?: boolean
    slug?: boolean
    template?: boolean
    status?: boolean
    headline?: boolean
    subheadline?: boolean
    content?: boolean
    formFields?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    views?: boolean
    submissions?: boolean
    conversionRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | LandingPage$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["landingPage"]>

  export type LandingPageSelectScalar = {
    id?: boolean
    maklerId?: boolean
    tenantId?: boolean
    campaignId?: boolean
    name?: boolean
    slug?: boolean
    template?: boolean
    status?: boolean
    headline?: boolean
    subheadline?: boolean
    content?: boolean
    formFields?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    views?: boolean
    submissions?: boolean
    conversionRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
  }

  export type LandingPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "maklerId" | "tenantId" | "campaignId" | "name" | "slug" | "template" | "status" | "headline" | "subheadline" | "content" | "formFields" | "metaTitle" | "metaDescription" | "views" | "submissions" | "conversionRate" | "createdAt" | "updatedAt" | "publishedAt", ExtArgs["result"]["landingPage"]>
  export type LandingPageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | LandingPage$campaignArgs<ExtArgs>
  }
  export type LandingPageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | LandingPage$campaignArgs<ExtArgs>
  }
  export type LandingPageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makler?: boolean | MaklerDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | LandingPage$campaignArgs<ExtArgs>
  }

  export type $LandingPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LandingPage"
    objects: {
      makler: Prisma.$MaklerPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      maklerId: string
      tenantId: string
      campaignId: string | null
      name: string
      slug: string
      template: $Enums.LandingPageTemplate
      status: $Enums.LandingPageStatus
      headline: string
      subheadline: string | null
      content: Prisma.JsonValue
      formFields: Prisma.JsonValue
      metaTitle: string | null
      metaDescription: string | null
      views: number
      submissions: number
      conversionRate: number
      createdAt: Date
      updatedAt: Date
      publishedAt: Date | null
    }, ExtArgs["result"]["landingPage"]>
    composites: {}
  }

  type LandingPageGetPayload<S extends boolean | null | undefined | LandingPageDefaultArgs> = $Result.GetResult<Prisma.$LandingPagePayload, S>

  type LandingPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LandingPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LandingPageCountAggregateInputType | true
    }

  export interface LandingPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LandingPage'], meta: { name: 'LandingPage' } }
    /**
     * Find zero or one LandingPage that matches the filter.
     * @param {LandingPageFindUniqueArgs} args - Arguments to find a LandingPage
     * @example
     * // Get one LandingPage
     * const landingPage = await prisma.landingPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandingPageFindUniqueArgs>(args: SelectSubset<T, LandingPageFindUniqueArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LandingPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LandingPageFindUniqueOrThrowArgs} args - Arguments to find a LandingPage
     * @example
     * // Get one LandingPage
     * const landingPage = await prisma.landingPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandingPageFindUniqueOrThrowArgs>(args: SelectSubset<T, LandingPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LandingPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageFindFirstArgs} args - Arguments to find a LandingPage
     * @example
     * // Get one LandingPage
     * const landingPage = await prisma.landingPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandingPageFindFirstArgs>(args?: SelectSubset<T, LandingPageFindFirstArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LandingPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageFindFirstOrThrowArgs} args - Arguments to find a LandingPage
     * @example
     * // Get one LandingPage
     * const landingPage = await prisma.landingPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandingPageFindFirstOrThrowArgs>(args?: SelectSubset<T, LandingPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LandingPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LandingPages
     * const landingPages = await prisma.landingPage.findMany()
     * 
     * // Get first 10 LandingPages
     * const landingPages = await prisma.landingPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landingPageWithIdOnly = await prisma.landingPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LandingPageFindManyArgs>(args?: SelectSubset<T, LandingPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LandingPage.
     * @param {LandingPageCreateArgs} args - Arguments to create a LandingPage.
     * @example
     * // Create one LandingPage
     * const LandingPage = await prisma.landingPage.create({
     *   data: {
     *     // ... data to create a LandingPage
     *   }
     * })
     * 
     */
    create<T extends LandingPageCreateArgs>(args: SelectSubset<T, LandingPageCreateArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LandingPages.
     * @param {LandingPageCreateManyArgs} args - Arguments to create many LandingPages.
     * @example
     * // Create many LandingPages
     * const landingPage = await prisma.landingPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandingPageCreateManyArgs>(args?: SelectSubset<T, LandingPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LandingPages and returns the data saved in the database.
     * @param {LandingPageCreateManyAndReturnArgs} args - Arguments to create many LandingPages.
     * @example
     * // Create many LandingPages
     * const landingPage = await prisma.landingPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LandingPages and only return the `id`
     * const landingPageWithIdOnly = await prisma.landingPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LandingPageCreateManyAndReturnArgs>(args?: SelectSubset<T, LandingPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LandingPage.
     * @param {LandingPageDeleteArgs} args - Arguments to delete one LandingPage.
     * @example
     * // Delete one LandingPage
     * const LandingPage = await prisma.landingPage.delete({
     *   where: {
     *     // ... filter to delete one LandingPage
     *   }
     * })
     * 
     */
    delete<T extends LandingPageDeleteArgs>(args: SelectSubset<T, LandingPageDeleteArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LandingPage.
     * @param {LandingPageUpdateArgs} args - Arguments to update one LandingPage.
     * @example
     * // Update one LandingPage
     * const landingPage = await prisma.landingPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandingPageUpdateArgs>(args: SelectSubset<T, LandingPageUpdateArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LandingPages.
     * @param {LandingPageDeleteManyArgs} args - Arguments to filter LandingPages to delete.
     * @example
     * // Delete a few LandingPages
     * const { count } = await prisma.landingPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandingPageDeleteManyArgs>(args?: SelectSubset<T, LandingPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LandingPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LandingPages
     * const landingPage = await prisma.landingPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandingPageUpdateManyArgs>(args: SelectSubset<T, LandingPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LandingPages and returns the data updated in the database.
     * @param {LandingPageUpdateManyAndReturnArgs} args - Arguments to update many LandingPages.
     * @example
     * // Update many LandingPages
     * const landingPage = await prisma.landingPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LandingPages and only return the `id`
     * const landingPageWithIdOnly = await prisma.landingPage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LandingPageUpdateManyAndReturnArgs>(args: SelectSubset<T, LandingPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LandingPage.
     * @param {LandingPageUpsertArgs} args - Arguments to update or create a LandingPage.
     * @example
     * // Update or create a LandingPage
     * const landingPage = await prisma.landingPage.upsert({
     *   create: {
     *     // ... data to create a LandingPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LandingPage we want to update
     *   }
     * })
     */
    upsert<T extends LandingPageUpsertArgs>(args: SelectSubset<T, LandingPageUpsertArgs<ExtArgs>>): Prisma__LandingPageClient<$Result.GetResult<Prisma.$LandingPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LandingPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageCountArgs} args - Arguments to filter LandingPages to count.
     * @example
     * // Count the number of LandingPages
     * const count = await prisma.landingPage.count({
     *   where: {
     *     // ... the filter for the LandingPages we want to count
     *   }
     * })
    **/
    count<T extends LandingPageCountArgs>(
      args?: Subset<T, LandingPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandingPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LandingPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LandingPageAggregateArgs>(args: Subset<T, LandingPageAggregateArgs>): Prisma.PrismaPromise<GetLandingPageAggregateType<T>>

    /**
     * Group by LandingPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingPageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LandingPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandingPageGroupByArgs['orderBy'] }
        : { orderBy?: LandingPageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LandingPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandingPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LandingPage model
   */
  readonly fields: LandingPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LandingPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandingPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    makler<T extends MaklerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaklerDefaultArgs<ExtArgs>>): Prisma__MaklerClient<$Result.GetResult<Prisma.$MaklerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaign<T extends LandingPage$campaignArgs<ExtArgs> = {}>(args?: Subset<T, LandingPage$campaignArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LandingPage model
   */
  interface LandingPageFieldRefs {
    readonly id: FieldRef<"LandingPage", 'String'>
    readonly maklerId: FieldRef<"LandingPage", 'String'>
    readonly tenantId: FieldRef<"LandingPage", 'String'>
    readonly campaignId: FieldRef<"LandingPage", 'String'>
    readonly name: FieldRef<"LandingPage", 'String'>
    readonly slug: FieldRef<"LandingPage", 'String'>
    readonly template: FieldRef<"LandingPage", 'LandingPageTemplate'>
    readonly status: FieldRef<"LandingPage", 'LandingPageStatus'>
    readonly headline: FieldRef<"LandingPage", 'String'>
    readonly subheadline: FieldRef<"LandingPage", 'String'>
    readonly content: FieldRef<"LandingPage", 'Json'>
    readonly formFields: FieldRef<"LandingPage", 'Json'>
    readonly metaTitle: FieldRef<"LandingPage", 'String'>
    readonly metaDescription: FieldRef<"LandingPage", 'String'>
    readonly views: FieldRef<"LandingPage", 'Int'>
    readonly submissions: FieldRef<"LandingPage", 'Int'>
    readonly conversionRate: FieldRef<"LandingPage", 'Float'>
    readonly createdAt: FieldRef<"LandingPage", 'DateTime'>
    readonly updatedAt: FieldRef<"LandingPage", 'DateTime'>
    readonly publishedAt: FieldRef<"LandingPage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LandingPage findUnique
   */
  export type LandingPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * Filter, which LandingPage to fetch.
     */
    where: LandingPageWhereUniqueInput
  }

  /**
   * LandingPage findUniqueOrThrow
   */
  export type LandingPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * Filter, which LandingPage to fetch.
     */
    where: LandingPageWhereUniqueInput
  }

  /**
   * LandingPage findFirst
   */
  export type LandingPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * Filter, which LandingPage to fetch.
     */
    where?: LandingPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingPages to fetch.
     */
    orderBy?: LandingPageOrderByWithRelationInput | LandingPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LandingPages.
     */
    cursor?: LandingPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LandingPages.
     */
    distinct?: LandingPageScalarFieldEnum | LandingPageScalarFieldEnum[]
  }

  /**
   * LandingPage findFirstOrThrow
   */
  export type LandingPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * Filter, which LandingPage to fetch.
     */
    where?: LandingPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingPages to fetch.
     */
    orderBy?: LandingPageOrderByWithRelationInput | LandingPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LandingPages.
     */
    cursor?: LandingPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LandingPages.
     */
    distinct?: LandingPageScalarFieldEnum | LandingPageScalarFieldEnum[]
  }

  /**
   * LandingPage findMany
   */
  export type LandingPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * Filter, which LandingPages to fetch.
     */
    where?: LandingPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandingPages to fetch.
     */
    orderBy?: LandingPageOrderByWithRelationInput | LandingPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LandingPages.
     */
    cursor?: LandingPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandingPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandingPages.
     */
    skip?: number
    distinct?: LandingPageScalarFieldEnum | LandingPageScalarFieldEnum[]
  }

  /**
   * LandingPage create
   */
  export type LandingPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * The data needed to create a LandingPage.
     */
    data: XOR<LandingPageCreateInput, LandingPageUncheckedCreateInput>
  }

  /**
   * LandingPage createMany
   */
  export type LandingPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LandingPages.
     */
    data: LandingPageCreateManyInput | LandingPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LandingPage createManyAndReturn
   */
  export type LandingPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * The data used to create many LandingPages.
     */
    data: LandingPageCreateManyInput | LandingPageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LandingPage update
   */
  export type LandingPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * The data needed to update a LandingPage.
     */
    data: XOR<LandingPageUpdateInput, LandingPageUncheckedUpdateInput>
    /**
     * Choose, which LandingPage to update.
     */
    where: LandingPageWhereUniqueInput
  }

  /**
   * LandingPage updateMany
   */
  export type LandingPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LandingPages.
     */
    data: XOR<LandingPageUpdateManyMutationInput, LandingPageUncheckedUpdateManyInput>
    /**
     * Filter which LandingPages to update
     */
    where?: LandingPageWhereInput
    /**
     * Limit how many LandingPages to update.
     */
    limit?: number
  }

  /**
   * LandingPage updateManyAndReturn
   */
  export type LandingPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * The data used to update LandingPages.
     */
    data: XOR<LandingPageUpdateManyMutationInput, LandingPageUncheckedUpdateManyInput>
    /**
     * Filter which LandingPages to update
     */
    where?: LandingPageWhereInput
    /**
     * Limit how many LandingPages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LandingPage upsert
   */
  export type LandingPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * The filter to search for the LandingPage to update in case it exists.
     */
    where: LandingPageWhereUniqueInput
    /**
     * In case the LandingPage found by the `where` argument doesn't exist, create a new LandingPage with this data.
     */
    create: XOR<LandingPageCreateInput, LandingPageUncheckedCreateInput>
    /**
     * In case the LandingPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandingPageUpdateInput, LandingPageUncheckedUpdateInput>
  }

  /**
   * LandingPage delete
   */
  export type LandingPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
    /**
     * Filter which LandingPage to delete.
     */
    where: LandingPageWhereUniqueInput
  }

  /**
   * LandingPage deleteMany
   */
  export type LandingPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LandingPages to delete
     */
    where?: LandingPageWhereInput
    /**
     * Limit how many LandingPages to delete.
     */
    limit?: number
  }

  /**
   * LandingPage.campaign
   */
  export type LandingPage$campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
  }

  /**
   * LandingPage without action
   */
  export type LandingPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandingPage
     */
    select?: LandingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandingPage
     */
    omit?: LandingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandingPageInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    name: string | null
    key: string | null
    platform: $Enums.Platform | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    key: string | null
    platform: $Enums.Platform | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    name: number
    key: number
    platform: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    name?: true
    key?: true
    platform?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    name?: true
    key?: true
    platform?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    name?: true
    key?: true
    platform?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    name: string
    key: string
    platform: $Enums.Platform
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    key?: boolean
    platform?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    key?: boolean
    platform?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    key?: boolean
    platform?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    name?: boolean
    key?: boolean
    platform?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "key" | "platform" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["apiKey"]>

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      key: string
      platform: $Enums.Platform
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly key: FieldRef<"ApiKey", 'String'>
    readonly platform: FieldRef<"ApiKey", 'Platform'>
    readonly isActive: FieldRef<"ApiKey", 'Boolean'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly updatedAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
  }


  /**
   * Model SystemSettings
   */

  export type AggregateSystemSettings = {
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  export type SystemSettingsMinAggregateOutputType = {
    id: string | null
    key: string | null
    updatedAt: Date | null
  }

  export type SystemSettingsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    updatedAt: Date | null
  }

  export type SystemSettingsCountAggregateOutputType = {
    id: number
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type SystemSettingsMinAggregateInputType = {
    id?: true
    key?: true
    updatedAt?: true
  }

  export type SystemSettingsMaxAggregateInputType = {
    id?: true
    key?: true
    updatedAt?: true
  }

  export type SystemSettingsCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to aggregate.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type GetSystemSettingsAggregateType<T extends SystemSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSettings[P]>
      : GetScalarType<T[P], AggregateSystemSettings[P]>
  }




  export type SystemSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingsWhereInput
    orderBy?: SystemSettingsOrderByWithAggregationInput | SystemSettingsOrderByWithAggregationInput[]
    by: SystemSettingsScalarFieldEnum[] | SystemSettingsScalarFieldEnum
    having?: SystemSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingsCountAggregateInputType | true
    _min?: SystemSettingsMinAggregateInputType
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type SystemSettingsGroupByOutputType = {
    id: string
    key: string
    value: JsonValue
    updatedAt: Date
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  type GetSystemSettingsGroupByPayload<T extends SystemSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }

  export type SystemSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "updatedAt", ExtArgs["result"]["systemSettings"]>

  export type $SystemSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: Prisma.JsonValue
      updatedAt: Date
    }, ExtArgs["result"]["systemSettings"]>
    composites: {}
  }

  type SystemSettingsGetPayload<S extends boolean | null | undefined | SystemSettingsDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingsPayload, S>

  type SystemSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemSettingsCountAggregateInputType | true
    }

  export interface SystemSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSettings'], meta: { name: 'SystemSettings' } }
    /**
     * Find zero or one SystemSettings that matches the filter.
     * @param {SystemSettingsFindUniqueArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingsFindUniqueArgs>(args: SelectSubset<T, SystemSettingsFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemSettingsFindUniqueOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingsFindFirstArgs>(args?: SelectSubset<T, SystemSettingsFindFirstArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemSettingsFindManyArgs>(args?: SelectSubset<T, SystemSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemSettings.
     * @param {SystemSettingsCreateArgs} args - Arguments to create a SystemSettings.
     * @example
     * // Create one SystemSettings
     * const SystemSettings = await prisma.systemSettings.create({
     *   data: {
     *     // ... data to create a SystemSettings
     *   }
     * })
     * 
     */
    create<T extends SystemSettingsCreateArgs>(args: SelectSubset<T, SystemSettingsCreateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingsCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingsCreateManyArgs>(args?: SelectSubset<T, SystemSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingsCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemSettings.
     * @param {SystemSettingsDeleteArgs} args - Arguments to delete one SystemSettings.
     * @example
     * // Delete one SystemSettings
     * const SystemSettings = await prisma.systemSettings.delete({
     *   where: {
     *     // ... filter to delete one SystemSettings
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingsDeleteArgs>(args: SelectSubset<T, SystemSettingsDeleteArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemSettings.
     * @param {SystemSettingsUpdateArgs} args - Arguments to update one SystemSettings.
     * @example
     * // Update one SystemSettings
     * const systemSettings = await prisma.systemSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingsUpdateArgs>(args: SelectSubset<T, SystemSettingsUpdateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingsDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingsDeleteManyArgs>(args?: SelectSubset<T, SystemSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingsUpdateManyArgs>(args: SelectSubset<T, SystemSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings and returns the data updated in the database.
     * @param {SystemSettingsUpdateManyAndReturnArgs} args - Arguments to update many SystemSettings.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemSettings.
     * @param {SystemSettingsUpsertArgs} args - Arguments to update or create a SystemSettings.
     * @example
     * // Update or create a SystemSettings
     * const systemSettings = await prisma.systemSettings.upsert({
     *   create: {
     *     // ... data to create a SystemSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSettings we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingsUpsertArgs>(args: SelectSubset<T, SystemSettingsUpsertArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSettings.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingsCountArgs>(
      args?: Subset<T, SystemSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemSettingsAggregateArgs>(args: Subset<T, SystemSettingsAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingsAggregateType<T>>

    /**
     * Group by SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSettings model
   */
  readonly fields: SystemSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemSettings model
   */
  interface SystemSettingsFieldRefs {
    readonly id: FieldRef<"SystemSettings", 'String'>
    readonly key: FieldRef<"SystemSettings", 'String'>
    readonly value: FieldRef<"SystemSettings", 'Json'>
    readonly updatedAt: FieldRef<"SystemSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemSettings findUnique
   */
  export type SystemSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findUniqueOrThrow
   */
  export type SystemSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findFirst
   */
  export type SystemSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findFirstOrThrow
   */
  export type SystemSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findMany
   */
  export type SystemSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings create
   */
  export type SystemSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemSettings.
     */
    data: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
  }

  /**
   * SystemSettings createMany
   */
  export type SystemSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings createManyAndReturn
   */
  export type SystemSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings update
   */
  export type SystemSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemSettings.
     */
    data: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
    /**
     * Choose, which SystemSettings to update.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings updateMany
   */
  export type SystemSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings updateManyAndReturn
   */
  export type SystemSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings upsert
   */
  export type SystemSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemSettings to update in case it exists.
     */
    where: SystemSettingsWhereUniqueInput
    /**
     * In case the SystemSettings found by the `where` argument doesn't exist, create a new SystemSettings with this data.
     */
    create: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
    /**
     * In case the SystemSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
  }

  /**
   * SystemSettings delete
   */
  export type SystemSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter which SystemSettings to delete.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings deleteMany
   */
  export type SystemSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to delete.
     */
    limit?: number
  }

  /**
   * SystemSettings without action
   */
  export type SystemSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subdomain: 'subdomain',
    domain: 'domain',
    isActive: 'isActive',
    plan: 'plan',
    maxMaklers: 'maxMaklers',
    maxLeads: 'maxLeads',
    dataRegion: 'dataRegion',
    gdprContact: 'gdprContact',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const MaklerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tenantId: 'tenantId',
    firstName: 'firstName',
    lastName: 'lastName',
    company: 'company',
    phone: 'phone',
    website: 'website',
    address: 'address',
    city: 'city',
    postalCode: 'postalCode',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    logo: 'logo',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor'
  };

  export type MaklerScalarFieldEnum = (typeof MaklerScalarFieldEnum)[keyof typeof MaklerScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    maklerId: 'maklerId',
    tenantId: 'tenantId',
    name: 'name',
    description: 'description',
    status: 'status',
    budget: 'budget',
    spent: 'spent',
    platform: 'platform',
    targeting: 'targeting',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    impressions: 'impressions',
    clicks: 'clicks',
    leads: 'leads',
    conversions: 'conversions',
    ctr: 'ctr',
    cpl: 'cpl',
    conversionRate: 'conversionRate'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    maklerId: 'maklerId',
    tenantId: 'tenantId',
    campaignId: 'campaignId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    dateOfBirth: 'dateOfBirth',
    address: 'address',
    city: 'city',
    postalCode: 'postalCode',
    status: 'status',
    score: 'score',
    source: 'source',
    interest: 'interest',
    budget: 'budget',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastContact: 'lastContact',
    nextFollowUp: 'nextFollowUp',
    consentGiven: 'consentGiven',
    consentDate: 'consentDate',
    marketingConsent: 'marketingConsent'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const CommunicationScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    type: 'type',
    direction: 'direction',
    subject: 'subject',
    content: 'content',
    status: 'status',
    sentAt: 'sentAt',
    readAt: 'readAt'
  };

  export type CommunicationScalarFieldEnum = (typeof CommunicationScalarFieldEnum)[keyof typeof CommunicationScalarFieldEnum]


  export const LeadActivityScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    type: 'type',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type LeadActivityScalarFieldEnum = (typeof LeadActivityScalarFieldEnum)[keyof typeof LeadActivityScalarFieldEnum]


  export const LandingPageScalarFieldEnum: {
    id: 'id',
    maklerId: 'maklerId',
    tenantId: 'tenantId',
    campaignId: 'campaignId',
    name: 'name',
    slug: 'slug',
    template: 'template',
    status: 'status',
    headline: 'headline',
    subheadline: 'subheadline',
    content: 'content',
    formFields: 'formFields',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    views: 'views',
    submissions: 'submissions',
    conversionRate: 'conversionRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    publishedAt: 'publishedAt'
  };

  export type LandingPageScalarFieldEnum = (typeof LandingPageScalarFieldEnum)[keyof typeof LandingPageScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    key: 'key',
    platform: 'platform',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const SystemSettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type SystemSettingsScalarFieldEnum = (typeof SystemSettingsScalarFieldEnum)[keyof typeof SystemSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TenantPlan'
   */
  export type EnumTenantPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TenantPlan'>
    


  /**
   * Reference to a field of type 'TenantPlan[]'
   */
  export type ListEnumTenantPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TenantPlan[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'LeadStatus[]'
   */
  export type ListEnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus[]'>
    


  /**
   * Reference to a field of type 'CommunicationType'
   */
  export type EnumCommunicationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunicationType'>
    


  /**
   * Reference to a field of type 'CommunicationType[]'
   */
  export type ListEnumCommunicationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunicationType[]'>
    


  /**
   * Reference to a field of type 'CommunicationDirection'
   */
  export type EnumCommunicationDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunicationDirection'>
    


  /**
   * Reference to a field of type 'CommunicationDirection[]'
   */
  export type ListEnumCommunicationDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunicationDirection[]'>
    


  /**
   * Reference to a field of type 'CommunicationStatus'
   */
  export type EnumCommunicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunicationStatus'>
    


  /**
   * Reference to a field of type 'CommunicationStatus[]'
   */
  export type ListEnumCommunicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunicationStatus[]'>
    


  /**
   * Reference to a field of type 'LeadActivityType'
   */
  export type EnumLeadActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadActivityType'>
    


  /**
   * Reference to a field of type 'LeadActivityType[]'
   */
  export type ListEnumLeadActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadActivityType[]'>
    


  /**
   * Reference to a field of type 'LandingPageTemplate'
   */
  export type EnumLandingPageTemplateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LandingPageTemplate'>
    


  /**
   * Reference to a field of type 'LandingPageTemplate[]'
   */
  export type ListEnumLandingPageTemplateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LandingPageTemplate[]'>
    


  /**
   * Reference to a field of type 'LandingPageStatus'
   */
  export type EnumLandingPageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LandingPageStatus'>
    


  /**
   * Reference to a field of type 'LandingPageStatus[]'
   */
  export type ListEnumLandingPageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LandingPageStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    tenantId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    makler?: XOR<MaklerNullableScalarRelationFilter, MaklerWhereInput> | null
    sessions?: SessionListRelationFilter
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    makler?: MaklerOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    tenantId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    makler?: XOR<MaklerNullableScalarRelationFilter, MaklerWhereInput> | null
    sessions?: SessionListRelationFilter
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    tenantId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    subdomain?: StringFilter<"Tenant"> | string
    domain?: StringNullableFilter<"Tenant"> | string | null
    isActive?: BoolFilter<"Tenant"> | boolean
    plan?: EnumTenantPlanFilter<"Tenant"> | $Enums.TenantPlan
    maxMaklers?: IntFilter<"Tenant"> | number
    maxLeads?: IntFilter<"Tenant"> | number
    dataRegion?: StringFilter<"Tenant"> | string
    gdprContact?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    maklers?: MaklerListRelationFilter
    campaigns?: CampaignListRelationFilter
    leads?: LeadListRelationFilter
    landingPages?: LandingPageListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    domain?: SortOrderInput | SortOrder
    isActive?: SortOrder
    plan?: SortOrder
    maxMaklers?: SortOrder
    maxLeads?: SortOrder
    dataRegion?: SortOrder
    gdprContact?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    maklers?: MaklerOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
    landingPages?: LandingPageOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subdomain?: string
    domain?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    isActive?: BoolFilter<"Tenant"> | boolean
    plan?: EnumTenantPlanFilter<"Tenant"> | $Enums.TenantPlan
    maxMaklers?: IntFilter<"Tenant"> | number
    maxLeads?: IntFilter<"Tenant"> | number
    dataRegion?: StringFilter<"Tenant"> | string
    gdprContact?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    maklers?: MaklerListRelationFilter
    campaigns?: CampaignListRelationFilter
    leads?: LeadListRelationFilter
    landingPages?: LandingPageListRelationFilter
  }, "id" | "subdomain" | "domain">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    domain?: SortOrderInput | SortOrder
    isActive?: SortOrder
    plan?: SortOrder
    maxMaklers?: SortOrder
    maxLeads?: SortOrder
    dataRegion?: SortOrder
    gdprContact?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _avg?: TenantAvgOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
    _sum?: TenantSumOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    subdomain?: StringWithAggregatesFilter<"Tenant"> | string
    domain?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    isActive?: BoolWithAggregatesFilter<"Tenant"> | boolean
    plan?: EnumTenantPlanWithAggregatesFilter<"Tenant"> | $Enums.TenantPlan
    maxMaklers?: IntWithAggregatesFilter<"Tenant"> | number
    maxLeads?: IntWithAggregatesFilter<"Tenant"> | number
    dataRegion?: StringWithAggregatesFilter<"Tenant"> | string
    gdprContact?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type MaklerWhereInput = {
    AND?: MaklerWhereInput | MaklerWhereInput[]
    OR?: MaklerWhereInput[]
    NOT?: MaklerWhereInput | MaklerWhereInput[]
    id?: StringFilter<"Makler"> | string
    userId?: StringFilter<"Makler"> | string
    tenantId?: StringFilter<"Makler"> | string
    firstName?: StringFilter<"Makler"> | string
    lastName?: StringFilter<"Makler"> | string
    company?: StringFilter<"Makler"> | string
    phone?: StringNullableFilter<"Makler"> | string | null
    website?: StringNullableFilter<"Makler"> | string | null
    address?: StringNullableFilter<"Makler"> | string | null
    city?: StringNullableFilter<"Makler"> | string | null
    postalCode?: StringNullableFilter<"Makler"> | string | null
    isActive?: BoolFilter<"Makler"> | boolean
    createdAt?: DateTimeFilter<"Makler"> | Date | string
    updatedAt?: DateTimeFilter<"Makler"> | Date | string
    logo?: StringNullableFilter<"Makler"> | string | null
    primaryColor?: StringFilter<"Makler"> | string
    secondaryColor?: StringFilter<"Makler"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaigns?: CampaignListRelationFilter
    leads?: LeadListRelationFilter
    landingPages?: LandingPageListRelationFilter
  }

  export type MaklerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    logo?: SortOrderInput | SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    user?: UserOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    campaigns?: CampaignOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
    landingPages?: LandingPageOrderByRelationAggregateInput
  }

  export type MaklerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: MaklerWhereInput | MaklerWhereInput[]
    OR?: MaklerWhereInput[]
    NOT?: MaklerWhereInput | MaklerWhereInput[]
    tenantId?: StringFilter<"Makler"> | string
    firstName?: StringFilter<"Makler"> | string
    lastName?: StringFilter<"Makler"> | string
    company?: StringFilter<"Makler"> | string
    phone?: StringNullableFilter<"Makler"> | string | null
    website?: StringNullableFilter<"Makler"> | string | null
    address?: StringNullableFilter<"Makler"> | string | null
    city?: StringNullableFilter<"Makler"> | string | null
    postalCode?: StringNullableFilter<"Makler"> | string | null
    isActive?: BoolFilter<"Makler"> | boolean
    createdAt?: DateTimeFilter<"Makler"> | Date | string
    updatedAt?: DateTimeFilter<"Makler"> | Date | string
    logo?: StringNullableFilter<"Makler"> | string | null
    primaryColor?: StringFilter<"Makler"> | string
    secondaryColor?: StringFilter<"Makler"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaigns?: CampaignListRelationFilter
    leads?: LeadListRelationFilter
    landingPages?: LandingPageListRelationFilter
  }, "id" | "userId">

  export type MaklerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    logo?: SortOrderInput | SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    _count?: MaklerCountOrderByAggregateInput
    _max?: MaklerMaxOrderByAggregateInput
    _min?: MaklerMinOrderByAggregateInput
  }

  export type MaklerScalarWhereWithAggregatesInput = {
    AND?: MaklerScalarWhereWithAggregatesInput | MaklerScalarWhereWithAggregatesInput[]
    OR?: MaklerScalarWhereWithAggregatesInput[]
    NOT?: MaklerScalarWhereWithAggregatesInput | MaklerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Makler"> | string
    userId?: StringWithAggregatesFilter<"Makler"> | string
    tenantId?: StringWithAggregatesFilter<"Makler"> | string
    firstName?: StringWithAggregatesFilter<"Makler"> | string
    lastName?: StringWithAggregatesFilter<"Makler"> | string
    company?: StringWithAggregatesFilter<"Makler"> | string
    phone?: StringNullableWithAggregatesFilter<"Makler"> | string | null
    website?: StringNullableWithAggregatesFilter<"Makler"> | string | null
    address?: StringNullableWithAggregatesFilter<"Makler"> | string | null
    city?: StringNullableWithAggregatesFilter<"Makler"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Makler"> | string | null
    isActive?: BoolWithAggregatesFilter<"Makler"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Makler"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Makler"> | Date | string
    logo?: StringNullableWithAggregatesFilter<"Makler"> | string | null
    primaryColor?: StringWithAggregatesFilter<"Makler"> | string
    secondaryColor?: StringWithAggregatesFilter<"Makler"> | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    maklerId?: StringFilter<"Campaign"> | string
    tenantId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    budget?: FloatFilter<"Campaign"> | number
    spent?: FloatFilter<"Campaign"> | number
    platform?: EnumPlatformFilter<"Campaign"> | $Enums.Platform
    targeting?: JsonFilter<"Campaign">
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    impressions?: IntFilter<"Campaign"> | number
    clicks?: IntFilter<"Campaign"> | number
    leads?: IntFilter<"Campaign"> | number
    conversions?: IntFilter<"Campaign"> | number
    ctr?: FloatFilter<"Campaign"> | number
    cpl?: FloatFilter<"Campaign"> | number
    conversionRate?: FloatFilter<"Campaign"> | number
    makler?: XOR<MaklerScalarRelationFilter, MaklerWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    leadSources?: LeadListRelationFilter
    landingPages?: LandingPageListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    budget?: SortOrder
    spent?: SortOrder
    platform?: SortOrder
    targeting?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    leads?: SortOrder
    conversions?: SortOrder
    ctr?: SortOrder
    cpl?: SortOrder
    conversionRate?: SortOrder
    makler?: MaklerOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    leadSources?: LeadOrderByRelationAggregateInput
    landingPages?: LandingPageOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    maklerId?: StringFilter<"Campaign"> | string
    tenantId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    budget?: FloatFilter<"Campaign"> | number
    spent?: FloatFilter<"Campaign"> | number
    platform?: EnumPlatformFilter<"Campaign"> | $Enums.Platform
    targeting?: JsonFilter<"Campaign">
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    impressions?: IntFilter<"Campaign"> | number
    clicks?: IntFilter<"Campaign"> | number
    leads?: IntFilter<"Campaign"> | number
    conversions?: IntFilter<"Campaign"> | number
    ctr?: FloatFilter<"Campaign"> | number
    cpl?: FloatFilter<"Campaign"> | number
    conversionRate?: FloatFilter<"Campaign"> | number
    makler?: XOR<MaklerScalarRelationFilter, MaklerWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    leadSources?: LeadListRelationFilter
    landingPages?: LandingPageListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    budget?: SortOrder
    spent?: SortOrder
    platform?: SortOrder
    targeting?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    leads?: SortOrder
    conversions?: SortOrder
    ctr?: SortOrder
    cpl?: SortOrder
    conversionRate?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    maklerId?: StringWithAggregatesFilter<"Campaign"> | string
    tenantId?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    budget?: FloatWithAggregatesFilter<"Campaign"> | number
    spent?: FloatWithAggregatesFilter<"Campaign"> | number
    platform?: EnumPlatformWithAggregatesFilter<"Campaign"> | $Enums.Platform
    targeting?: JsonWithAggregatesFilter<"Campaign">
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    impressions?: IntWithAggregatesFilter<"Campaign"> | number
    clicks?: IntWithAggregatesFilter<"Campaign"> | number
    leads?: IntWithAggregatesFilter<"Campaign"> | number
    conversions?: IntWithAggregatesFilter<"Campaign"> | number
    ctr?: FloatWithAggregatesFilter<"Campaign"> | number
    cpl?: FloatWithAggregatesFilter<"Campaign"> | number
    conversionRate?: FloatWithAggregatesFilter<"Campaign"> | number
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    maklerId?: StringFilter<"Lead"> | string
    tenantId?: StringFilter<"Lead"> | string
    campaignId?: StringNullableFilter<"Lead"> | string | null
    firstName?: StringFilter<"Lead"> | string
    lastName?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    phone?: StringNullableFilter<"Lead"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Lead"> | Date | string | null
    address?: StringNullableFilter<"Lead"> | string | null
    city?: StringNullableFilter<"Lead"> | string | null
    postalCode?: StringNullableFilter<"Lead"> | string | null
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    score?: IntFilter<"Lead"> | number
    source?: StringNullableFilter<"Lead"> | string | null
    interest?: StringNullableFilter<"Lead"> | string | null
    budget?: FloatNullableFilter<"Lead"> | number | null
    notes?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    lastContact?: DateTimeNullableFilter<"Lead"> | Date | string | null
    nextFollowUp?: DateTimeNullableFilter<"Lead"> | Date | string | null
    consentGiven?: BoolFilter<"Lead"> | boolean
    consentDate?: DateTimeNullableFilter<"Lead"> | Date | string | null
    marketingConsent?: BoolFilter<"Lead"> | boolean
    makler?: XOR<MaklerScalarRelationFilter, MaklerWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
    communications?: CommunicationListRelationFilter
    activities?: LeadActivityListRelationFilter
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    status?: SortOrder
    score?: SortOrder
    source?: SortOrderInput | SortOrder
    interest?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastContact?: SortOrderInput | SortOrder
    nextFollowUp?: SortOrderInput | SortOrder
    consentGiven?: SortOrder
    consentDate?: SortOrderInput | SortOrder
    marketingConsent?: SortOrder
    makler?: MaklerOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
    communications?: CommunicationOrderByRelationAggregateInput
    activities?: LeadActivityOrderByRelationAggregateInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    maklerId?: StringFilter<"Lead"> | string
    tenantId?: StringFilter<"Lead"> | string
    campaignId?: StringNullableFilter<"Lead"> | string | null
    firstName?: StringFilter<"Lead"> | string
    lastName?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    phone?: StringNullableFilter<"Lead"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Lead"> | Date | string | null
    address?: StringNullableFilter<"Lead"> | string | null
    city?: StringNullableFilter<"Lead"> | string | null
    postalCode?: StringNullableFilter<"Lead"> | string | null
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    score?: IntFilter<"Lead"> | number
    source?: StringNullableFilter<"Lead"> | string | null
    interest?: StringNullableFilter<"Lead"> | string | null
    budget?: FloatNullableFilter<"Lead"> | number | null
    notes?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    lastContact?: DateTimeNullableFilter<"Lead"> | Date | string | null
    nextFollowUp?: DateTimeNullableFilter<"Lead"> | Date | string | null
    consentGiven?: BoolFilter<"Lead"> | boolean
    consentDate?: DateTimeNullableFilter<"Lead"> | Date | string | null
    marketingConsent?: BoolFilter<"Lead"> | boolean
    makler?: XOR<MaklerScalarRelationFilter, MaklerWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
    communications?: CommunicationListRelationFilter
    activities?: LeadActivityListRelationFilter
  }, "id">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    status?: SortOrder
    score?: SortOrder
    source?: SortOrderInput | SortOrder
    interest?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastContact?: SortOrderInput | SortOrder
    nextFollowUp?: SortOrderInput | SortOrder
    consentGiven?: SortOrder
    consentDate?: SortOrderInput | SortOrder
    marketingConsent?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _avg?: LeadAvgOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
    _sum?: LeadSumOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    maklerId?: StringWithAggregatesFilter<"Lead"> | string
    tenantId?: StringWithAggregatesFilter<"Lead"> | string
    campaignId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    firstName?: StringWithAggregatesFilter<"Lead"> | string
    lastName?: StringWithAggregatesFilter<"Lead"> | string
    email?: StringWithAggregatesFilter<"Lead"> | string
    phone?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Lead"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    city?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    status?: EnumLeadStatusWithAggregatesFilter<"Lead"> | $Enums.LeadStatus
    score?: IntWithAggregatesFilter<"Lead"> | number
    source?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    interest?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    budget?: FloatNullableWithAggregatesFilter<"Lead"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    lastContact?: DateTimeNullableWithAggregatesFilter<"Lead"> | Date | string | null
    nextFollowUp?: DateTimeNullableWithAggregatesFilter<"Lead"> | Date | string | null
    consentGiven?: BoolWithAggregatesFilter<"Lead"> | boolean
    consentDate?: DateTimeNullableWithAggregatesFilter<"Lead"> | Date | string | null
    marketingConsent?: BoolWithAggregatesFilter<"Lead"> | boolean
  }

  export type CommunicationWhereInput = {
    AND?: CommunicationWhereInput | CommunicationWhereInput[]
    OR?: CommunicationWhereInput[]
    NOT?: CommunicationWhereInput | CommunicationWhereInput[]
    id?: StringFilter<"Communication"> | string
    leadId?: StringFilter<"Communication"> | string
    type?: EnumCommunicationTypeFilter<"Communication"> | $Enums.CommunicationType
    direction?: EnumCommunicationDirectionFilter<"Communication"> | $Enums.CommunicationDirection
    subject?: StringNullableFilter<"Communication"> | string | null
    content?: StringFilter<"Communication"> | string
    status?: EnumCommunicationStatusFilter<"Communication"> | $Enums.CommunicationStatus
    sentAt?: DateTimeFilter<"Communication"> | Date | string
    readAt?: DateTimeNullableFilter<"Communication"> | Date | string | null
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type CommunicationOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    type?: SortOrder
    direction?: SortOrder
    subject?: SortOrderInput | SortOrder
    content?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type CommunicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunicationWhereInput | CommunicationWhereInput[]
    OR?: CommunicationWhereInput[]
    NOT?: CommunicationWhereInput | CommunicationWhereInput[]
    leadId?: StringFilter<"Communication"> | string
    type?: EnumCommunicationTypeFilter<"Communication"> | $Enums.CommunicationType
    direction?: EnumCommunicationDirectionFilter<"Communication"> | $Enums.CommunicationDirection
    subject?: StringNullableFilter<"Communication"> | string | null
    content?: StringFilter<"Communication"> | string
    status?: EnumCommunicationStatusFilter<"Communication"> | $Enums.CommunicationStatus
    sentAt?: DateTimeFilter<"Communication"> | Date | string
    readAt?: DateTimeNullableFilter<"Communication"> | Date | string | null
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id">

  export type CommunicationOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    type?: SortOrder
    direction?: SortOrder
    subject?: SortOrderInput | SortOrder
    content?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    _count?: CommunicationCountOrderByAggregateInput
    _max?: CommunicationMaxOrderByAggregateInput
    _min?: CommunicationMinOrderByAggregateInput
  }

  export type CommunicationScalarWhereWithAggregatesInput = {
    AND?: CommunicationScalarWhereWithAggregatesInput | CommunicationScalarWhereWithAggregatesInput[]
    OR?: CommunicationScalarWhereWithAggregatesInput[]
    NOT?: CommunicationScalarWhereWithAggregatesInput | CommunicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Communication"> | string
    leadId?: StringWithAggregatesFilter<"Communication"> | string
    type?: EnumCommunicationTypeWithAggregatesFilter<"Communication"> | $Enums.CommunicationType
    direction?: EnumCommunicationDirectionWithAggregatesFilter<"Communication"> | $Enums.CommunicationDirection
    subject?: StringNullableWithAggregatesFilter<"Communication"> | string | null
    content?: StringWithAggregatesFilter<"Communication"> | string
    status?: EnumCommunicationStatusWithAggregatesFilter<"Communication"> | $Enums.CommunicationStatus
    sentAt?: DateTimeWithAggregatesFilter<"Communication"> | Date | string
    readAt?: DateTimeNullableWithAggregatesFilter<"Communication"> | Date | string | null
  }

  export type LeadActivityWhereInput = {
    AND?: LeadActivityWhereInput | LeadActivityWhereInput[]
    OR?: LeadActivityWhereInput[]
    NOT?: LeadActivityWhereInput | LeadActivityWhereInput[]
    id?: StringFilter<"LeadActivity"> | string
    leadId?: StringFilter<"LeadActivity"> | string
    type?: EnumLeadActivityTypeFilter<"LeadActivity"> | $Enums.LeadActivityType
    description?: StringFilter<"LeadActivity"> | string
    metadata?: JsonNullableFilter<"LeadActivity">
    createdAt?: DateTimeFilter<"LeadActivity"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type LeadActivityOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type LeadActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadActivityWhereInput | LeadActivityWhereInput[]
    OR?: LeadActivityWhereInput[]
    NOT?: LeadActivityWhereInput | LeadActivityWhereInput[]
    leadId?: StringFilter<"LeadActivity"> | string
    type?: EnumLeadActivityTypeFilter<"LeadActivity"> | $Enums.LeadActivityType
    description?: StringFilter<"LeadActivity"> | string
    metadata?: JsonNullableFilter<"LeadActivity">
    createdAt?: DateTimeFilter<"LeadActivity"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id">

  export type LeadActivityOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LeadActivityCountOrderByAggregateInput
    _max?: LeadActivityMaxOrderByAggregateInput
    _min?: LeadActivityMinOrderByAggregateInput
  }

  export type LeadActivityScalarWhereWithAggregatesInput = {
    AND?: LeadActivityScalarWhereWithAggregatesInput | LeadActivityScalarWhereWithAggregatesInput[]
    OR?: LeadActivityScalarWhereWithAggregatesInput[]
    NOT?: LeadActivityScalarWhereWithAggregatesInput | LeadActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeadActivity"> | string
    leadId?: StringWithAggregatesFilter<"LeadActivity"> | string
    type?: EnumLeadActivityTypeWithAggregatesFilter<"LeadActivity"> | $Enums.LeadActivityType
    description?: StringWithAggregatesFilter<"LeadActivity"> | string
    metadata?: JsonNullableWithAggregatesFilter<"LeadActivity">
    createdAt?: DateTimeWithAggregatesFilter<"LeadActivity"> | Date | string
  }

  export type LandingPageWhereInput = {
    AND?: LandingPageWhereInput | LandingPageWhereInput[]
    OR?: LandingPageWhereInput[]
    NOT?: LandingPageWhereInput | LandingPageWhereInput[]
    id?: StringFilter<"LandingPage"> | string
    maklerId?: StringFilter<"LandingPage"> | string
    tenantId?: StringFilter<"LandingPage"> | string
    campaignId?: StringNullableFilter<"LandingPage"> | string | null
    name?: StringFilter<"LandingPage"> | string
    slug?: StringFilter<"LandingPage"> | string
    template?: EnumLandingPageTemplateFilter<"LandingPage"> | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFilter<"LandingPage"> | $Enums.LandingPageStatus
    headline?: StringFilter<"LandingPage"> | string
    subheadline?: StringNullableFilter<"LandingPage"> | string | null
    content?: JsonFilter<"LandingPage">
    formFields?: JsonFilter<"LandingPage">
    metaTitle?: StringNullableFilter<"LandingPage"> | string | null
    metaDescription?: StringNullableFilter<"LandingPage"> | string | null
    views?: IntFilter<"LandingPage"> | number
    submissions?: IntFilter<"LandingPage"> | number
    conversionRate?: FloatFilter<"LandingPage"> | number
    createdAt?: DateTimeFilter<"LandingPage"> | Date | string
    updatedAt?: DateTimeFilter<"LandingPage"> | Date | string
    publishedAt?: DateTimeNullableFilter<"LandingPage"> | Date | string | null
    makler?: XOR<MaklerScalarRelationFilter, MaklerWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
  }

  export type LandingPageOrderByWithRelationInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    name?: SortOrder
    slug?: SortOrder
    template?: SortOrder
    status?: SortOrder
    headline?: SortOrder
    subheadline?: SortOrderInput | SortOrder
    content?: SortOrder
    formFields?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    views?: SortOrder
    submissions?: SortOrder
    conversionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    makler?: MaklerOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
  }

  export type LandingPageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: LandingPageWhereInput | LandingPageWhereInput[]
    OR?: LandingPageWhereInput[]
    NOT?: LandingPageWhereInput | LandingPageWhereInput[]
    maklerId?: StringFilter<"LandingPage"> | string
    tenantId?: StringFilter<"LandingPage"> | string
    campaignId?: StringNullableFilter<"LandingPage"> | string | null
    name?: StringFilter<"LandingPage"> | string
    template?: EnumLandingPageTemplateFilter<"LandingPage"> | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFilter<"LandingPage"> | $Enums.LandingPageStatus
    headline?: StringFilter<"LandingPage"> | string
    subheadline?: StringNullableFilter<"LandingPage"> | string | null
    content?: JsonFilter<"LandingPage">
    formFields?: JsonFilter<"LandingPage">
    metaTitle?: StringNullableFilter<"LandingPage"> | string | null
    metaDescription?: StringNullableFilter<"LandingPage"> | string | null
    views?: IntFilter<"LandingPage"> | number
    submissions?: IntFilter<"LandingPage"> | number
    conversionRate?: FloatFilter<"LandingPage"> | number
    createdAt?: DateTimeFilter<"LandingPage"> | Date | string
    updatedAt?: DateTimeFilter<"LandingPage"> | Date | string
    publishedAt?: DateTimeNullableFilter<"LandingPage"> | Date | string | null
    makler?: XOR<MaklerScalarRelationFilter, MaklerWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
  }, "id" | "slug">

  export type LandingPageOrderByWithAggregationInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    name?: SortOrder
    slug?: SortOrder
    template?: SortOrder
    status?: SortOrder
    headline?: SortOrder
    subheadline?: SortOrderInput | SortOrder
    content?: SortOrder
    formFields?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    views?: SortOrder
    submissions?: SortOrder
    conversionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    _count?: LandingPageCountOrderByAggregateInput
    _avg?: LandingPageAvgOrderByAggregateInput
    _max?: LandingPageMaxOrderByAggregateInput
    _min?: LandingPageMinOrderByAggregateInput
    _sum?: LandingPageSumOrderByAggregateInput
  }

  export type LandingPageScalarWhereWithAggregatesInput = {
    AND?: LandingPageScalarWhereWithAggregatesInput | LandingPageScalarWhereWithAggregatesInput[]
    OR?: LandingPageScalarWhereWithAggregatesInput[]
    NOT?: LandingPageScalarWhereWithAggregatesInput | LandingPageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LandingPage"> | string
    maklerId?: StringWithAggregatesFilter<"LandingPage"> | string
    tenantId?: StringWithAggregatesFilter<"LandingPage"> | string
    campaignId?: StringNullableWithAggregatesFilter<"LandingPage"> | string | null
    name?: StringWithAggregatesFilter<"LandingPage"> | string
    slug?: StringWithAggregatesFilter<"LandingPage"> | string
    template?: EnumLandingPageTemplateWithAggregatesFilter<"LandingPage"> | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusWithAggregatesFilter<"LandingPage"> | $Enums.LandingPageStatus
    headline?: StringWithAggregatesFilter<"LandingPage"> | string
    subheadline?: StringNullableWithAggregatesFilter<"LandingPage"> | string | null
    content?: JsonWithAggregatesFilter<"LandingPage">
    formFields?: JsonWithAggregatesFilter<"LandingPage">
    metaTitle?: StringNullableWithAggregatesFilter<"LandingPage"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"LandingPage"> | string | null
    views?: IntWithAggregatesFilter<"LandingPage"> | number
    submissions?: IntWithAggregatesFilter<"LandingPage"> | number
    conversionRate?: FloatWithAggregatesFilter<"LandingPage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LandingPage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LandingPage"> | Date | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"LandingPage"> | Date | string | null
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    platform?: EnumPlatformFilter<"ApiKey"> | $Enums.Platform
    isActive?: BoolFilter<"ApiKey"> | boolean
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    key?: SortOrder
    platform?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    name?: StringFilter<"ApiKey"> | string
    platform?: EnumPlatformFilter<"ApiKey"> | $Enums.Platform
    isActive?: BoolFilter<"ApiKey"> | boolean
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
  }, "id" | "key">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    key?: SortOrder
    platform?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    key?: StringWithAggregatesFilter<"ApiKey"> | string
    platform?: EnumPlatformWithAggregatesFilter<"ApiKey"> | $Enums.Platform
    isActive?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type SystemSettingsWhereInput = {
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    id?: StringFilter<"SystemSettings"> | string
    key?: StringFilter<"SystemSettings"> | string
    value?: JsonFilter<"SystemSettings">
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }

  export type SystemSettingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    value?: JsonFilter<"SystemSettings">
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }, "id" | "key">

  export type SystemSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemSettingsCountOrderByAggregateInput
    _max?: SystemSettingsMaxOrderByAggregateInput
    _min?: SystemSettingsMinOrderByAggregateInput
  }

  export type SystemSettingsScalarWhereWithAggregatesInput = {
    AND?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    OR?: SystemSettingsScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemSettings"> | string
    key?: StringWithAggregatesFilter<"SystemSettings"> | string
    value?: JsonWithAggregatesFilter<"SystemSettings">
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSettings"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    makler?: MaklerCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tenant?: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    tenantId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    makler?: MaklerUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makler?: MaklerUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tenant?: TenantUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makler?: MaklerUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    tenantId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    subdomain: string
    domain?: string | null
    isActive?: boolean
    plan?: $Enums.TenantPlan
    maxMaklers?: number
    maxLeads?: number
    dataRegion?: string
    gdprContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    maklers?: MaklerCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    landingPages?: LandingPageCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    subdomain: string
    domain?: string | null
    isActive?: boolean
    plan?: $Enums.TenantPlan
    maxMaklers?: number
    maxLeads?: number
    dataRegion?: string
    gdprContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    maklers?: MaklerUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    maklers?: MaklerUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    landingPages?: LandingPageUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    maklers?: MaklerUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    landingPages?: LandingPageUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    subdomain: string
    domain?: string | null
    isActive?: boolean
    plan?: $Enums.TenantPlan
    maxMaklers?: number
    maxLeads?: number
    dataRegion?: string
    gdprContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaklerCreateInput = {
    id?: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
    user: UserCreateNestedOneWithoutMaklerInput
    tenant: TenantCreateNestedOneWithoutMaklersInput
    campaigns?: CampaignCreateNestedManyWithoutMaklerInput
    leads?: LeadCreateNestedManyWithoutMaklerInput
    landingPages?: LandingPageCreateNestedManyWithoutMaklerInput
  }

  export type MaklerUncheckedCreateInput = {
    id?: string
    userId: string
    tenantId: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutMaklerInput
    leads?: LeadUncheckedCreateNestedManyWithoutMaklerInput
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutMaklerInput
  }

  export type MaklerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMaklerNestedInput
    tenant?: TenantUpdateOneRequiredWithoutMaklersNestedInput
    campaigns?: CampaignUpdateManyWithoutMaklerNestedInput
    leads?: LeadUpdateManyWithoutMaklerNestedInput
    landingPages?: LandingPageUpdateManyWithoutMaklerNestedInput
  }

  export type MaklerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    campaigns?: CampaignUncheckedUpdateManyWithoutMaklerNestedInput
    leads?: LeadUncheckedUpdateManyWithoutMaklerNestedInput
    landingPages?: LandingPageUncheckedUpdateManyWithoutMaklerNestedInput
  }

  export type MaklerCreateManyInput = {
    id?: string
    userId: string
    tenantId: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
  }

  export type MaklerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
  }

  export type MaklerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    budget: number
    spent?: number
    platform: $Enums.Platform
    targeting: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    impressions?: number
    clicks?: number
    leads?: number
    conversions?: number
    ctr?: number
    cpl?: number
    conversionRate?: number
    makler: MaklerCreateNestedOneWithoutCampaignsInput
    tenant: TenantCreateNestedOneWithoutCampaignsInput
    leadSources?: LeadCreateNestedManyWithoutCampaignInput
    landingPages?: LandingPageCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    maklerId: string
    tenantId: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    budget: number
    spent?: number
    platform: $Enums.Platform
    targeting: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    impressions?: number
    clicks?: number
    leads?: number
    conversions?: number
    ctr?: number
    cpl?: number
    conversionRate?: number
    leadSources?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    makler?: MaklerUpdateOneRequiredWithoutCampaignsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutCampaignsNestedInput
    leadSources?: LeadUpdateManyWithoutCampaignNestedInput
    landingPages?: LandingPageUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    leadSources?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    landingPages?: LandingPageUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    maklerId: string
    tenantId: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    budget: number
    spent?: number
    platform: $Enums.Platform
    targeting: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    impressions?: number
    clicks?: number
    leads?: number
    conversions?: number
    ctr?: number
    cpl?: number
    conversionRate?: number
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
  }

  export type LeadCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
    makler: MaklerCreateNestedOneWithoutLeadsInput
    tenant: TenantCreateNestedOneWithoutLeadsInput
    campaign?: CampaignCreateNestedOneWithoutLeadSourcesInput
    communications?: CommunicationCreateNestedManyWithoutLeadInput
    activities?: LeadActivityCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    maklerId: string
    tenantId: string
    campaignId?: string | null
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
    communications?: CommunicationUncheckedCreateNestedManyWithoutLeadInput
    activities?: LeadActivityUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    makler?: MaklerUpdateOneRequiredWithoutLeadsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneWithoutLeadSourcesNestedInput
    communications?: CommunicationUpdateManyWithoutLeadNestedInput
    activities?: LeadActivityUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    communications?: CommunicationUncheckedUpdateManyWithoutLeadNestedInput
    activities?: LeadActivityUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateManyInput = {
    id?: string
    maklerId: string
    tenantId: string
    campaignId?: string | null
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommunicationCreateInput = {
    id?: string
    type: $Enums.CommunicationType
    direction: $Enums.CommunicationDirection
    subject?: string | null
    content: string
    status?: $Enums.CommunicationStatus
    sentAt?: Date | string
    readAt?: Date | string | null
    lead: LeadCreateNestedOneWithoutCommunicationsInput
  }

  export type CommunicationUncheckedCreateInput = {
    id?: string
    leadId: string
    type: $Enums.CommunicationType
    direction: $Enums.CommunicationDirection
    subject?: string | null
    content: string
    status?: $Enums.CommunicationStatus
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type CommunicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    direction?: EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunicationStatusFieldUpdateOperationsInput | $Enums.CommunicationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lead?: LeadUpdateOneRequiredWithoutCommunicationsNestedInput
  }

  export type CommunicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    direction?: EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunicationStatusFieldUpdateOperationsInput | $Enums.CommunicationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationCreateManyInput = {
    id?: string
    leadId: string
    type: $Enums.CommunicationType
    direction: $Enums.CommunicationDirection
    subject?: string | null
    content: string
    status?: $Enums.CommunicationStatus
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type CommunicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    direction?: EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunicationStatusFieldUpdateOperationsInput | $Enums.CommunicationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    direction?: EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunicationStatusFieldUpdateOperationsInput | $Enums.CommunicationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadActivityCreateInput = {
    id?: string
    type: $Enums.LeadActivityType
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lead: LeadCreateNestedOneWithoutActivitiesInput
  }

  export type LeadActivityUncheckedCreateInput = {
    id?: string
    leadId: string
    type: $Enums.LeadActivityType
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LeadActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeadActivityTypeFieldUpdateOperationsInput | $Enums.LeadActivityType
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type LeadActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeadActivityTypeFieldUpdateOperationsInput | $Enums.LeadActivityType
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadActivityCreateManyInput = {
    id?: string
    leadId: string
    type: $Enums.LeadActivityType
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LeadActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeadActivityTypeFieldUpdateOperationsInput | $Enums.LeadActivityType
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeadActivityTypeFieldUpdateOperationsInput | $Enums.LeadActivityType
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandingPageCreateInput = {
    id?: string
    name: string
    slug: string
    template: $Enums.LandingPageTemplate
    status?: $Enums.LandingPageStatus
    headline: string
    subheadline?: string | null
    content: JsonNullValueInput | InputJsonValue
    formFields: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    views?: number
    submissions?: number
    conversionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    makler: MaklerCreateNestedOneWithoutLandingPagesInput
    tenant: TenantCreateNestedOneWithoutLandingPagesInput
    campaign?: CampaignCreateNestedOneWithoutLandingPagesInput
  }

  export type LandingPageUncheckedCreateInput = {
    id?: string
    maklerId: string
    tenantId: string
    campaignId?: string | null
    name: string
    slug: string
    template: $Enums.LandingPageTemplate
    status?: $Enums.LandingPageStatus
    headline: string
    subheadline?: string | null
    content: JsonNullValueInput | InputJsonValue
    formFields: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    views?: number
    submissions?: number
    conversionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type LandingPageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    template?: EnumLandingPageTemplateFieldUpdateOperationsInput | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFieldUpdateOperationsInput | $Enums.LandingPageStatus
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    formFields?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    makler?: MaklerUpdateOneRequiredWithoutLandingPagesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLandingPagesNestedInput
    campaign?: CampaignUpdateOneWithoutLandingPagesNestedInput
  }

  export type LandingPageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    template?: EnumLandingPageTemplateFieldUpdateOperationsInput | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFieldUpdateOperationsInput | $Enums.LandingPageStatus
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    formFields?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LandingPageCreateManyInput = {
    id?: string
    maklerId: string
    tenantId: string
    campaignId?: string | null
    name: string
    slug: string
    template: $Enums.LandingPageTemplate
    status?: $Enums.LandingPageStatus
    headline: string
    subheadline?: string | null
    content: JsonNullValueInput | InputJsonValue
    formFields: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    views?: number
    submissions?: number
    conversionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type LandingPageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    template?: EnumLandingPageTemplateFieldUpdateOperationsInput | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFieldUpdateOperationsInput | $Enums.LandingPageStatus
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    formFields?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LandingPageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    template?: EnumLandingPageTemplateFieldUpdateOperationsInput | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFieldUpdateOperationsInput | $Enums.LandingPageStatus
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    formFields?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiKeyCreateInput = {
    id?: string
    name: string
    key: string
    platform: $Enums.Platform
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    name: string
    key: string
    platform: $Enums.Platform
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    name: string
    key: string
    platform: $Enums.Platform
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type SystemSettingsUncheckedCreateInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateManyInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MaklerNullableScalarRelationFilter = {
    is?: MaklerWhereInput | null
    isNot?: MaklerWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type TenantNullableScalarRelationFilter = {
    is?: TenantWhereInput | null
    isNot?: TenantWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumTenantPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantPlan | EnumTenantPlanFieldRefInput<$PrismaModel>
    in?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantPlanFilter<$PrismaModel> | $Enums.TenantPlan
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type MaklerListRelationFilter = {
    every?: MaklerWhereInput
    some?: MaklerWhereInput
    none?: MaklerWhereInput
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type LandingPageListRelationFilter = {
    every?: LandingPageWhereInput
    some?: LandingPageWhereInput
    none?: LandingPageWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaklerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LandingPageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    domain?: SortOrder
    isActive?: SortOrder
    plan?: SortOrder
    maxMaklers?: SortOrder
    maxLeads?: SortOrder
    dataRegion?: SortOrder
    gdprContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantAvgOrderByAggregateInput = {
    maxMaklers?: SortOrder
    maxLeads?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    domain?: SortOrder
    isActive?: SortOrder
    plan?: SortOrder
    maxMaklers?: SortOrder
    maxLeads?: SortOrder
    dataRegion?: SortOrder
    gdprContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subdomain?: SortOrder
    domain?: SortOrder
    isActive?: SortOrder
    plan?: SortOrder
    maxMaklers?: SortOrder
    maxLeads?: SortOrder
    dataRegion?: SortOrder
    gdprContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantSumOrderByAggregateInput = {
    maxMaklers?: SortOrder
    maxLeads?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTenantPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantPlan | EnumTenantPlanFieldRefInput<$PrismaModel>
    in?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantPlanWithAggregatesFilter<$PrismaModel> | $Enums.TenantPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantPlanFilter<$PrismaModel>
    _max?: NestedEnumTenantPlanFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type MaklerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    logo?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
  }

  export type MaklerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    logo?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
  }

  export type MaklerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    logo?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MaklerScalarRelationFilter = {
    is?: MaklerWhereInput
    isNot?: MaklerWhereInput
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    budget?: SortOrder
    spent?: SortOrder
    platform?: SortOrder
    targeting?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    leads?: SortOrder
    conversions?: SortOrder
    ctr?: SortOrder
    cpl?: SortOrder
    conversionRate?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    budget?: SortOrder
    spent?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    leads?: SortOrder
    conversions?: SortOrder
    ctr?: SortOrder
    cpl?: SortOrder
    conversionRate?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    budget?: SortOrder
    spent?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    leads?: SortOrder
    conversions?: SortOrder
    ctr?: SortOrder
    cpl?: SortOrder
    conversionRate?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    budget?: SortOrder
    spent?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    leads?: SortOrder
    conversions?: SortOrder
    ctr?: SortOrder
    cpl?: SortOrder
    conversionRate?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    budget?: SortOrder
    spent?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    leads?: SortOrder
    conversions?: SortOrder
    ctr?: SortOrder
    cpl?: SortOrder
    conversionRate?: SortOrder
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CampaignNullableScalarRelationFilter = {
    is?: CampaignWhereInput | null
    isNot?: CampaignWhereInput | null
  }

  export type CommunicationListRelationFilter = {
    every?: CommunicationWhereInput
    some?: CommunicationWhereInput
    none?: CommunicationWhereInput
  }

  export type LeadActivityListRelationFilter = {
    every?: LeadActivityWhereInput
    some?: LeadActivityWhereInput
    none?: LeadActivityWhereInput
  }

  export type CommunicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    status?: SortOrder
    score?: SortOrder
    source?: SortOrder
    interest?: SortOrder
    budget?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastContact?: SortOrder
    nextFollowUp?: SortOrder
    consentGiven?: SortOrder
    consentDate?: SortOrder
    marketingConsent?: SortOrder
  }

  export type LeadAvgOrderByAggregateInput = {
    score?: SortOrder
    budget?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    status?: SortOrder
    score?: SortOrder
    source?: SortOrder
    interest?: SortOrder
    budget?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastContact?: SortOrder
    nextFollowUp?: SortOrder
    consentGiven?: SortOrder
    consentDate?: SortOrder
    marketingConsent?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    status?: SortOrder
    score?: SortOrder
    source?: SortOrder
    interest?: SortOrder
    budget?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastContact?: SortOrder
    nextFollowUp?: SortOrder
    consentGiven?: SortOrder
    consentDate?: SortOrder
    marketingConsent?: SortOrder
  }

  export type LeadSumOrderByAggregateInput = {
    score?: SortOrder
    budget?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumCommunicationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationType | EnumCommunicationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationTypeFilter<$PrismaModel> | $Enums.CommunicationType
  }

  export type EnumCommunicationDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationDirection | EnumCommunicationDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationDirection[] | ListEnumCommunicationDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationDirection[] | ListEnumCommunicationDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationDirectionFilter<$PrismaModel> | $Enums.CommunicationDirection
  }

  export type EnumCommunicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationStatus | EnumCommunicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationStatus[] | ListEnumCommunicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationStatus[] | ListEnumCommunicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationStatusFilter<$PrismaModel> | $Enums.CommunicationStatus
  }

  export type LeadScalarRelationFilter = {
    is?: LeadWhereInput
    isNot?: LeadWhereInput
  }

  export type CommunicationCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    type?: SortOrder
    direction?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
  }

  export type CommunicationMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    type?: SortOrder
    direction?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
  }

  export type CommunicationMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    type?: SortOrder
    direction?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
  }

  export type EnumCommunicationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationType | EnumCommunicationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationTypeWithAggregatesFilter<$PrismaModel> | $Enums.CommunicationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunicationTypeFilter<$PrismaModel>
    _max?: NestedEnumCommunicationTypeFilter<$PrismaModel>
  }

  export type EnumCommunicationDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationDirection | EnumCommunicationDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationDirection[] | ListEnumCommunicationDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationDirection[] | ListEnumCommunicationDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationDirectionWithAggregatesFilter<$PrismaModel> | $Enums.CommunicationDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunicationDirectionFilter<$PrismaModel>
    _max?: NestedEnumCommunicationDirectionFilter<$PrismaModel>
  }

  export type EnumCommunicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationStatus | EnumCommunicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationStatus[] | ListEnumCommunicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationStatus[] | ListEnumCommunicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommunicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunicationStatusFilter<$PrismaModel>
    _max?: NestedEnumCommunicationStatusFilter<$PrismaModel>
  }

  export type EnumLeadActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadActivityType | EnumLeadActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeadActivityType[] | ListEnumLeadActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadActivityType[] | ListEnumLeadActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadActivityTypeFilter<$PrismaModel> | $Enums.LeadActivityType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LeadActivityCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadActivityMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumLeadActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadActivityType | EnumLeadActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeadActivityType[] | ListEnumLeadActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadActivityType[] | ListEnumLeadActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeadActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumLeadActivityTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumLandingPageTemplateFilter<$PrismaModel = never> = {
    equals?: $Enums.LandingPageTemplate | EnumLandingPageTemplateFieldRefInput<$PrismaModel>
    in?: $Enums.LandingPageTemplate[] | ListEnumLandingPageTemplateFieldRefInput<$PrismaModel>
    notIn?: $Enums.LandingPageTemplate[] | ListEnumLandingPageTemplateFieldRefInput<$PrismaModel>
    not?: NestedEnumLandingPageTemplateFilter<$PrismaModel> | $Enums.LandingPageTemplate
  }

  export type EnumLandingPageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LandingPageStatus | EnumLandingPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LandingPageStatus[] | ListEnumLandingPageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LandingPageStatus[] | ListEnumLandingPageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLandingPageStatusFilter<$PrismaModel> | $Enums.LandingPageStatus
  }

  export type LandingPageCountOrderByAggregateInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    template?: SortOrder
    status?: SortOrder
    headline?: SortOrder
    subheadline?: SortOrder
    content?: SortOrder
    formFields?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    views?: SortOrder
    submissions?: SortOrder
    conversionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type LandingPageAvgOrderByAggregateInput = {
    views?: SortOrder
    submissions?: SortOrder
    conversionRate?: SortOrder
  }

  export type LandingPageMaxOrderByAggregateInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    template?: SortOrder
    status?: SortOrder
    headline?: SortOrder
    subheadline?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    views?: SortOrder
    submissions?: SortOrder
    conversionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type LandingPageMinOrderByAggregateInput = {
    id?: SortOrder
    maklerId?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    template?: SortOrder
    status?: SortOrder
    headline?: SortOrder
    subheadline?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    views?: SortOrder
    submissions?: SortOrder
    conversionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type LandingPageSumOrderByAggregateInput = {
    views?: SortOrder
    submissions?: SortOrder
    conversionRate?: SortOrder
  }

  export type EnumLandingPageTemplateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LandingPageTemplate | EnumLandingPageTemplateFieldRefInput<$PrismaModel>
    in?: $Enums.LandingPageTemplate[] | ListEnumLandingPageTemplateFieldRefInput<$PrismaModel>
    notIn?: $Enums.LandingPageTemplate[] | ListEnumLandingPageTemplateFieldRefInput<$PrismaModel>
    not?: NestedEnumLandingPageTemplateWithAggregatesFilter<$PrismaModel> | $Enums.LandingPageTemplate
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLandingPageTemplateFilter<$PrismaModel>
    _max?: NestedEnumLandingPageTemplateFilter<$PrismaModel>
  }

  export type EnumLandingPageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LandingPageStatus | EnumLandingPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LandingPageStatus[] | ListEnumLandingPageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LandingPageStatus[] | ListEnumLandingPageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLandingPageStatusWithAggregatesFilter<$PrismaModel> | $Enums.LandingPageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLandingPageStatusFilter<$PrismaModel>
    _max?: NestedEnumLandingPageStatusFilter<$PrismaModel>
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    key?: SortOrder
    platform?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    key?: SortOrder
    platform?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    key?: SortOrder
    platform?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaklerCreateNestedOneWithoutUserInput = {
    create?: XOR<MaklerCreateWithoutUserInput, MaklerUncheckedCreateWithoutUserInput>
    connectOrCreate?: MaklerCreateOrConnectWithoutUserInput
    connect?: MaklerWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type MaklerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MaklerCreateWithoutUserInput, MaklerUncheckedCreateWithoutUserInput>
    connectOrCreate?: MaklerCreateOrConnectWithoutUserInput
    connect?: MaklerWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MaklerUpdateOneWithoutUserNestedInput = {
    create?: XOR<MaklerCreateWithoutUserInput, MaklerUncheckedCreateWithoutUserInput>
    connectOrCreate?: MaklerCreateOrConnectWithoutUserInput
    upsert?: MaklerUpsertWithoutUserInput
    disconnect?: MaklerWhereInput | boolean
    delete?: MaklerWhereInput | boolean
    connect?: MaklerWhereUniqueInput
    update?: XOR<XOR<MaklerUpdateToOneWithWhereWithoutUserInput, MaklerUpdateWithoutUserInput>, MaklerUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TenantUpdateOneWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsersInput, TenantUpdateWithoutUsersInput>, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MaklerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MaklerCreateWithoutUserInput, MaklerUncheckedCreateWithoutUserInput>
    connectOrCreate?: MaklerCreateOrConnectWithoutUserInput
    upsert?: MaklerUpsertWithoutUserInput
    disconnect?: MaklerWhereInput | boolean
    delete?: MaklerWhereInput | boolean
    connect?: MaklerWhereUniqueInput
    update?: XOR<XOR<MaklerUpdateToOneWithWhereWithoutUserInput, MaklerUpdateWithoutUserInput>, MaklerUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MaklerCreateNestedManyWithoutTenantInput = {
    create?: XOR<MaklerCreateWithoutTenantInput, MaklerUncheckedCreateWithoutTenantInput> | MaklerCreateWithoutTenantInput[] | MaklerUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaklerCreateOrConnectWithoutTenantInput | MaklerCreateOrConnectWithoutTenantInput[]
    createMany?: MaklerCreateManyTenantInputEnvelope
    connect?: MaklerWhereUniqueInput | MaklerWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutTenantInput = {
    create?: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput> | CampaignCreateWithoutTenantInput[] | CampaignUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTenantInput | CampaignCreateOrConnectWithoutTenantInput[]
    createMany?: CampaignCreateManyTenantInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput> | LeadCreateWithoutTenantInput[] | LeadUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTenantInput | LeadCreateOrConnectWithoutTenantInput[]
    createMany?: LeadCreateManyTenantInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LandingPageCreateNestedManyWithoutTenantInput = {
    create?: XOR<LandingPageCreateWithoutTenantInput, LandingPageUncheckedCreateWithoutTenantInput> | LandingPageCreateWithoutTenantInput[] | LandingPageUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LandingPageCreateOrConnectWithoutTenantInput | LandingPageCreateOrConnectWithoutTenantInput[]
    createMany?: LandingPageCreateManyTenantInputEnvelope
    connect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MaklerUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<MaklerCreateWithoutTenantInput, MaklerUncheckedCreateWithoutTenantInput> | MaklerCreateWithoutTenantInput[] | MaklerUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaklerCreateOrConnectWithoutTenantInput | MaklerCreateOrConnectWithoutTenantInput[]
    createMany?: MaklerCreateManyTenantInputEnvelope
    connect?: MaklerWhereUniqueInput | MaklerWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput> | CampaignCreateWithoutTenantInput[] | CampaignUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTenantInput | CampaignCreateOrConnectWithoutTenantInput[]
    createMany?: CampaignCreateManyTenantInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput> | LeadCreateWithoutTenantInput[] | LeadUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTenantInput | LeadCreateOrConnectWithoutTenantInput[]
    createMany?: LeadCreateManyTenantInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LandingPageUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<LandingPageCreateWithoutTenantInput, LandingPageUncheckedCreateWithoutTenantInput> | LandingPageCreateWithoutTenantInput[] | LandingPageUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LandingPageCreateOrConnectWithoutTenantInput | LandingPageCreateOrConnectWithoutTenantInput[]
    createMany?: LandingPageCreateManyTenantInputEnvelope
    connect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumTenantPlanFieldUpdateOperationsInput = {
    set?: $Enums.TenantPlan
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MaklerUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MaklerCreateWithoutTenantInput, MaklerUncheckedCreateWithoutTenantInput> | MaklerCreateWithoutTenantInput[] | MaklerUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaklerCreateOrConnectWithoutTenantInput | MaklerCreateOrConnectWithoutTenantInput[]
    upsert?: MaklerUpsertWithWhereUniqueWithoutTenantInput | MaklerUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MaklerCreateManyTenantInputEnvelope
    set?: MaklerWhereUniqueInput | MaklerWhereUniqueInput[]
    disconnect?: MaklerWhereUniqueInput | MaklerWhereUniqueInput[]
    delete?: MaklerWhereUniqueInput | MaklerWhereUniqueInput[]
    connect?: MaklerWhereUniqueInput | MaklerWhereUniqueInput[]
    update?: MaklerUpdateWithWhereUniqueWithoutTenantInput | MaklerUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MaklerUpdateManyWithWhereWithoutTenantInput | MaklerUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MaklerScalarWhereInput | MaklerScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput> | CampaignCreateWithoutTenantInput[] | CampaignUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTenantInput | CampaignCreateOrConnectWithoutTenantInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTenantInput | CampaignUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CampaignCreateManyTenantInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTenantInput | CampaignUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTenantInput | CampaignUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput> | LeadCreateWithoutTenantInput[] | LeadUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTenantInput | LeadCreateOrConnectWithoutTenantInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutTenantInput | LeadUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeadCreateManyTenantInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutTenantInput | LeadUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutTenantInput | LeadUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LandingPageUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LandingPageCreateWithoutTenantInput, LandingPageUncheckedCreateWithoutTenantInput> | LandingPageCreateWithoutTenantInput[] | LandingPageUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LandingPageCreateOrConnectWithoutTenantInput | LandingPageCreateOrConnectWithoutTenantInput[]
    upsert?: LandingPageUpsertWithWhereUniqueWithoutTenantInput | LandingPageUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LandingPageCreateManyTenantInputEnvelope
    set?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    disconnect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    delete?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    connect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    update?: LandingPageUpdateWithWhereUniqueWithoutTenantInput | LandingPageUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LandingPageUpdateManyWithWhereWithoutTenantInput | LandingPageUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LandingPageScalarWhereInput | LandingPageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MaklerUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MaklerCreateWithoutTenantInput, MaklerUncheckedCreateWithoutTenantInput> | MaklerCreateWithoutTenantInput[] | MaklerUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaklerCreateOrConnectWithoutTenantInput | MaklerCreateOrConnectWithoutTenantInput[]
    upsert?: MaklerUpsertWithWhereUniqueWithoutTenantInput | MaklerUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MaklerCreateManyTenantInputEnvelope
    set?: MaklerWhereUniqueInput | MaklerWhereUniqueInput[]
    disconnect?: MaklerWhereUniqueInput | MaklerWhereUniqueInput[]
    delete?: MaklerWhereUniqueInput | MaklerWhereUniqueInput[]
    connect?: MaklerWhereUniqueInput | MaklerWhereUniqueInput[]
    update?: MaklerUpdateWithWhereUniqueWithoutTenantInput | MaklerUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MaklerUpdateManyWithWhereWithoutTenantInput | MaklerUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MaklerScalarWhereInput | MaklerScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput> | CampaignCreateWithoutTenantInput[] | CampaignUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTenantInput | CampaignCreateOrConnectWithoutTenantInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTenantInput | CampaignUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CampaignCreateManyTenantInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTenantInput | CampaignUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTenantInput | CampaignUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput> | LeadCreateWithoutTenantInput[] | LeadUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTenantInput | LeadCreateOrConnectWithoutTenantInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutTenantInput | LeadUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeadCreateManyTenantInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutTenantInput | LeadUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutTenantInput | LeadUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LandingPageUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LandingPageCreateWithoutTenantInput, LandingPageUncheckedCreateWithoutTenantInput> | LandingPageCreateWithoutTenantInput[] | LandingPageUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LandingPageCreateOrConnectWithoutTenantInput | LandingPageCreateOrConnectWithoutTenantInput[]
    upsert?: LandingPageUpsertWithWhereUniqueWithoutTenantInput | LandingPageUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LandingPageCreateManyTenantInputEnvelope
    set?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    disconnect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    delete?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    connect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    update?: LandingPageUpdateWithWhereUniqueWithoutTenantInput | LandingPageUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LandingPageUpdateManyWithWhereWithoutTenantInput | LandingPageUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LandingPageScalarWhereInput | LandingPageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutMaklerInput = {
    create?: XOR<UserCreateWithoutMaklerInput, UserUncheckedCreateWithoutMaklerInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaklerInput
    connect?: UserWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutMaklersInput = {
    create?: XOR<TenantCreateWithoutMaklersInput, TenantUncheckedCreateWithoutMaklersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMaklersInput
    connect?: TenantWhereUniqueInput
  }

  export type CampaignCreateNestedManyWithoutMaklerInput = {
    create?: XOR<CampaignCreateWithoutMaklerInput, CampaignUncheckedCreateWithoutMaklerInput> | CampaignCreateWithoutMaklerInput[] | CampaignUncheckedCreateWithoutMaklerInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutMaklerInput | CampaignCreateOrConnectWithoutMaklerInput[]
    createMany?: CampaignCreateManyMaklerInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutMaklerInput = {
    create?: XOR<LeadCreateWithoutMaklerInput, LeadUncheckedCreateWithoutMaklerInput> | LeadCreateWithoutMaklerInput[] | LeadUncheckedCreateWithoutMaklerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutMaklerInput | LeadCreateOrConnectWithoutMaklerInput[]
    createMany?: LeadCreateManyMaklerInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LandingPageCreateNestedManyWithoutMaklerInput = {
    create?: XOR<LandingPageCreateWithoutMaklerInput, LandingPageUncheckedCreateWithoutMaklerInput> | LandingPageCreateWithoutMaklerInput[] | LandingPageUncheckedCreateWithoutMaklerInput[]
    connectOrCreate?: LandingPageCreateOrConnectWithoutMaklerInput | LandingPageCreateOrConnectWithoutMaklerInput[]
    createMany?: LandingPageCreateManyMaklerInputEnvelope
    connect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutMaklerInput = {
    create?: XOR<CampaignCreateWithoutMaklerInput, CampaignUncheckedCreateWithoutMaklerInput> | CampaignCreateWithoutMaklerInput[] | CampaignUncheckedCreateWithoutMaklerInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutMaklerInput | CampaignCreateOrConnectWithoutMaklerInput[]
    createMany?: CampaignCreateManyMaklerInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutMaklerInput = {
    create?: XOR<LeadCreateWithoutMaklerInput, LeadUncheckedCreateWithoutMaklerInput> | LeadCreateWithoutMaklerInput[] | LeadUncheckedCreateWithoutMaklerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutMaklerInput | LeadCreateOrConnectWithoutMaklerInput[]
    createMany?: LeadCreateManyMaklerInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LandingPageUncheckedCreateNestedManyWithoutMaklerInput = {
    create?: XOR<LandingPageCreateWithoutMaklerInput, LandingPageUncheckedCreateWithoutMaklerInput> | LandingPageCreateWithoutMaklerInput[] | LandingPageUncheckedCreateWithoutMaklerInput[]
    connectOrCreate?: LandingPageCreateOrConnectWithoutMaklerInput | LandingPageCreateOrConnectWithoutMaklerInput[]
    createMany?: LandingPageCreateManyMaklerInputEnvelope
    connect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMaklerNestedInput = {
    create?: XOR<UserCreateWithoutMaklerInput, UserUncheckedCreateWithoutMaklerInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaklerInput
    upsert?: UserUpsertWithoutMaklerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMaklerInput, UserUpdateWithoutMaklerInput>, UserUncheckedUpdateWithoutMaklerInput>
  }

  export type TenantUpdateOneRequiredWithoutMaklersNestedInput = {
    create?: XOR<TenantCreateWithoutMaklersInput, TenantUncheckedCreateWithoutMaklersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMaklersInput
    upsert?: TenantUpsertWithoutMaklersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutMaklersInput, TenantUpdateWithoutMaklersInput>, TenantUncheckedUpdateWithoutMaklersInput>
  }

  export type CampaignUpdateManyWithoutMaklerNestedInput = {
    create?: XOR<CampaignCreateWithoutMaklerInput, CampaignUncheckedCreateWithoutMaklerInput> | CampaignCreateWithoutMaklerInput[] | CampaignUncheckedCreateWithoutMaklerInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutMaklerInput | CampaignCreateOrConnectWithoutMaklerInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutMaklerInput | CampaignUpsertWithWhereUniqueWithoutMaklerInput[]
    createMany?: CampaignCreateManyMaklerInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutMaklerInput | CampaignUpdateWithWhereUniqueWithoutMaklerInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutMaklerInput | CampaignUpdateManyWithWhereWithoutMaklerInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutMaklerNestedInput = {
    create?: XOR<LeadCreateWithoutMaklerInput, LeadUncheckedCreateWithoutMaklerInput> | LeadCreateWithoutMaklerInput[] | LeadUncheckedCreateWithoutMaklerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutMaklerInput | LeadCreateOrConnectWithoutMaklerInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutMaklerInput | LeadUpsertWithWhereUniqueWithoutMaklerInput[]
    createMany?: LeadCreateManyMaklerInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutMaklerInput | LeadUpdateWithWhereUniqueWithoutMaklerInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutMaklerInput | LeadUpdateManyWithWhereWithoutMaklerInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LandingPageUpdateManyWithoutMaklerNestedInput = {
    create?: XOR<LandingPageCreateWithoutMaklerInput, LandingPageUncheckedCreateWithoutMaklerInput> | LandingPageCreateWithoutMaklerInput[] | LandingPageUncheckedCreateWithoutMaklerInput[]
    connectOrCreate?: LandingPageCreateOrConnectWithoutMaklerInput | LandingPageCreateOrConnectWithoutMaklerInput[]
    upsert?: LandingPageUpsertWithWhereUniqueWithoutMaklerInput | LandingPageUpsertWithWhereUniqueWithoutMaklerInput[]
    createMany?: LandingPageCreateManyMaklerInputEnvelope
    set?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    disconnect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    delete?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    connect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    update?: LandingPageUpdateWithWhereUniqueWithoutMaklerInput | LandingPageUpdateWithWhereUniqueWithoutMaklerInput[]
    updateMany?: LandingPageUpdateManyWithWhereWithoutMaklerInput | LandingPageUpdateManyWithWhereWithoutMaklerInput[]
    deleteMany?: LandingPageScalarWhereInput | LandingPageScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutMaklerNestedInput = {
    create?: XOR<CampaignCreateWithoutMaklerInput, CampaignUncheckedCreateWithoutMaklerInput> | CampaignCreateWithoutMaklerInput[] | CampaignUncheckedCreateWithoutMaklerInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutMaklerInput | CampaignCreateOrConnectWithoutMaklerInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutMaklerInput | CampaignUpsertWithWhereUniqueWithoutMaklerInput[]
    createMany?: CampaignCreateManyMaklerInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutMaklerInput | CampaignUpdateWithWhereUniqueWithoutMaklerInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutMaklerInput | CampaignUpdateManyWithWhereWithoutMaklerInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutMaklerNestedInput = {
    create?: XOR<LeadCreateWithoutMaklerInput, LeadUncheckedCreateWithoutMaklerInput> | LeadCreateWithoutMaklerInput[] | LeadUncheckedCreateWithoutMaklerInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutMaklerInput | LeadCreateOrConnectWithoutMaklerInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutMaklerInput | LeadUpsertWithWhereUniqueWithoutMaklerInput[]
    createMany?: LeadCreateManyMaklerInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutMaklerInput | LeadUpdateWithWhereUniqueWithoutMaklerInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutMaklerInput | LeadUpdateManyWithWhereWithoutMaklerInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LandingPageUncheckedUpdateManyWithoutMaklerNestedInput = {
    create?: XOR<LandingPageCreateWithoutMaklerInput, LandingPageUncheckedCreateWithoutMaklerInput> | LandingPageCreateWithoutMaklerInput[] | LandingPageUncheckedCreateWithoutMaklerInput[]
    connectOrCreate?: LandingPageCreateOrConnectWithoutMaklerInput | LandingPageCreateOrConnectWithoutMaklerInput[]
    upsert?: LandingPageUpsertWithWhereUniqueWithoutMaklerInput | LandingPageUpsertWithWhereUniqueWithoutMaklerInput[]
    createMany?: LandingPageCreateManyMaklerInputEnvelope
    set?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    disconnect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    delete?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    connect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    update?: LandingPageUpdateWithWhereUniqueWithoutMaklerInput | LandingPageUpdateWithWhereUniqueWithoutMaklerInput[]
    updateMany?: LandingPageUpdateManyWithWhereWithoutMaklerInput | LandingPageUpdateManyWithWhereWithoutMaklerInput[]
    deleteMany?: LandingPageScalarWhereInput | LandingPageScalarWhereInput[]
  }

  export type MaklerCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<MaklerCreateWithoutCampaignsInput, MaklerUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: MaklerCreateOrConnectWithoutCampaignsInput
    connect?: MaklerWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<TenantCreateWithoutCampaignsInput, TenantUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCampaignsInput
    connect?: TenantWhereUniqueInput
  }

  export type LeadCreateNestedManyWithoutCampaignInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LandingPageCreateNestedManyWithoutCampaignInput = {
    create?: XOR<LandingPageCreateWithoutCampaignInput, LandingPageUncheckedCreateWithoutCampaignInput> | LandingPageCreateWithoutCampaignInput[] | LandingPageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LandingPageCreateOrConnectWithoutCampaignInput | LandingPageCreateOrConnectWithoutCampaignInput[]
    createMany?: LandingPageCreateManyCampaignInputEnvelope
    connect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LandingPageUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<LandingPageCreateWithoutCampaignInput, LandingPageUncheckedCreateWithoutCampaignInput> | LandingPageCreateWithoutCampaignInput[] | LandingPageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LandingPageCreateOrConnectWithoutCampaignInput | LandingPageCreateOrConnectWithoutCampaignInput[]
    createMany?: LandingPageCreateManyCampaignInputEnvelope
    connect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type MaklerUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<MaklerCreateWithoutCampaignsInput, MaklerUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: MaklerCreateOrConnectWithoutCampaignsInput
    upsert?: MaklerUpsertWithoutCampaignsInput
    connect?: MaklerWhereUniqueInput
    update?: XOR<XOR<MaklerUpdateToOneWithWhereWithoutCampaignsInput, MaklerUpdateWithoutCampaignsInput>, MaklerUncheckedUpdateWithoutCampaignsInput>
  }

  export type TenantUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<TenantCreateWithoutCampaignsInput, TenantUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCampaignsInput
    upsert?: TenantUpsertWithoutCampaignsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutCampaignsInput, TenantUpdateWithoutCampaignsInput>, TenantUncheckedUpdateWithoutCampaignsInput>
  }

  export type LeadUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCampaignInput | LeadUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCampaignInput | LeadUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCampaignInput | LeadUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LandingPageUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<LandingPageCreateWithoutCampaignInput, LandingPageUncheckedCreateWithoutCampaignInput> | LandingPageCreateWithoutCampaignInput[] | LandingPageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LandingPageCreateOrConnectWithoutCampaignInput | LandingPageCreateOrConnectWithoutCampaignInput[]
    upsert?: LandingPageUpsertWithWhereUniqueWithoutCampaignInput | LandingPageUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: LandingPageCreateManyCampaignInputEnvelope
    set?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    disconnect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    delete?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    connect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    update?: LandingPageUpdateWithWhereUniqueWithoutCampaignInput | LandingPageUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: LandingPageUpdateManyWithWhereWithoutCampaignInput | LandingPageUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: LandingPageScalarWhereInput | LandingPageScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCampaignInput | LeadUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCampaignInput | LeadUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCampaignInput | LeadUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LandingPageUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<LandingPageCreateWithoutCampaignInput, LandingPageUncheckedCreateWithoutCampaignInput> | LandingPageCreateWithoutCampaignInput[] | LandingPageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LandingPageCreateOrConnectWithoutCampaignInput | LandingPageCreateOrConnectWithoutCampaignInput[]
    upsert?: LandingPageUpsertWithWhereUniqueWithoutCampaignInput | LandingPageUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: LandingPageCreateManyCampaignInputEnvelope
    set?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    disconnect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    delete?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    connect?: LandingPageWhereUniqueInput | LandingPageWhereUniqueInput[]
    update?: LandingPageUpdateWithWhereUniqueWithoutCampaignInput | LandingPageUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: LandingPageUpdateManyWithWhereWithoutCampaignInput | LandingPageUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: LandingPageScalarWhereInput | LandingPageScalarWhereInput[]
  }

  export type MaklerCreateNestedOneWithoutLeadsInput = {
    create?: XOR<MaklerCreateWithoutLeadsInput, MaklerUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: MaklerCreateOrConnectWithoutLeadsInput
    connect?: MaklerWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutLeadsInput = {
    create?: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeadsInput
    connect?: TenantWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutLeadSourcesInput = {
    create?: XOR<CampaignCreateWithoutLeadSourcesInput, CampaignUncheckedCreateWithoutLeadSourcesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutLeadSourcesInput
    connect?: CampaignWhereUniqueInput
  }

  export type CommunicationCreateNestedManyWithoutLeadInput = {
    create?: XOR<CommunicationCreateWithoutLeadInput, CommunicationUncheckedCreateWithoutLeadInput> | CommunicationCreateWithoutLeadInput[] | CommunicationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutLeadInput | CommunicationCreateOrConnectWithoutLeadInput[]
    createMany?: CommunicationCreateManyLeadInputEnvelope
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
  }

  export type LeadActivityCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadActivityCreateWithoutLeadInput, LeadActivityUncheckedCreateWithoutLeadInput> | LeadActivityCreateWithoutLeadInput[] | LeadActivityUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadActivityCreateOrConnectWithoutLeadInput | LeadActivityCreateOrConnectWithoutLeadInput[]
    createMany?: LeadActivityCreateManyLeadInputEnvelope
    connect?: LeadActivityWhereUniqueInput | LeadActivityWhereUniqueInput[]
  }

  export type CommunicationUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<CommunicationCreateWithoutLeadInput, CommunicationUncheckedCreateWithoutLeadInput> | CommunicationCreateWithoutLeadInput[] | CommunicationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutLeadInput | CommunicationCreateOrConnectWithoutLeadInput[]
    createMany?: CommunicationCreateManyLeadInputEnvelope
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
  }

  export type LeadActivityUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadActivityCreateWithoutLeadInput, LeadActivityUncheckedCreateWithoutLeadInput> | LeadActivityCreateWithoutLeadInput[] | LeadActivityUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadActivityCreateOrConnectWithoutLeadInput | LeadActivityCreateOrConnectWithoutLeadInput[]
    createMany?: LeadActivityCreateManyLeadInputEnvelope
    connect?: LeadActivityWhereUniqueInput | LeadActivityWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MaklerUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<MaklerCreateWithoutLeadsInput, MaklerUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: MaklerCreateOrConnectWithoutLeadsInput
    upsert?: MaklerUpsertWithoutLeadsInput
    connect?: MaklerWhereUniqueInput
    update?: XOR<XOR<MaklerUpdateToOneWithWhereWithoutLeadsInput, MaklerUpdateWithoutLeadsInput>, MaklerUncheckedUpdateWithoutLeadsInput>
  }

  export type TenantUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeadsInput
    upsert?: TenantUpsertWithoutLeadsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutLeadsInput, TenantUpdateWithoutLeadsInput>, TenantUncheckedUpdateWithoutLeadsInput>
  }

  export type CampaignUpdateOneWithoutLeadSourcesNestedInput = {
    create?: XOR<CampaignCreateWithoutLeadSourcesInput, CampaignUncheckedCreateWithoutLeadSourcesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutLeadSourcesInput
    upsert?: CampaignUpsertWithoutLeadSourcesInput
    disconnect?: CampaignWhereInput | boolean
    delete?: CampaignWhereInput | boolean
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutLeadSourcesInput, CampaignUpdateWithoutLeadSourcesInput>, CampaignUncheckedUpdateWithoutLeadSourcesInput>
  }

  export type CommunicationUpdateManyWithoutLeadNestedInput = {
    create?: XOR<CommunicationCreateWithoutLeadInput, CommunicationUncheckedCreateWithoutLeadInput> | CommunicationCreateWithoutLeadInput[] | CommunicationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutLeadInput | CommunicationCreateOrConnectWithoutLeadInput[]
    upsert?: CommunicationUpsertWithWhereUniqueWithoutLeadInput | CommunicationUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: CommunicationCreateManyLeadInputEnvelope
    set?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    disconnect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    delete?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    update?: CommunicationUpdateWithWhereUniqueWithoutLeadInput | CommunicationUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: CommunicationUpdateManyWithWhereWithoutLeadInput | CommunicationUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
  }

  export type LeadActivityUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadActivityCreateWithoutLeadInput, LeadActivityUncheckedCreateWithoutLeadInput> | LeadActivityCreateWithoutLeadInput[] | LeadActivityUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadActivityCreateOrConnectWithoutLeadInput | LeadActivityCreateOrConnectWithoutLeadInput[]
    upsert?: LeadActivityUpsertWithWhereUniqueWithoutLeadInput | LeadActivityUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadActivityCreateManyLeadInputEnvelope
    set?: LeadActivityWhereUniqueInput | LeadActivityWhereUniqueInput[]
    disconnect?: LeadActivityWhereUniqueInput | LeadActivityWhereUniqueInput[]
    delete?: LeadActivityWhereUniqueInput | LeadActivityWhereUniqueInput[]
    connect?: LeadActivityWhereUniqueInput | LeadActivityWhereUniqueInput[]
    update?: LeadActivityUpdateWithWhereUniqueWithoutLeadInput | LeadActivityUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadActivityUpdateManyWithWhereWithoutLeadInput | LeadActivityUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadActivityScalarWhereInput | LeadActivityScalarWhereInput[]
  }

  export type CommunicationUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<CommunicationCreateWithoutLeadInput, CommunicationUncheckedCreateWithoutLeadInput> | CommunicationCreateWithoutLeadInput[] | CommunicationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: CommunicationCreateOrConnectWithoutLeadInput | CommunicationCreateOrConnectWithoutLeadInput[]
    upsert?: CommunicationUpsertWithWhereUniqueWithoutLeadInput | CommunicationUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: CommunicationCreateManyLeadInputEnvelope
    set?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    disconnect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    delete?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    connect?: CommunicationWhereUniqueInput | CommunicationWhereUniqueInput[]
    update?: CommunicationUpdateWithWhereUniqueWithoutLeadInput | CommunicationUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: CommunicationUpdateManyWithWhereWithoutLeadInput | CommunicationUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
  }

  export type LeadActivityUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadActivityCreateWithoutLeadInput, LeadActivityUncheckedCreateWithoutLeadInput> | LeadActivityCreateWithoutLeadInput[] | LeadActivityUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadActivityCreateOrConnectWithoutLeadInput | LeadActivityCreateOrConnectWithoutLeadInput[]
    upsert?: LeadActivityUpsertWithWhereUniqueWithoutLeadInput | LeadActivityUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadActivityCreateManyLeadInputEnvelope
    set?: LeadActivityWhereUniqueInput | LeadActivityWhereUniqueInput[]
    disconnect?: LeadActivityWhereUniqueInput | LeadActivityWhereUniqueInput[]
    delete?: LeadActivityWhereUniqueInput | LeadActivityWhereUniqueInput[]
    connect?: LeadActivityWhereUniqueInput | LeadActivityWhereUniqueInput[]
    update?: LeadActivityUpdateWithWhereUniqueWithoutLeadInput | LeadActivityUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadActivityUpdateManyWithWhereWithoutLeadInput | LeadActivityUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadActivityScalarWhereInput | LeadActivityScalarWhereInput[]
  }

  export type LeadCreateNestedOneWithoutCommunicationsInput = {
    create?: XOR<LeadCreateWithoutCommunicationsInput, LeadUncheckedCreateWithoutCommunicationsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutCommunicationsInput
    connect?: LeadWhereUniqueInput
  }

  export type EnumCommunicationTypeFieldUpdateOperationsInput = {
    set?: $Enums.CommunicationType
  }

  export type EnumCommunicationDirectionFieldUpdateOperationsInput = {
    set?: $Enums.CommunicationDirection
  }

  export type EnumCommunicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.CommunicationStatus
  }

  export type LeadUpdateOneRequiredWithoutCommunicationsNestedInput = {
    create?: XOR<LeadCreateWithoutCommunicationsInput, LeadUncheckedCreateWithoutCommunicationsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutCommunicationsInput
    upsert?: LeadUpsertWithoutCommunicationsInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutCommunicationsInput, LeadUpdateWithoutCommunicationsInput>, LeadUncheckedUpdateWithoutCommunicationsInput>
  }

  export type LeadCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<LeadCreateWithoutActivitiesInput, LeadUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutActivitiesInput
    connect?: LeadWhereUniqueInput
  }

  export type EnumLeadActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.LeadActivityType
  }

  export type LeadUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<LeadCreateWithoutActivitiesInput, LeadUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutActivitiesInput
    upsert?: LeadUpsertWithoutActivitiesInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutActivitiesInput, LeadUpdateWithoutActivitiesInput>, LeadUncheckedUpdateWithoutActivitiesInput>
  }

  export type MaklerCreateNestedOneWithoutLandingPagesInput = {
    create?: XOR<MaklerCreateWithoutLandingPagesInput, MaklerUncheckedCreateWithoutLandingPagesInput>
    connectOrCreate?: MaklerCreateOrConnectWithoutLandingPagesInput
    connect?: MaklerWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutLandingPagesInput = {
    create?: XOR<TenantCreateWithoutLandingPagesInput, TenantUncheckedCreateWithoutLandingPagesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLandingPagesInput
    connect?: TenantWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutLandingPagesInput = {
    create?: XOR<CampaignCreateWithoutLandingPagesInput, CampaignUncheckedCreateWithoutLandingPagesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutLandingPagesInput
    connect?: CampaignWhereUniqueInput
  }

  export type EnumLandingPageTemplateFieldUpdateOperationsInput = {
    set?: $Enums.LandingPageTemplate
  }

  export type EnumLandingPageStatusFieldUpdateOperationsInput = {
    set?: $Enums.LandingPageStatus
  }

  export type MaklerUpdateOneRequiredWithoutLandingPagesNestedInput = {
    create?: XOR<MaklerCreateWithoutLandingPagesInput, MaklerUncheckedCreateWithoutLandingPagesInput>
    connectOrCreate?: MaklerCreateOrConnectWithoutLandingPagesInput
    upsert?: MaklerUpsertWithoutLandingPagesInput
    connect?: MaklerWhereUniqueInput
    update?: XOR<XOR<MaklerUpdateToOneWithWhereWithoutLandingPagesInput, MaklerUpdateWithoutLandingPagesInput>, MaklerUncheckedUpdateWithoutLandingPagesInput>
  }

  export type TenantUpdateOneRequiredWithoutLandingPagesNestedInput = {
    create?: XOR<TenantCreateWithoutLandingPagesInput, TenantUncheckedCreateWithoutLandingPagesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLandingPagesInput
    upsert?: TenantUpsertWithoutLandingPagesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutLandingPagesInput, TenantUpdateWithoutLandingPagesInput>, TenantUncheckedUpdateWithoutLandingPagesInput>
  }

  export type CampaignUpdateOneWithoutLandingPagesNestedInput = {
    create?: XOR<CampaignCreateWithoutLandingPagesInput, CampaignUncheckedCreateWithoutLandingPagesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutLandingPagesInput
    upsert?: CampaignUpsertWithoutLandingPagesInput
    disconnect?: CampaignWhereInput | boolean
    delete?: CampaignWhereInput | boolean
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutLandingPagesInput, CampaignUpdateWithoutLandingPagesInput>, CampaignUncheckedUpdateWithoutLandingPagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTenantPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantPlan | EnumTenantPlanFieldRefInput<$PrismaModel>
    in?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantPlanFilter<$PrismaModel> | $Enums.TenantPlan
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTenantPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantPlan | EnumTenantPlanFieldRefInput<$PrismaModel>
    in?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantPlan[] | ListEnumTenantPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantPlanWithAggregatesFilter<$PrismaModel> | $Enums.TenantPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantPlanFilter<$PrismaModel>
    _max?: NestedEnumTenantPlanFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumCommunicationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationType | EnumCommunicationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationTypeFilter<$PrismaModel> | $Enums.CommunicationType
  }

  export type NestedEnumCommunicationDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationDirection | EnumCommunicationDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationDirection[] | ListEnumCommunicationDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationDirection[] | ListEnumCommunicationDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationDirectionFilter<$PrismaModel> | $Enums.CommunicationDirection
  }

  export type NestedEnumCommunicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationStatus | EnumCommunicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationStatus[] | ListEnumCommunicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationStatus[] | ListEnumCommunicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationStatusFilter<$PrismaModel> | $Enums.CommunicationStatus
  }

  export type NestedEnumCommunicationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationType | EnumCommunicationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationType[] | ListEnumCommunicationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationTypeWithAggregatesFilter<$PrismaModel> | $Enums.CommunicationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunicationTypeFilter<$PrismaModel>
    _max?: NestedEnumCommunicationTypeFilter<$PrismaModel>
  }

  export type NestedEnumCommunicationDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationDirection | EnumCommunicationDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationDirection[] | ListEnumCommunicationDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationDirection[] | ListEnumCommunicationDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationDirectionWithAggregatesFilter<$PrismaModel> | $Enums.CommunicationDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunicationDirectionFilter<$PrismaModel>
    _max?: NestedEnumCommunicationDirectionFilter<$PrismaModel>
  }

  export type NestedEnumCommunicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationStatus | EnumCommunicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationStatus[] | ListEnumCommunicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationStatus[] | ListEnumCommunicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommunicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunicationStatusFilter<$PrismaModel>
    _max?: NestedEnumCommunicationStatusFilter<$PrismaModel>
  }

  export type NestedEnumLeadActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadActivityType | EnumLeadActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeadActivityType[] | ListEnumLeadActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadActivityType[] | ListEnumLeadActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadActivityTypeFilter<$PrismaModel> | $Enums.LeadActivityType
  }

  export type NestedEnumLeadActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadActivityType | EnumLeadActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeadActivityType[] | ListEnumLeadActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadActivityType[] | ListEnumLeadActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeadActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumLeadActivityTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumLandingPageTemplateFilter<$PrismaModel = never> = {
    equals?: $Enums.LandingPageTemplate | EnumLandingPageTemplateFieldRefInput<$PrismaModel>
    in?: $Enums.LandingPageTemplate[] | ListEnumLandingPageTemplateFieldRefInput<$PrismaModel>
    notIn?: $Enums.LandingPageTemplate[] | ListEnumLandingPageTemplateFieldRefInput<$PrismaModel>
    not?: NestedEnumLandingPageTemplateFilter<$PrismaModel> | $Enums.LandingPageTemplate
  }

  export type NestedEnumLandingPageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LandingPageStatus | EnumLandingPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LandingPageStatus[] | ListEnumLandingPageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LandingPageStatus[] | ListEnumLandingPageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLandingPageStatusFilter<$PrismaModel> | $Enums.LandingPageStatus
  }

  export type NestedEnumLandingPageTemplateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LandingPageTemplate | EnumLandingPageTemplateFieldRefInput<$PrismaModel>
    in?: $Enums.LandingPageTemplate[] | ListEnumLandingPageTemplateFieldRefInput<$PrismaModel>
    notIn?: $Enums.LandingPageTemplate[] | ListEnumLandingPageTemplateFieldRefInput<$PrismaModel>
    not?: NestedEnumLandingPageTemplateWithAggregatesFilter<$PrismaModel> | $Enums.LandingPageTemplate
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLandingPageTemplateFilter<$PrismaModel>
    _max?: NestedEnumLandingPageTemplateFilter<$PrismaModel>
  }

  export type NestedEnumLandingPageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LandingPageStatus | EnumLandingPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LandingPageStatus[] | ListEnumLandingPageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LandingPageStatus[] | ListEnumLandingPageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLandingPageStatusWithAggregatesFilter<$PrismaModel> | $Enums.LandingPageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLandingPageStatusFilter<$PrismaModel>
    _max?: NestedEnumLandingPageStatusFilter<$PrismaModel>
  }

  export type MaklerCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
    tenant: TenantCreateNestedOneWithoutMaklersInput
    campaigns?: CampaignCreateNestedManyWithoutMaklerInput
    leads?: LeadCreateNestedManyWithoutMaklerInput
    landingPages?: LandingPageCreateNestedManyWithoutMaklerInput
  }

  export type MaklerUncheckedCreateWithoutUserInput = {
    id?: string
    tenantId: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutMaklerInput
    leads?: LeadUncheckedCreateNestedManyWithoutMaklerInput
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutMaklerInput
  }

  export type MaklerCreateOrConnectWithoutUserInput = {
    where: MaklerWhereUniqueInput
    create: XOR<MaklerCreateWithoutUserInput, MaklerUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TenantCreateWithoutUsersInput = {
    id?: string
    name: string
    subdomain: string
    domain?: string | null
    isActive?: boolean
    plan?: $Enums.TenantPlan
    maxMaklers?: number
    maxLeads?: number
    dataRegion?: string
    gdprContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maklers?: MaklerCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    landingPages?: LandingPageCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    subdomain: string
    domain?: string | null
    isActive?: boolean
    plan?: $Enums.TenantPlan
    maxMaklers?: number
    maxLeads?: number
    dataRegion?: string
    gdprContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maklers?: MaklerUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type MaklerUpsertWithoutUserInput = {
    update: XOR<MaklerUpdateWithoutUserInput, MaklerUncheckedUpdateWithoutUserInput>
    create: XOR<MaklerCreateWithoutUserInput, MaklerUncheckedCreateWithoutUserInput>
    where?: MaklerWhereInput
  }

  export type MaklerUpdateToOneWithWhereWithoutUserInput = {
    where?: MaklerWhereInput
    data: XOR<MaklerUpdateWithoutUserInput, MaklerUncheckedUpdateWithoutUserInput>
  }

  export type MaklerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutMaklersNestedInput
    campaigns?: CampaignUpdateManyWithoutMaklerNestedInput
    leads?: LeadUpdateManyWithoutMaklerNestedInput
    landingPages?: LandingPageUpdateManyWithoutMaklerNestedInput
  }

  export type MaklerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    campaigns?: CampaignUncheckedUpdateManyWithoutMaklerNestedInput
    leads?: LeadUncheckedUpdateManyWithoutMaklerNestedInput
    landingPages?: LandingPageUncheckedUpdateManyWithoutMaklerNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maklers?: MaklerUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    landingPages?: LandingPageUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maklers?: MaklerUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    landingPages?: LandingPageUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserCreateWithoutTenantInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    makler?: MaklerCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    makler?: MaklerUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type MaklerCreateWithoutTenantInput = {
    id?: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
    user: UserCreateNestedOneWithoutMaklerInput
    campaigns?: CampaignCreateNestedManyWithoutMaklerInput
    leads?: LeadCreateNestedManyWithoutMaklerInput
    landingPages?: LandingPageCreateNestedManyWithoutMaklerInput
  }

  export type MaklerUncheckedCreateWithoutTenantInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutMaklerInput
    leads?: LeadUncheckedCreateNestedManyWithoutMaklerInput
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutMaklerInput
  }

  export type MaklerCreateOrConnectWithoutTenantInput = {
    where: MaklerWhereUniqueInput
    create: XOR<MaklerCreateWithoutTenantInput, MaklerUncheckedCreateWithoutTenantInput>
  }

  export type MaklerCreateManyTenantInputEnvelope = {
    data: MaklerCreateManyTenantInput | MaklerCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    budget: number
    spent?: number
    platform: $Enums.Platform
    targeting: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    impressions?: number
    clicks?: number
    leads?: number
    conversions?: number
    ctr?: number
    cpl?: number
    conversionRate?: number
    makler: MaklerCreateNestedOneWithoutCampaignsInput
    leadSources?: LeadCreateNestedManyWithoutCampaignInput
    landingPages?: LandingPageCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutTenantInput = {
    id?: string
    maklerId: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    budget: number
    spent?: number
    platform: $Enums.Platform
    targeting: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    impressions?: number
    clicks?: number
    leads?: number
    conversions?: number
    ctr?: number
    cpl?: number
    conversionRate?: number
    leadSources?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutTenantInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput>
  }

  export type CampaignCreateManyTenantInputEnvelope = {
    data: CampaignCreateManyTenantInput | CampaignCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type LeadCreateWithoutTenantInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
    makler: MaklerCreateNestedOneWithoutLeadsInput
    campaign?: CampaignCreateNestedOneWithoutLeadSourcesInput
    communications?: CommunicationCreateNestedManyWithoutLeadInput
    activities?: LeadActivityCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutTenantInput = {
    id?: string
    maklerId: string
    campaignId?: string | null
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
    communications?: CommunicationUncheckedCreateNestedManyWithoutLeadInput
    activities?: LeadActivityUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutTenantInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput>
  }

  export type LeadCreateManyTenantInputEnvelope = {
    data: LeadCreateManyTenantInput | LeadCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type LandingPageCreateWithoutTenantInput = {
    id?: string
    name: string
    slug: string
    template: $Enums.LandingPageTemplate
    status?: $Enums.LandingPageStatus
    headline: string
    subheadline?: string | null
    content: JsonNullValueInput | InputJsonValue
    formFields: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    views?: number
    submissions?: number
    conversionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    makler: MaklerCreateNestedOneWithoutLandingPagesInput
    campaign?: CampaignCreateNestedOneWithoutLandingPagesInput
  }

  export type LandingPageUncheckedCreateWithoutTenantInput = {
    id?: string
    maklerId: string
    campaignId?: string | null
    name: string
    slug: string
    template: $Enums.LandingPageTemplate
    status?: $Enums.LandingPageStatus
    headline: string
    subheadline?: string | null
    content: JsonNullValueInput | InputJsonValue
    formFields: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    views?: number
    submissions?: number
    conversionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type LandingPageCreateOrConnectWithoutTenantInput = {
    where: LandingPageWhereUniqueInput
    create: XOR<LandingPageCreateWithoutTenantInput, LandingPageUncheckedCreateWithoutTenantInput>
  }

  export type LandingPageCreateManyTenantInputEnvelope = {
    data: LandingPageCreateManyTenantInput | LandingPageCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    tenantId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type MaklerUpsertWithWhereUniqueWithoutTenantInput = {
    where: MaklerWhereUniqueInput
    update: XOR<MaklerUpdateWithoutTenantInput, MaklerUncheckedUpdateWithoutTenantInput>
    create: XOR<MaklerCreateWithoutTenantInput, MaklerUncheckedCreateWithoutTenantInput>
  }

  export type MaklerUpdateWithWhereUniqueWithoutTenantInput = {
    where: MaklerWhereUniqueInput
    data: XOR<MaklerUpdateWithoutTenantInput, MaklerUncheckedUpdateWithoutTenantInput>
  }

  export type MaklerUpdateManyWithWhereWithoutTenantInput = {
    where: MaklerScalarWhereInput
    data: XOR<MaklerUpdateManyMutationInput, MaklerUncheckedUpdateManyWithoutTenantInput>
  }

  export type MaklerScalarWhereInput = {
    AND?: MaklerScalarWhereInput | MaklerScalarWhereInput[]
    OR?: MaklerScalarWhereInput[]
    NOT?: MaklerScalarWhereInput | MaklerScalarWhereInput[]
    id?: StringFilter<"Makler"> | string
    userId?: StringFilter<"Makler"> | string
    tenantId?: StringFilter<"Makler"> | string
    firstName?: StringFilter<"Makler"> | string
    lastName?: StringFilter<"Makler"> | string
    company?: StringFilter<"Makler"> | string
    phone?: StringNullableFilter<"Makler"> | string | null
    website?: StringNullableFilter<"Makler"> | string | null
    address?: StringNullableFilter<"Makler"> | string | null
    city?: StringNullableFilter<"Makler"> | string | null
    postalCode?: StringNullableFilter<"Makler"> | string | null
    isActive?: BoolFilter<"Makler"> | boolean
    createdAt?: DateTimeFilter<"Makler"> | Date | string
    updatedAt?: DateTimeFilter<"Makler"> | Date | string
    logo?: StringNullableFilter<"Makler"> | string | null
    primaryColor?: StringFilter<"Makler"> | string
    secondaryColor?: StringFilter<"Makler"> | string
  }

  export type CampaignUpsertWithWhereUniqueWithoutTenantInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutTenantInput, CampaignUncheckedUpdateWithoutTenantInput>
    create: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutTenantInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutTenantInput, CampaignUncheckedUpdateWithoutTenantInput>
  }

  export type CampaignUpdateManyWithWhereWithoutTenantInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutTenantInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    maklerId?: StringFilter<"Campaign"> | string
    tenantId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    budget?: FloatFilter<"Campaign"> | number
    spent?: FloatFilter<"Campaign"> | number
    platform?: EnumPlatformFilter<"Campaign"> | $Enums.Platform
    targeting?: JsonFilter<"Campaign">
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    impressions?: IntFilter<"Campaign"> | number
    clicks?: IntFilter<"Campaign"> | number
    leads?: IntFilter<"Campaign"> | number
    conversions?: IntFilter<"Campaign"> | number
    ctr?: FloatFilter<"Campaign"> | number
    cpl?: FloatFilter<"Campaign"> | number
    conversionRate?: FloatFilter<"Campaign"> | number
  }

  export type LeadUpsertWithWhereUniqueWithoutTenantInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutTenantInput, LeadUncheckedUpdateWithoutTenantInput>
    create: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutTenantInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutTenantInput, LeadUncheckedUpdateWithoutTenantInput>
  }

  export type LeadUpdateManyWithWhereWithoutTenantInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutTenantInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: StringFilter<"Lead"> | string
    maklerId?: StringFilter<"Lead"> | string
    tenantId?: StringFilter<"Lead"> | string
    campaignId?: StringNullableFilter<"Lead"> | string | null
    firstName?: StringFilter<"Lead"> | string
    lastName?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    phone?: StringNullableFilter<"Lead"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Lead"> | Date | string | null
    address?: StringNullableFilter<"Lead"> | string | null
    city?: StringNullableFilter<"Lead"> | string | null
    postalCode?: StringNullableFilter<"Lead"> | string | null
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    score?: IntFilter<"Lead"> | number
    source?: StringNullableFilter<"Lead"> | string | null
    interest?: StringNullableFilter<"Lead"> | string | null
    budget?: FloatNullableFilter<"Lead"> | number | null
    notes?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    lastContact?: DateTimeNullableFilter<"Lead"> | Date | string | null
    nextFollowUp?: DateTimeNullableFilter<"Lead"> | Date | string | null
    consentGiven?: BoolFilter<"Lead"> | boolean
    consentDate?: DateTimeNullableFilter<"Lead"> | Date | string | null
    marketingConsent?: BoolFilter<"Lead"> | boolean
  }

  export type LandingPageUpsertWithWhereUniqueWithoutTenantInput = {
    where: LandingPageWhereUniqueInput
    update: XOR<LandingPageUpdateWithoutTenantInput, LandingPageUncheckedUpdateWithoutTenantInput>
    create: XOR<LandingPageCreateWithoutTenantInput, LandingPageUncheckedCreateWithoutTenantInput>
  }

  export type LandingPageUpdateWithWhereUniqueWithoutTenantInput = {
    where: LandingPageWhereUniqueInput
    data: XOR<LandingPageUpdateWithoutTenantInput, LandingPageUncheckedUpdateWithoutTenantInput>
  }

  export type LandingPageUpdateManyWithWhereWithoutTenantInput = {
    where: LandingPageScalarWhereInput
    data: XOR<LandingPageUpdateManyMutationInput, LandingPageUncheckedUpdateManyWithoutTenantInput>
  }

  export type LandingPageScalarWhereInput = {
    AND?: LandingPageScalarWhereInput | LandingPageScalarWhereInput[]
    OR?: LandingPageScalarWhereInput[]
    NOT?: LandingPageScalarWhereInput | LandingPageScalarWhereInput[]
    id?: StringFilter<"LandingPage"> | string
    maklerId?: StringFilter<"LandingPage"> | string
    tenantId?: StringFilter<"LandingPage"> | string
    campaignId?: StringNullableFilter<"LandingPage"> | string | null
    name?: StringFilter<"LandingPage"> | string
    slug?: StringFilter<"LandingPage"> | string
    template?: EnumLandingPageTemplateFilter<"LandingPage"> | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFilter<"LandingPage"> | $Enums.LandingPageStatus
    headline?: StringFilter<"LandingPage"> | string
    subheadline?: StringNullableFilter<"LandingPage"> | string | null
    content?: JsonFilter<"LandingPage">
    formFields?: JsonFilter<"LandingPage">
    metaTitle?: StringNullableFilter<"LandingPage"> | string | null
    metaDescription?: StringNullableFilter<"LandingPage"> | string | null
    views?: IntFilter<"LandingPage"> | number
    submissions?: IntFilter<"LandingPage"> | number
    conversionRate?: FloatFilter<"LandingPage"> | number
    createdAt?: DateTimeFilter<"LandingPage"> | Date | string
    updatedAt?: DateTimeFilter<"LandingPage"> | Date | string
    publishedAt?: DateTimeNullableFilter<"LandingPage"> | Date | string | null
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    makler?: MaklerCreateNestedOneWithoutUserInput
    tenant?: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    tenantId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    makler?: MaklerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makler?: MaklerUpdateOneWithoutUserNestedInput
    tenant?: TenantUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makler?: MaklerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutMaklerInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    tenant?: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutMaklerInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    tenantId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMaklerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMaklerInput, UserUncheckedCreateWithoutMaklerInput>
  }

  export type TenantCreateWithoutMaklersInput = {
    id?: string
    name: string
    subdomain: string
    domain?: string | null
    isActive?: boolean
    plan?: $Enums.TenantPlan
    maxMaklers?: number
    maxLeads?: number
    dataRegion?: string
    gdprContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    landingPages?: LandingPageCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutMaklersInput = {
    id?: string
    name: string
    subdomain: string
    domain?: string | null
    isActive?: boolean
    plan?: $Enums.TenantPlan
    maxMaklers?: number
    maxLeads?: number
    dataRegion?: string
    gdprContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutMaklersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutMaklersInput, TenantUncheckedCreateWithoutMaklersInput>
  }

  export type CampaignCreateWithoutMaklerInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    budget: number
    spent?: number
    platform: $Enums.Platform
    targeting: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    impressions?: number
    clicks?: number
    leads?: number
    conversions?: number
    ctr?: number
    cpl?: number
    conversionRate?: number
    tenant: TenantCreateNestedOneWithoutCampaignsInput
    leadSources?: LeadCreateNestedManyWithoutCampaignInput
    landingPages?: LandingPageCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutMaklerInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    budget: number
    spent?: number
    platform: $Enums.Platform
    targeting: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    impressions?: number
    clicks?: number
    leads?: number
    conversions?: number
    ctr?: number
    cpl?: number
    conversionRate?: number
    leadSources?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutMaklerInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutMaklerInput, CampaignUncheckedCreateWithoutMaklerInput>
  }

  export type CampaignCreateManyMaklerInputEnvelope = {
    data: CampaignCreateManyMaklerInput | CampaignCreateManyMaklerInput[]
    skipDuplicates?: boolean
  }

  export type LeadCreateWithoutMaklerInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
    tenant: TenantCreateNestedOneWithoutLeadsInput
    campaign?: CampaignCreateNestedOneWithoutLeadSourcesInput
    communications?: CommunicationCreateNestedManyWithoutLeadInput
    activities?: LeadActivityCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutMaklerInput = {
    id?: string
    tenantId: string
    campaignId?: string | null
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
    communications?: CommunicationUncheckedCreateNestedManyWithoutLeadInput
    activities?: LeadActivityUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutMaklerInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutMaklerInput, LeadUncheckedCreateWithoutMaklerInput>
  }

  export type LeadCreateManyMaklerInputEnvelope = {
    data: LeadCreateManyMaklerInput | LeadCreateManyMaklerInput[]
    skipDuplicates?: boolean
  }

  export type LandingPageCreateWithoutMaklerInput = {
    id?: string
    name: string
    slug: string
    template: $Enums.LandingPageTemplate
    status?: $Enums.LandingPageStatus
    headline: string
    subheadline?: string | null
    content: JsonNullValueInput | InputJsonValue
    formFields: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    views?: number
    submissions?: number
    conversionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutLandingPagesInput
    campaign?: CampaignCreateNestedOneWithoutLandingPagesInput
  }

  export type LandingPageUncheckedCreateWithoutMaklerInput = {
    id?: string
    tenantId: string
    campaignId?: string | null
    name: string
    slug: string
    template: $Enums.LandingPageTemplate
    status?: $Enums.LandingPageStatus
    headline: string
    subheadline?: string | null
    content: JsonNullValueInput | InputJsonValue
    formFields: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    views?: number
    submissions?: number
    conversionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type LandingPageCreateOrConnectWithoutMaklerInput = {
    where: LandingPageWhereUniqueInput
    create: XOR<LandingPageCreateWithoutMaklerInput, LandingPageUncheckedCreateWithoutMaklerInput>
  }

  export type LandingPageCreateManyMaklerInputEnvelope = {
    data: LandingPageCreateManyMaklerInput | LandingPageCreateManyMaklerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMaklerInput = {
    update: XOR<UserUpdateWithoutMaklerInput, UserUncheckedUpdateWithoutMaklerInput>
    create: XOR<UserCreateWithoutMaklerInput, UserUncheckedCreateWithoutMaklerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMaklerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMaklerInput, UserUncheckedUpdateWithoutMaklerInput>
  }

  export type UserUpdateWithoutMaklerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tenant?: TenantUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutMaklerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TenantUpsertWithoutMaklersInput = {
    update: XOR<TenantUpdateWithoutMaklersInput, TenantUncheckedUpdateWithoutMaklersInput>
    create: XOR<TenantCreateWithoutMaklersInput, TenantUncheckedCreateWithoutMaklersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutMaklersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutMaklersInput, TenantUncheckedUpdateWithoutMaklersInput>
  }

  export type TenantUpdateWithoutMaklersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    landingPages?: LandingPageUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutMaklersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    landingPages?: LandingPageUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CampaignUpsertWithWhereUniqueWithoutMaklerInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutMaklerInput, CampaignUncheckedUpdateWithoutMaklerInput>
    create: XOR<CampaignCreateWithoutMaklerInput, CampaignUncheckedCreateWithoutMaklerInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutMaklerInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutMaklerInput, CampaignUncheckedUpdateWithoutMaklerInput>
  }

  export type CampaignUpdateManyWithWhereWithoutMaklerInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutMaklerInput>
  }

  export type LeadUpsertWithWhereUniqueWithoutMaklerInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutMaklerInput, LeadUncheckedUpdateWithoutMaklerInput>
    create: XOR<LeadCreateWithoutMaklerInput, LeadUncheckedCreateWithoutMaklerInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutMaklerInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutMaklerInput, LeadUncheckedUpdateWithoutMaklerInput>
  }

  export type LeadUpdateManyWithWhereWithoutMaklerInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutMaklerInput>
  }

  export type LandingPageUpsertWithWhereUniqueWithoutMaklerInput = {
    where: LandingPageWhereUniqueInput
    update: XOR<LandingPageUpdateWithoutMaklerInput, LandingPageUncheckedUpdateWithoutMaklerInput>
    create: XOR<LandingPageCreateWithoutMaklerInput, LandingPageUncheckedCreateWithoutMaklerInput>
  }

  export type LandingPageUpdateWithWhereUniqueWithoutMaklerInput = {
    where: LandingPageWhereUniqueInput
    data: XOR<LandingPageUpdateWithoutMaklerInput, LandingPageUncheckedUpdateWithoutMaklerInput>
  }

  export type LandingPageUpdateManyWithWhereWithoutMaklerInput = {
    where: LandingPageScalarWhereInput
    data: XOR<LandingPageUpdateManyMutationInput, LandingPageUncheckedUpdateManyWithoutMaklerInput>
  }

  export type MaklerCreateWithoutCampaignsInput = {
    id?: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
    user: UserCreateNestedOneWithoutMaklerInput
    tenant: TenantCreateNestedOneWithoutMaklersInput
    leads?: LeadCreateNestedManyWithoutMaklerInput
    landingPages?: LandingPageCreateNestedManyWithoutMaklerInput
  }

  export type MaklerUncheckedCreateWithoutCampaignsInput = {
    id?: string
    userId: string
    tenantId: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
    leads?: LeadUncheckedCreateNestedManyWithoutMaklerInput
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutMaklerInput
  }

  export type MaklerCreateOrConnectWithoutCampaignsInput = {
    where: MaklerWhereUniqueInput
    create: XOR<MaklerCreateWithoutCampaignsInput, MaklerUncheckedCreateWithoutCampaignsInput>
  }

  export type TenantCreateWithoutCampaignsInput = {
    id?: string
    name: string
    subdomain: string
    domain?: string | null
    isActive?: boolean
    plan?: $Enums.TenantPlan
    maxMaklers?: number
    maxLeads?: number
    dataRegion?: string
    gdprContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    maklers?: MaklerCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    landingPages?: LandingPageCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    subdomain: string
    domain?: string | null
    isActive?: boolean
    plan?: $Enums.TenantPlan
    maxMaklers?: number
    maxLeads?: number
    dataRegion?: string
    gdprContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    maklers?: MaklerUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutCampaignsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutCampaignsInput, TenantUncheckedCreateWithoutCampaignsInput>
  }

  export type LeadCreateWithoutCampaignInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
    makler: MaklerCreateNestedOneWithoutLeadsInput
    tenant: TenantCreateNestedOneWithoutLeadsInput
    communications?: CommunicationCreateNestedManyWithoutLeadInput
    activities?: LeadActivityCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutCampaignInput = {
    id?: string
    maklerId: string
    tenantId: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
    communications?: CommunicationUncheckedCreateNestedManyWithoutLeadInput
    activities?: LeadActivityUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutCampaignInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput>
  }

  export type LeadCreateManyCampaignInputEnvelope = {
    data: LeadCreateManyCampaignInput | LeadCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type LandingPageCreateWithoutCampaignInput = {
    id?: string
    name: string
    slug: string
    template: $Enums.LandingPageTemplate
    status?: $Enums.LandingPageStatus
    headline: string
    subheadline?: string | null
    content: JsonNullValueInput | InputJsonValue
    formFields: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    views?: number
    submissions?: number
    conversionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    makler: MaklerCreateNestedOneWithoutLandingPagesInput
    tenant: TenantCreateNestedOneWithoutLandingPagesInput
  }

  export type LandingPageUncheckedCreateWithoutCampaignInput = {
    id?: string
    maklerId: string
    tenantId: string
    name: string
    slug: string
    template: $Enums.LandingPageTemplate
    status?: $Enums.LandingPageStatus
    headline: string
    subheadline?: string | null
    content: JsonNullValueInput | InputJsonValue
    formFields: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    views?: number
    submissions?: number
    conversionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type LandingPageCreateOrConnectWithoutCampaignInput = {
    where: LandingPageWhereUniqueInput
    create: XOR<LandingPageCreateWithoutCampaignInput, LandingPageUncheckedCreateWithoutCampaignInput>
  }

  export type LandingPageCreateManyCampaignInputEnvelope = {
    data: LandingPageCreateManyCampaignInput | LandingPageCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type MaklerUpsertWithoutCampaignsInput = {
    update: XOR<MaklerUpdateWithoutCampaignsInput, MaklerUncheckedUpdateWithoutCampaignsInput>
    create: XOR<MaklerCreateWithoutCampaignsInput, MaklerUncheckedCreateWithoutCampaignsInput>
    where?: MaklerWhereInput
  }

  export type MaklerUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: MaklerWhereInput
    data: XOR<MaklerUpdateWithoutCampaignsInput, MaklerUncheckedUpdateWithoutCampaignsInput>
  }

  export type MaklerUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMaklerNestedInput
    tenant?: TenantUpdateOneRequiredWithoutMaklersNestedInput
    leads?: LeadUpdateManyWithoutMaklerNestedInput
    landingPages?: LandingPageUpdateManyWithoutMaklerNestedInput
  }

  export type MaklerUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    leads?: LeadUncheckedUpdateManyWithoutMaklerNestedInput
    landingPages?: LandingPageUncheckedUpdateManyWithoutMaklerNestedInput
  }

  export type TenantUpsertWithoutCampaignsInput = {
    update: XOR<TenantUpdateWithoutCampaignsInput, TenantUncheckedUpdateWithoutCampaignsInput>
    create: XOR<TenantCreateWithoutCampaignsInput, TenantUncheckedCreateWithoutCampaignsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutCampaignsInput, TenantUncheckedUpdateWithoutCampaignsInput>
  }

  export type TenantUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    maklers?: MaklerUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    landingPages?: LandingPageUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    maklers?: MaklerUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    landingPages?: LandingPageUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type LeadUpsertWithWhereUniqueWithoutCampaignInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutCampaignInput, LeadUncheckedUpdateWithoutCampaignInput>
    create: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutCampaignInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutCampaignInput, LeadUncheckedUpdateWithoutCampaignInput>
  }

  export type LeadUpdateManyWithWhereWithoutCampaignInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutCampaignInput>
  }

  export type LandingPageUpsertWithWhereUniqueWithoutCampaignInput = {
    where: LandingPageWhereUniqueInput
    update: XOR<LandingPageUpdateWithoutCampaignInput, LandingPageUncheckedUpdateWithoutCampaignInput>
    create: XOR<LandingPageCreateWithoutCampaignInput, LandingPageUncheckedCreateWithoutCampaignInput>
  }

  export type LandingPageUpdateWithWhereUniqueWithoutCampaignInput = {
    where: LandingPageWhereUniqueInput
    data: XOR<LandingPageUpdateWithoutCampaignInput, LandingPageUncheckedUpdateWithoutCampaignInput>
  }

  export type LandingPageUpdateManyWithWhereWithoutCampaignInput = {
    where: LandingPageScalarWhereInput
    data: XOR<LandingPageUpdateManyMutationInput, LandingPageUncheckedUpdateManyWithoutCampaignInput>
  }

  export type MaklerCreateWithoutLeadsInput = {
    id?: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
    user: UserCreateNestedOneWithoutMaklerInput
    tenant: TenantCreateNestedOneWithoutMaklersInput
    campaigns?: CampaignCreateNestedManyWithoutMaklerInput
    landingPages?: LandingPageCreateNestedManyWithoutMaklerInput
  }

  export type MaklerUncheckedCreateWithoutLeadsInput = {
    id?: string
    userId: string
    tenantId: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutMaklerInput
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutMaklerInput
  }

  export type MaklerCreateOrConnectWithoutLeadsInput = {
    where: MaklerWhereUniqueInput
    create: XOR<MaklerCreateWithoutLeadsInput, MaklerUncheckedCreateWithoutLeadsInput>
  }

  export type TenantCreateWithoutLeadsInput = {
    id?: string
    name: string
    subdomain: string
    domain?: string | null
    isActive?: boolean
    plan?: $Enums.TenantPlan
    maxMaklers?: number
    maxLeads?: number
    dataRegion?: string
    gdprContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    maklers?: MaklerCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    landingPages?: LandingPageCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    subdomain: string
    domain?: string | null
    isActive?: boolean
    plan?: $Enums.TenantPlan
    maxMaklers?: number
    maxLeads?: number
    dataRegion?: string
    gdprContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    maklers?: MaklerUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutLeadsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
  }

  export type CampaignCreateWithoutLeadSourcesInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    budget: number
    spent?: number
    platform: $Enums.Platform
    targeting: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    impressions?: number
    clicks?: number
    leads?: number
    conversions?: number
    ctr?: number
    cpl?: number
    conversionRate?: number
    makler: MaklerCreateNestedOneWithoutCampaignsInput
    tenant: TenantCreateNestedOneWithoutCampaignsInput
    landingPages?: LandingPageCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutLeadSourcesInput = {
    id?: string
    maklerId: string
    tenantId: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    budget: number
    spent?: number
    platform: $Enums.Platform
    targeting: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    impressions?: number
    clicks?: number
    leads?: number
    conversions?: number
    ctr?: number
    cpl?: number
    conversionRate?: number
    landingPages?: LandingPageUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutLeadSourcesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutLeadSourcesInput, CampaignUncheckedCreateWithoutLeadSourcesInput>
  }

  export type CommunicationCreateWithoutLeadInput = {
    id?: string
    type: $Enums.CommunicationType
    direction: $Enums.CommunicationDirection
    subject?: string | null
    content: string
    status?: $Enums.CommunicationStatus
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type CommunicationUncheckedCreateWithoutLeadInput = {
    id?: string
    type: $Enums.CommunicationType
    direction: $Enums.CommunicationDirection
    subject?: string | null
    content: string
    status?: $Enums.CommunicationStatus
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type CommunicationCreateOrConnectWithoutLeadInput = {
    where: CommunicationWhereUniqueInput
    create: XOR<CommunicationCreateWithoutLeadInput, CommunicationUncheckedCreateWithoutLeadInput>
  }

  export type CommunicationCreateManyLeadInputEnvelope = {
    data: CommunicationCreateManyLeadInput | CommunicationCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type LeadActivityCreateWithoutLeadInput = {
    id?: string
    type: $Enums.LeadActivityType
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LeadActivityUncheckedCreateWithoutLeadInput = {
    id?: string
    type: $Enums.LeadActivityType
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LeadActivityCreateOrConnectWithoutLeadInput = {
    where: LeadActivityWhereUniqueInput
    create: XOR<LeadActivityCreateWithoutLeadInput, LeadActivityUncheckedCreateWithoutLeadInput>
  }

  export type LeadActivityCreateManyLeadInputEnvelope = {
    data: LeadActivityCreateManyLeadInput | LeadActivityCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type MaklerUpsertWithoutLeadsInput = {
    update: XOR<MaklerUpdateWithoutLeadsInput, MaklerUncheckedUpdateWithoutLeadsInput>
    create: XOR<MaklerCreateWithoutLeadsInput, MaklerUncheckedCreateWithoutLeadsInput>
    where?: MaklerWhereInput
  }

  export type MaklerUpdateToOneWithWhereWithoutLeadsInput = {
    where?: MaklerWhereInput
    data: XOR<MaklerUpdateWithoutLeadsInput, MaklerUncheckedUpdateWithoutLeadsInput>
  }

  export type MaklerUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMaklerNestedInput
    tenant?: TenantUpdateOneRequiredWithoutMaklersNestedInput
    campaigns?: CampaignUpdateManyWithoutMaklerNestedInput
    landingPages?: LandingPageUpdateManyWithoutMaklerNestedInput
  }

  export type MaklerUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    campaigns?: CampaignUncheckedUpdateManyWithoutMaklerNestedInput
    landingPages?: LandingPageUncheckedUpdateManyWithoutMaklerNestedInput
  }

  export type TenantUpsertWithoutLeadsInput = {
    update: XOR<TenantUpdateWithoutLeadsInput, TenantUncheckedUpdateWithoutLeadsInput>
    create: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutLeadsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutLeadsInput, TenantUncheckedUpdateWithoutLeadsInput>
  }

  export type TenantUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    maklers?: MaklerUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    landingPages?: LandingPageUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    maklers?: MaklerUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    landingPages?: LandingPageUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CampaignUpsertWithoutLeadSourcesInput = {
    update: XOR<CampaignUpdateWithoutLeadSourcesInput, CampaignUncheckedUpdateWithoutLeadSourcesInput>
    create: XOR<CampaignCreateWithoutLeadSourcesInput, CampaignUncheckedCreateWithoutLeadSourcesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutLeadSourcesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutLeadSourcesInput, CampaignUncheckedUpdateWithoutLeadSourcesInput>
  }

  export type CampaignUpdateWithoutLeadSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    makler?: MaklerUpdateOneRequiredWithoutCampaignsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutCampaignsNestedInput
    landingPages?: LandingPageUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutLeadSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    landingPages?: LandingPageUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CommunicationUpsertWithWhereUniqueWithoutLeadInput = {
    where: CommunicationWhereUniqueInput
    update: XOR<CommunicationUpdateWithoutLeadInput, CommunicationUncheckedUpdateWithoutLeadInput>
    create: XOR<CommunicationCreateWithoutLeadInput, CommunicationUncheckedCreateWithoutLeadInput>
  }

  export type CommunicationUpdateWithWhereUniqueWithoutLeadInput = {
    where: CommunicationWhereUniqueInput
    data: XOR<CommunicationUpdateWithoutLeadInput, CommunicationUncheckedUpdateWithoutLeadInput>
  }

  export type CommunicationUpdateManyWithWhereWithoutLeadInput = {
    where: CommunicationScalarWhereInput
    data: XOR<CommunicationUpdateManyMutationInput, CommunicationUncheckedUpdateManyWithoutLeadInput>
  }

  export type CommunicationScalarWhereInput = {
    AND?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
    OR?: CommunicationScalarWhereInput[]
    NOT?: CommunicationScalarWhereInput | CommunicationScalarWhereInput[]
    id?: StringFilter<"Communication"> | string
    leadId?: StringFilter<"Communication"> | string
    type?: EnumCommunicationTypeFilter<"Communication"> | $Enums.CommunicationType
    direction?: EnumCommunicationDirectionFilter<"Communication"> | $Enums.CommunicationDirection
    subject?: StringNullableFilter<"Communication"> | string | null
    content?: StringFilter<"Communication"> | string
    status?: EnumCommunicationStatusFilter<"Communication"> | $Enums.CommunicationStatus
    sentAt?: DateTimeFilter<"Communication"> | Date | string
    readAt?: DateTimeNullableFilter<"Communication"> | Date | string | null
  }

  export type LeadActivityUpsertWithWhereUniqueWithoutLeadInput = {
    where: LeadActivityWhereUniqueInput
    update: XOR<LeadActivityUpdateWithoutLeadInput, LeadActivityUncheckedUpdateWithoutLeadInput>
    create: XOR<LeadActivityCreateWithoutLeadInput, LeadActivityUncheckedCreateWithoutLeadInput>
  }

  export type LeadActivityUpdateWithWhereUniqueWithoutLeadInput = {
    where: LeadActivityWhereUniqueInput
    data: XOR<LeadActivityUpdateWithoutLeadInput, LeadActivityUncheckedUpdateWithoutLeadInput>
  }

  export type LeadActivityUpdateManyWithWhereWithoutLeadInput = {
    where: LeadActivityScalarWhereInput
    data: XOR<LeadActivityUpdateManyMutationInput, LeadActivityUncheckedUpdateManyWithoutLeadInput>
  }

  export type LeadActivityScalarWhereInput = {
    AND?: LeadActivityScalarWhereInput | LeadActivityScalarWhereInput[]
    OR?: LeadActivityScalarWhereInput[]
    NOT?: LeadActivityScalarWhereInput | LeadActivityScalarWhereInput[]
    id?: StringFilter<"LeadActivity"> | string
    leadId?: StringFilter<"LeadActivity"> | string
    type?: EnumLeadActivityTypeFilter<"LeadActivity"> | $Enums.LeadActivityType
    description?: StringFilter<"LeadActivity"> | string
    metadata?: JsonNullableFilter<"LeadActivity">
    createdAt?: DateTimeFilter<"LeadActivity"> | Date | string
  }

  export type LeadCreateWithoutCommunicationsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
    makler: MaklerCreateNestedOneWithoutLeadsInput
    tenant: TenantCreateNestedOneWithoutLeadsInput
    campaign?: CampaignCreateNestedOneWithoutLeadSourcesInput
    activities?: LeadActivityCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutCommunicationsInput = {
    id?: string
    maklerId: string
    tenantId: string
    campaignId?: string | null
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
    activities?: LeadActivityUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutCommunicationsInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutCommunicationsInput, LeadUncheckedCreateWithoutCommunicationsInput>
  }

  export type LeadUpsertWithoutCommunicationsInput = {
    update: XOR<LeadUpdateWithoutCommunicationsInput, LeadUncheckedUpdateWithoutCommunicationsInput>
    create: XOR<LeadCreateWithoutCommunicationsInput, LeadUncheckedCreateWithoutCommunicationsInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutCommunicationsInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutCommunicationsInput, LeadUncheckedUpdateWithoutCommunicationsInput>
  }

  export type LeadUpdateWithoutCommunicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    makler?: MaklerUpdateOneRequiredWithoutLeadsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneWithoutLeadSourcesNestedInput
    activities?: LeadActivityUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutCommunicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    activities?: LeadActivityUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateWithoutActivitiesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
    makler: MaklerCreateNestedOneWithoutLeadsInput
    tenant: TenantCreateNestedOneWithoutLeadsInput
    campaign?: CampaignCreateNestedOneWithoutLeadSourcesInput
    communications?: CommunicationCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutActivitiesInput = {
    id?: string
    maklerId: string
    tenantId: string
    campaignId?: string | null
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
    communications?: CommunicationUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutActivitiesInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutActivitiesInput, LeadUncheckedCreateWithoutActivitiesInput>
  }

  export type LeadUpsertWithoutActivitiesInput = {
    update: XOR<LeadUpdateWithoutActivitiesInput, LeadUncheckedUpdateWithoutActivitiesInput>
    create: XOR<LeadCreateWithoutActivitiesInput, LeadUncheckedCreateWithoutActivitiesInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutActivitiesInput, LeadUncheckedUpdateWithoutActivitiesInput>
  }

  export type LeadUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    makler?: MaklerUpdateOneRequiredWithoutLeadsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneWithoutLeadSourcesNestedInput
    communications?: CommunicationUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    communications?: CommunicationUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type MaklerCreateWithoutLandingPagesInput = {
    id?: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
    user: UserCreateNestedOneWithoutMaklerInput
    tenant: TenantCreateNestedOneWithoutMaklersInput
    campaigns?: CampaignCreateNestedManyWithoutMaklerInput
    leads?: LeadCreateNestedManyWithoutMaklerInput
  }

  export type MaklerUncheckedCreateWithoutLandingPagesInput = {
    id?: string
    userId: string
    tenantId: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutMaklerInput
    leads?: LeadUncheckedCreateNestedManyWithoutMaklerInput
  }

  export type MaklerCreateOrConnectWithoutLandingPagesInput = {
    where: MaklerWhereUniqueInput
    create: XOR<MaklerCreateWithoutLandingPagesInput, MaklerUncheckedCreateWithoutLandingPagesInput>
  }

  export type TenantCreateWithoutLandingPagesInput = {
    id?: string
    name: string
    subdomain: string
    domain?: string | null
    isActive?: boolean
    plan?: $Enums.TenantPlan
    maxMaklers?: number
    maxLeads?: number
    dataRegion?: string
    gdprContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    maklers?: MaklerCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutLandingPagesInput = {
    id?: string
    name: string
    subdomain: string
    domain?: string | null
    isActive?: boolean
    plan?: $Enums.TenantPlan
    maxMaklers?: number
    maxLeads?: number
    dataRegion?: string
    gdprContact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    maklers?: MaklerUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutLandingPagesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutLandingPagesInput, TenantUncheckedCreateWithoutLandingPagesInput>
  }

  export type CampaignCreateWithoutLandingPagesInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    budget: number
    spent?: number
    platform: $Enums.Platform
    targeting: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    impressions?: number
    clicks?: number
    leads?: number
    conversions?: number
    ctr?: number
    cpl?: number
    conversionRate?: number
    makler: MaklerCreateNestedOneWithoutCampaignsInput
    tenant: TenantCreateNestedOneWithoutCampaignsInput
    leadSources?: LeadCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutLandingPagesInput = {
    id?: string
    maklerId: string
    tenantId: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    budget: number
    spent?: number
    platform: $Enums.Platform
    targeting: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    impressions?: number
    clicks?: number
    leads?: number
    conversions?: number
    ctr?: number
    cpl?: number
    conversionRate?: number
    leadSources?: LeadUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutLandingPagesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutLandingPagesInput, CampaignUncheckedCreateWithoutLandingPagesInput>
  }

  export type MaklerUpsertWithoutLandingPagesInput = {
    update: XOR<MaklerUpdateWithoutLandingPagesInput, MaklerUncheckedUpdateWithoutLandingPagesInput>
    create: XOR<MaklerCreateWithoutLandingPagesInput, MaklerUncheckedCreateWithoutLandingPagesInput>
    where?: MaklerWhereInput
  }

  export type MaklerUpdateToOneWithWhereWithoutLandingPagesInput = {
    where?: MaklerWhereInput
    data: XOR<MaklerUpdateWithoutLandingPagesInput, MaklerUncheckedUpdateWithoutLandingPagesInput>
  }

  export type MaklerUpdateWithoutLandingPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMaklerNestedInput
    tenant?: TenantUpdateOneRequiredWithoutMaklersNestedInput
    campaigns?: CampaignUpdateManyWithoutMaklerNestedInput
    leads?: LeadUpdateManyWithoutMaklerNestedInput
  }

  export type MaklerUncheckedUpdateWithoutLandingPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    campaigns?: CampaignUncheckedUpdateManyWithoutMaklerNestedInput
    leads?: LeadUncheckedUpdateManyWithoutMaklerNestedInput
  }

  export type TenantUpsertWithoutLandingPagesInput = {
    update: XOR<TenantUpdateWithoutLandingPagesInput, TenantUncheckedUpdateWithoutLandingPagesInput>
    create: XOR<TenantCreateWithoutLandingPagesInput, TenantUncheckedCreateWithoutLandingPagesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutLandingPagesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutLandingPagesInput, TenantUncheckedUpdateWithoutLandingPagesInput>
  }

  export type TenantUpdateWithoutLandingPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    maklers?: MaklerUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutLandingPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: EnumTenantPlanFieldUpdateOperationsInput | $Enums.TenantPlan
    maxMaklers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    dataRegion?: StringFieldUpdateOperationsInput | string
    gdprContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    maklers?: MaklerUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CampaignUpsertWithoutLandingPagesInput = {
    update: XOR<CampaignUpdateWithoutLandingPagesInput, CampaignUncheckedUpdateWithoutLandingPagesInput>
    create: XOR<CampaignCreateWithoutLandingPagesInput, CampaignUncheckedCreateWithoutLandingPagesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutLandingPagesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutLandingPagesInput, CampaignUncheckedUpdateWithoutLandingPagesInput>
  }

  export type CampaignUpdateWithoutLandingPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    makler?: MaklerUpdateOneRequiredWithoutCampaignsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutCampaignsNestedInput
    leadSources?: LeadUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutLandingPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    leadSources?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyTenantInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaklerCreateManyTenantInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    company: string
    phone?: string | null
    website?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    logo?: string | null
    primaryColor?: string
    secondaryColor?: string
  }

  export type CampaignCreateManyTenantInput = {
    id?: string
    maklerId: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    budget: number
    spent?: number
    platform: $Enums.Platform
    targeting: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    impressions?: number
    clicks?: number
    leads?: number
    conversions?: number
    ctr?: number
    cpl?: number
    conversionRate?: number
  }

  export type LeadCreateManyTenantInput = {
    id?: string
    maklerId: string
    campaignId?: string | null
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
  }

  export type LandingPageCreateManyTenantInput = {
    id?: string
    maklerId: string
    campaignId?: string | null
    name: string
    slug: string
    template: $Enums.LandingPageTemplate
    status?: $Enums.LandingPageStatus
    headline: string
    subheadline?: string | null
    content: JsonNullValueInput | InputJsonValue
    formFields: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    views?: number
    submissions?: number
    conversionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type UserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makler?: MaklerUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makler?: MaklerUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaklerUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMaklerNestedInput
    campaigns?: CampaignUpdateManyWithoutMaklerNestedInput
    leads?: LeadUpdateManyWithoutMaklerNestedInput
    landingPages?: LandingPageUpdateManyWithoutMaklerNestedInput
  }

  export type MaklerUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    campaigns?: CampaignUncheckedUpdateManyWithoutMaklerNestedInput
    leads?: LeadUncheckedUpdateManyWithoutMaklerNestedInput
    landingPages?: LandingPageUncheckedUpdateManyWithoutMaklerNestedInput
  }

  export type MaklerUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    makler?: MaklerUpdateOneRequiredWithoutCampaignsNestedInput
    leadSources?: LeadUpdateManyWithoutCampaignNestedInput
    landingPages?: LandingPageUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    leadSources?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    landingPages?: LandingPageUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
  }

  export type LeadUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    makler?: MaklerUpdateOneRequiredWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneWithoutLeadSourcesNestedInput
    communications?: CommunicationUpdateManyWithoutLeadNestedInput
    activities?: LeadActivityUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    communications?: CommunicationUncheckedUpdateManyWithoutLeadNestedInput
    activities?: LeadActivityUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LandingPageUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    template?: EnumLandingPageTemplateFieldUpdateOperationsInput | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFieldUpdateOperationsInput | $Enums.LandingPageStatus
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    formFields?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    makler?: MaklerUpdateOneRequiredWithoutLandingPagesNestedInput
    campaign?: CampaignUpdateOneWithoutLandingPagesNestedInput
  }

  export type LandingPageUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    template?: EnumLandingPageTemplateFieldUpdateOperationsInput | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFieldUpdateOperationsInput | $Enums.LandingPageStatus
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    formFields?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LandingPageUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    template?: EnumLandingPageTemplateFieldUpdateOperationsInput | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFieldUpdateOperationsInput | $Enums.LandingPageStatus
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    formFields?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CampaignCreateManyMaklerInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    budget: number
    spent?: number
    platform: $Enums.Platform
    targeting: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    impressions?: number
    clicks?: number
    leads?: number
    conversions?: number
    ctr?: number
    cpl?: number
    conversionRate?: number
  }

  export type LeadCreateManyMaklerInput = {
    id?: string
    tenantId: string
    campaignId?: string | null
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
  }

  export type LandingPageCreateManyMaklerInput = {
    id?: string
    tenantId: string
    campaignId?: string | null
    name: string
    slug: string
    template: $Enums.LandingPageTemplate
    status?: $Enums.LandingPageStatus
    headline: string
    subheadline?: string | null
    content: JsonNullValueInput | InputJsonValue
    formFields: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    views?: number
    submissions?: number
    conversionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type CampaignUpdateWithoutMaklerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    tenant?: TenantUpdateOneRequiredWithoutCampaignsNestedInput
    leadSources?: LeadUpdateManyWithoutCampaignNestedInput
    landingPages?: LandingPageUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutMaklerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    leadSources?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    landingPages?: LandingPageUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutMaklerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    budget?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    targeting?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    leads?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    ctr?: FloatFieldUpdateOperationsInput | number
    cpl?: FloatFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
  }

  export type LeadUpdateWithoutMaklerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    tenant?: TenantUpdateOneRequiredWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneWithoutLeadSourcesNestedInput
    communications?: CommunicationUpdateManyWithoutLeadNestedInput
    activities?: LeadActivityUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutMaklerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    communications?: CommunicationUncheckedUpdateManyWithoutLeadNestedInput
    activities?: LeadActivityUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutMaklerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LandingPageUpdateWithoutMaklerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    template?: EnumLandingPageTemplateFieldUpdateOperationsInput | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFieldUpdateOperationsInput | $Enums.LandingPageStatus
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    formFields?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutLandingPagesNestedInput
    campaign?: CampaignUpdateOneWithoutLandingPagesNestedInput
  }

  export type LandingPageUncheckedUpdateWithoutMaklerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    template?: EnumLandingPageTemplateFieldUpdateOperationsInput | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFieldUpdateOperationsInput | $Enums.LandingPageStatus
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    formFields?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LandingPageUncheckedUpdateManyWithoutMaklerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    template?: EnumLandingPageTemplateFieldUpdateOperationsInput | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFieldUpdateOperationsInput | $Enums.LandingPageStatus
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    formFields?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadCreateManyCampaignInput = {
    id?: string
    maklerId: string
    tenantId: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    status?: $Enums.LeadStatus
    score?: number
    source?: string | null
    interest?: string | null
    budget?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContact?: Date | string | null
    nextFollowUp?: Date | string | null
    consentGiven?: boolean
    consentDate?: Date | string | null
    marketingConsent?: boolean
  }

  export type LandingPageCreateManyCampaignInput = {
    id?: string
    maklerId: string
    tenantId: string
    name: string
    slug: string
    template: $Enums.LandingPageTemplate
    status?: $Enums.LandingPageStatus
    headline: string
    subheadline?: string | null
    content: JsonNullValueInput | InputJsonValue
    formFields: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    views?: number
    submissions?: number
    conversionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type LeadUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    makler?: MaklerUpdateOneRequiredWithoutLeadsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLeadsNestedInput
    communications?: CommunicationUpdateManyWithoutLeadNestedInput
    activities?: LeadActivityUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
    communications?: CommunicationUncheckedUpdateManyWithoutLeadNestedInput
    activities?: LeadActivityUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    score?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContact?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextFollowUp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: BoolFieldUpdateOperationsInput | boolean
    consentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketingConsent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LandingPageUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    template?: EnumLandingPageTemplateFieldUpdateOperationsInput | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFieldUpdateOperationsInput | $Enums.LandingPageStatus
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    formFields?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    makler?: MaklerUpdateOneRequiredWithoutLandingPagesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLandingPagesNestedInput
  }

  export type LandingPageUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    template?: EnumLandingPageTemplateFieldUpdateOperationsInput | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFieldUpdateOperationsInput | $Enums.LandingPageStatus
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    formFields?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LandingPageUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    maklerId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    template?: EnumLandingPageTemplateFieldUpdateOperationsInput | $Enums.LandingPageTemplate
    status?: EnumLandingPageStatusFieldUpdateOperationsInput | $Enums.LandingPageStatus
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    formFields?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationCreateManyLeadInput = {
    id?: string
    type: $Enums.CommunicationType
    direction: $Enums.CommunicationDirection
    subject?: string | null
    content: string
    status?: $Enums.CommunicationStatus
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type LeadActivityCreateManyLeadInput = {
    id?: string
    type: $Enums.LeadActivityType
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CommunicationUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    direction?: EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunicationStatusFieldUpdateOperationsInput | $Enums.CommunicationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    direction?: EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunicationStatusFieldUpdateOperationsInput | $Enums.CommunicationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommunicationTypeFieldUpdateOperationsInput | $Enums.CommunicationType
    direction?: EnumCommunicationDirectionFieldUpdateOperationsInput | $Enums.CommunicationDirection
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommunicationStatusFieldUpdateOperationsInput | $Enums.CommunicationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadActivityUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeadActivityTypeFieldUpdateOperationsInput | $Enums.LeadActivityType
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadActivityUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeadActivityTypeFieldUpdateOperationsInput | $Enums.LeadActivityType
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadActivityUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeadActivityTypeFieldUpdateOperationsInput | $Enums.LeadActivityType
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}