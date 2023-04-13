
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: number
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  socialMedia: Prisma.JsonValue | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Course
 * 
 */
export type Course = {
  id: number
  title: string
  description: string
  duration: Prisma.Decimal
  createdAt: Date
  updatedAt: Date
}

/**
 * Model CourseEnrollment
 * 
 */
export type CourseEnrollment = {
  createdAt: Date
  updatedAt: Date
  userRole: userRole
  courseId: number
  memberId: number
}

/**
 * Model Test
 * 
 */
export type Test = {
  id: number
  title: string
  testDate: Date
  createdAt: Date
  updatedAt: Date
  courseId: number
}

/**
 * Model TestResult
 * 
 */
export type TestResult = {
  id: number
  result: Prisma.Decimal
  createdAt: Date
  updatedAt: Date
  testId: number
  studentId: number
  teacherId: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const userRole: {
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

export type userRole = (typeof userRole)[keyof typeof userRole]


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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<GlobalReject>;

  /**
   * `prisma.courseEnrollment`: Exposes CRUD operations for the **CourseEnrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseEnrollments
    * const courseEnrollments = await prisma.courseEnrollment.findMany()
    * ```
    */
  get courseEnrollment(): Prisma.CourseEnrollmentDelegate<GlobalReject>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<GlobalReject>;

  /**
   * `prisma.testResult`: Exposes CRUD operations for the **TestResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestResults
    * const testResults = await prisma.testResult.findMany()
    * ```
    */
  get testResult(): Prisma.TestResultDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Course: 'Course',
    CourseEnrollment: 'CourseEnrollment',
    Test: 'Test',
    TestResult: 'TestResult'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

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
    courses: number
    studentResults: number
    gradedTestsResults: number
  }

  export type UserCountOutputTypeSelect = {
    courses?: boolean
    studentResults?: boolean
    gradedTestsResults?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type CourseCountOutputType
   */


  export type CourseCountOutputType = {
    members: number
    tests: number
  }

  export type CourseCountOutputTypeSelect = {
    members?: boolean
    tests?: boolean
  }

  export type CourseCountOutputTypeGetPayload<S extends boolean | null | undefined | CourseCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CourseCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CourseCountOutputTypeArgs)
    ? CourseCountOutputType 
    : S extends { select: any } & (CourseCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CourseCountOutputType ? CourseCountOutputType[P] : never
  } 
      : CourseCountOutputType




  // Custom InputTypes

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect | null
  }



  /**
   * Count Type TestCountOutputType
   */


  export type TestCountOutputType = {
    testResults: number
  }

  export type TestCountOutputTypeSelect = {
    testResults?: boolean
  }

  export type TestCountOutputTypeGetPayload<S extends boolean | null | undefined | TestCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TestCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TestCountOutputTypeArgs)
    ? TestCountOutputType 
    : S extends { select: any } & (TestCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TestCountOutputType ? TestCountOutputType[P] : never
  } 
      : TestCountOutputType




  // Custom InputTypes

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    username: number
    email: number
    password: number
    socialMedia: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    email?: true
    password?: true
    socialMedia?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    socialMedia: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    socialMedia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courses?: boolean | User$coursesArgs
    studentResults?: boolean | User$studentResultsArgs
    gradedTestsResults?: boolean | User$gradedTestsResultsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    courses?: boolean | User$coursesArgs
    studentResults?: boolean | User$studentResultsArgs
    gradedTestsResults?: boolean | User$gradedTestsResultsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'courses' ? Array < CourseEnrollmentGetPayload<S['include'][P]>>  :
        P extends 'studentResults' ? Array < TestResultGetPayload<S['include'][P]>>  :
        P extends 'gradedTestsResults' ? Array < TestResultGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'courses' ? Array < CourseEnrollmentGetPayload<S['select'][P]>>  :
        P extends 'studentResults' ? Array < TestResultGetPayload<S['select'][P]>>  :
        P extends 'gradedTestsResults' ? Array < TestResultGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
      T extends _Record<'select', any>
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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    courses<T extends User$coursesArgs= {}>(args?: Subset<T, User$coursesArgs>): Prisma.PrismaPromise<Array<CourseEnrollmentGetPayload<T>>| Null>;

    studentResults<T extends User$studentResultsArgs= {}>(args?: Subset<T, User$studentResultsArgs>): Prisma.PrismaPromise<Array<TestResultGetPayload<T>>| Null>;

    gradedTestsResults<T extends User$gradedTestsResultsArgs= {}>(args?: Subset<T, User$gradedTestsResultsArgs>): Prisma.PrismaPromise<Array<TestResultGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.courses
   */
  export type User$coursesArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
     */
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseEnrollmentInclude | null
    where?: CourseEnrollmentWhereInput
    orderBy?: Enumerable<CourseEnrollmentOrderByWithRelationInput>
    cursor?: CourseEnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CourseEnrollmentScalarFieldEnum>
  }


  /**
   * User.studentResults
   */
  export type User$studentResultsArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    where?: TestResultWhereInput
    orderBy?: Enumerable<TestResultOrderByWithRelationInput>
    cursor?: TestResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TestResultScalarFieldEnum>
  }


  /**
   * User.gradedTestsResults
   */
  export type User$gradedTestsResultsArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    where?: TestResultWhereInput
    orderBy?: Enumerable<TestResultOrderByWithRelationInput>
    cursor?: TestResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TestResultScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Course
   */


  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    duration: Decimal | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    duration: Decimal | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    duration: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    duration: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    duration: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    duration?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    duration?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs = {
    where?: CourseWhereInput
    orderBy?: Enumerable<CourseOrderByWithAggregationInput>
    by: CourseScalarFieldEnum[]
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }


  export type CourseGroupByOutputType = {
    id: number
    title: string
    description: string
    duration: Decimal
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Course$membersArgs
    tests?: boolean | Course$testsArgs
    _count?: boolean | CourseCountOutputTypeArgs
  }


  export type CourseInclude = {
    members?: boolean | Course$membersArgs
    tests?: boolean | Course$testsArgs
    _count?: boolean | CourseCountOutputTypeArgs
  }

  export type CourseGetPayload<S extends boolean | null | undefined | CourseArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Course :
    S extends undefined ? never :
    S extends { include: any } & (CourseArgs | CourseFindManyArgs)
    ? Course  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'members' ? Array < CourseEnrollmentGetPayload<S['include'][P]>>  :
        P extends 'tests' ? Array < TestGetPayload<S['include'][P]>>  :
        P extends '_count' ? CourseCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CourseArgs | CourseFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'members' ? Array < CourseEnrollmentGetPayload<S['select'][P]>>  :
        P extends 'tests' ? Array < TestGetPayload<S['select'][P]>>  :
        P extends '_count' ? CourseCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Course ? Course[P] : never
  } 
      : Course


  type CourseCountArgs = 
    Omit<CourseFindManyArgs, 'select' | 'include'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CourseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Course'> extends True ? Prisma__CourseClient<CourseGetPayload<T>> : Prisma__CourseClient<CourseGetPayload<T> | null, null>

    /**
     * Find one Course that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CourseFindUniqueOrThrowArgs>
    ): Prisma__CourseClient<CourseGetPayload<T>>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CourseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Course'> extends True ? Prisma__CourseClient<CourseGetPayload<T>> : Prisma__CourseClient<CourseGetPayload<T> | null, null>

    /**
     * Find the first Course that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CourseFindFirstOrThrowArgs>
    ): Prisma__CourseClient<CourseGetPayload<T>>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseFindManyArgs>(
      args?: SelectSubset<T, CourseFindManyArgs>
    ): Prisma.PrismaPromise<Array<CourseGetPayload<T>>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
    **/
    create<T extends CourseCreateArgs>(
      args: SelectSubset<T, CourseCreateArgs>
    ): Prisma__CourseClient<CourseGetPayload<T>>

    /**
     * Create many Courses.
     *     @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseCreateManyArgs>(
      args?: SelectSubset<T, CourseCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
    **/
    delete<T extends CourseDeleteArgs>(
      args: SelectSubset<T, CourseDeleteArgs>
    ): Prisma__CourseClient<CourseGetPayload<T>>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseUpdateArgs>(
      args: SelectSubset<T, CourseUpdateArgs>
    ): Prisma__CourseClient<CourseGetPayload<T>>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseDeleteManyArgs>(
      args?: SelectSubset<T, CourseDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseUpdateManyArgs>(
      args: SelectSubset<T, CourseUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
    **/
    upsert<T extends CourseUpsertArgs>(
      args: SelectSubset<T, CourseUpsertArgs>
    ): Prisma__CourseClient<CourseGetPayload<T>>

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CourseClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    members<T extends Course$membersArgs= {}>(args?: Subset<T, Course$membersArgs>): Prisma.PrismaPromise<Array<CourseEnrollmentGetPayload<T>>| Null>;

    tests<T extends Course$testsArgs= {}>(args?: Subset<T, Course$testsArgs>): Prisma.PrismaPromise<Array<TestGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Course base type for findUnique actions
   */
  export type CourseFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUnique
   */
  export interface CourseFindUniqueArgs extends CourseFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course base type for findFirst actions
   */
  export type CourseFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: Enumerable<CourseScalarFieldEnum>
  }

  /**
   * Course findFirst
   */
  export interface CourseFindFirstArgs extends CourseFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: Enumerable<CourseScalarFieldEnum>
  }


  /**
   * Course findMany
   */
  export type CourseFindManyArgs = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: Enumerable<CourseScalarFieldEnum>
  }


  /**
   * Course create
   */
  export type CourseCreateArgs = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }


  /**
   * Course createMany
   */
  export type CourseCreateManyArgs = {
    /**
     * The data used to create many Courses.
     */
    data: Enumerable<CourseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Course update
   */
  export type CourseUpdateArgs = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
  }


  /**
   * Course upsert
   */
  export type CourseUpsertArgs = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }


  /**
   * Course delete
   */
  export type CourseDeleteArgs = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
  }


  /**
   * Course.members
   */
  export type Course$membersArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
     */
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseEnrollmentInclude | null
    where?: CourseEnrollmentWhereInput
    orderBy?: Enumerable<CourseEnrollmentOrderByWithRelationInput>
    cursor?: CourseEnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CourseEnrollmentScalarFieldEnum>
  }


  /**
   * Course.tests
   */
  export type Course$testsArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    where?: TestWhereInput
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TestScalarFieldEnum>
  }


  /**
   * Course without action
   */
  export type CourseArgs = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude | null
  }



  /**
   * Model CourseEnrollment
   */


  export type AggregateCourseEnrollment = {
    _count: CourseEnrollmentCountAggregateOutputType | null
    _avg: CourseEnrollmentAvgAggregateOutputType | null
    _sum: CourseEnrollmentSumAggregateOutputType | null
    _min: CourseEnrollmentMinAggregateOutputType | null
    _max: CourseEnrollmentMaxAggregateOutputType | null
  }

  export type CourseEnrollmentAvgAggregateOutputType = {
    courseId: number | null
    memberId: number | null
  }

  export type CourseEnrollmentSumAggregateOutputType = {
    courseId: number | null
    memberId: number | null
  }

  export type CourseEnrollmentMinAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    userRole: userRole | null
    courseId: number | null
    memberId: number | null
  }

  export type CourseEnrollmentMaxAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    userRole: userRole | null
    courseId: number | null
    memberId: number | null
  }

  export type CourseEnrollmentCountAggregateOutputType = {
    createdAt: number
    updatedAt: number
    userRole: number
    courseId: number
    memberId: number
    _all: number
  }


  export type CourseEnrollmentAvgAggregateInputType = {
    courseId?: true
    memberId?: true
  }

  export type CourseEnrollmentSumAggregateInputType = {
    courseId?: true
    memberId?: true
  }

  export type CourseEnrollmentMinAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    userRole?: true
    courseId?: true
    memberId?: true
  }

  export type CourseEnrollmentMaxAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    userRole?: true
    courseId?: true
    memberId?: true
  }

  export type CourseEnrollmentCountAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    userRole?: true
    courseId?: true
    memberId?: true
    _all?: true
  }

  export type CourseEnrollmentAggregateArgs = {
    /**
     * Filter which CourseEnrollment to aggregate.
     */
    where?: CourseEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEnrollments to fetch.
     */
    orderBy?: Enumerable<CourseEnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseEnrollments
    **/
    _count?: true | CourseEnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseEnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseEnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseEnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseEnrollmentMaxAggregateInputType
  }

  export type GetCourseEnrollmentAggregateType<T extends CourseEnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseEnrollment[P]>
      : GetScalarType<T[P], AggregateCourseEnrollment[P]>
  }




  export type CourseEnrollmentGroupByArgs = {
    where?: CourseEnrollmentWhereInput
    orderBy?: Enumerable<CourseEnrollmentOrderByWithAggregationInput>
    by: CourseEnrollmentScalarFieldEnum[]
    having?: CourseEnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseEnrollmentCountAggregateInputType | true
    _avg?: CourseEnrollmentAvgAggregateInputType
    _sum?: CourseEnrollmentSumAggregateInputType
    _min?: CourseEnrollmentMinAggregateInputType
    _max?: CourseEnrollmentMaxAggregateInputType
  }


  export type CourseEnrollmentGroupByOutputType = {
    createdAt: Date
    updatedAt: Date
    userRole: userRole
    courseId: number
    memberId: number
    _count: CourseEnrollmentCountAggregateOutputType | null
    _avg: CourseEnrollmentAvgAggregateOutputType | null
    _sum: CourseEnrollmentSumAggregateOutputType | null
    _min: CourseEnrollmentMinAggregateOutputType | null
    _max: CourseEnrollmentMaxAggregateOutputType | null
  }

  type GetCourseEnrollmentGroupByPayload<T extends CourseEnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CourseEnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseEnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseEnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], CourseEnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type CourseEnrollmentSelect = {
    createdAt?: boolean
    updatedAt?: boolean
    userRole?: boolean
    courseId?: boolean
    memberId?: boolean
    course?: boolean | CourseArgs
    member?: boolean | UserArgs
  }


  export type CourseEnrollmentInclude = {
    course?: boolean | CourseArgs
    member?: boolean | UserArgs
  }

  export type CourseEnrollmentGetPayload<S extends boolean | null | undefined | CourseEnrollmentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CourseEnrollment :
    S extends undefined ? never :
    S extends { include: any } & (CourseEnrollmentArgs | CourseEnrollmentFindManyArgs)
    ? CourseEnrollment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'course' ? CourseGetPayload<S['include'][P]> :
        P extends 'member' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CourseEnrollmentArgs | CourseEnrollmentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'course' ? CourseGetPayload<S['select'][P]> :
        P extends 'member' ? UserGetPayload<S['select'][P]> :  P extends keyof CourseEnrollment ? CourseEnrollment[P] : never
  } 
      : CourseEnrollment


  type CourseEnrollmentCountArgs = 
    Omit<CourseEnrollmentFindManyArgs, 'select' | 'include'> & {
      select?: CourseEnrollmentCountAggregateInputType | true
    }

  export interface CourseEnrollmentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CourseEnrollment that matches the filter.
     * @param {CourseEnrollmentFindUniqueArgs} args - Arguments to find a CourseEnrollment
     * @example
     * // Get one CourseEnrollment
     * const courseEnrollment = await prisma.courseEnrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseEnrollmentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CourseEnrollmentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CourseEnrollment'> extends True ? Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>> : Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T> | null, null>

    /**
     * Find one CourseEnrollment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseEnrollmentFindUniqueOrThrowArgs} args - Arguments to find a CourseEnrollment
     * @example
     * // Get one CourseEnrollment
     * const courseEnrollment = await prisma.courseEnrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseEnrollmentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CourseEnrollmentFindUniqueOrThrowArgs>
    ): Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>>

    /**
     * Find the first CourseEnrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollmentFindFirstArgs} args - Arguments to find a CourseEnrollment
     * @example
     * // Get one CourseEnrollment
     * const courseEnrollment = await prisma.courseEnrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseEnrollmentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CourseEnrollmentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CourseEnrollment'> extends True ? Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>> : Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T> | null, null>

    /**
     * Find the first CourseEnrollment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollmentFindFirstOrThrowArgs} args - Arguments to find a CourseEnrollment
     * @example
     * // Get one CourseEnrollment
     * const courseEnrollment = await prisma.courseEnrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseEnrollmentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CourseEnrollmentFindFirstOrThrowArgs>
    ): Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>>

    /**
     * Find zero or more CourseEnrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseEnrollments
     * const courseEnrollments = await prisma.courseEnrollment.findMany()
     * 
     * // Get first 10 CourseEnrollments
     * const courseEnrollments = await prisma.courseEnrollment.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const courseEnrollmentWithCreatedAtOnly = await prisma.courseEnrollment.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends CourseEnrollmentFindManyArgs>(
      args?: SelectSubset<T, CourseEnrollmentFindManyArgs>
    ): Prisma.PrismaPromise<Array<CourseEnrollmentGetPayload<T>>>

    /**
     * Create a CourseEnrollment.
     * @param {CourseEnrollmentCreateArgs} args - Arguments to create a CourseEnrollment.
     * @example
     * // Create one CourseEnrollment
     * const CourseEnrollment = await prisma.courseEnrollment.create({
     *   data: {
     *     // ... data to create a CourseEnrollment
     *   }
     * })
     * 
    **/
    create<T extends CourseEnrollmentCreateArgs>(
      args: SelectSubset<T, CourseEnrollmentCreateArgs>
    ): Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>>

    /**
     * Create many CourseEnrollments.
     *     @param {CourseEnrollmentCreateManyArgs} args - Arguments to create many CourseEnrollments.
     *     @example
     *     // Create many CourseEnrollments
     *     const courseEnrollment = await prisma.courseEnrollment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseEnrollmentCreateManyArgs>(
      args?: SelectSubset<T, CourseEnrollmentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CourseEnrollment.
     * @param {CourseEnrollmentDeleteArgs} args - Arguments to delete one CourseEnrollment.
     * @example
     * // Delete one CourseEnrollment
     * const CourseEnrollment = await prisma.courseEnrollment.delete({
     *   where: {
     *     // ... filter to delete one CourseEnrollment
     *   }
     * })
     * 
    **/
    delete<T extends CourseEnrollmentDeleteArgs>(
      args: SelectSubset<T, CourseEnrollmentDeleteArgs>
    ): Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>>

    /**
     * Update one CourseEnrollment.
     * @param {CourseEnrollmentUpdateArgs} args - Arguments to update one CourseEnrollment.
     * @example
     * // Update one CourseEnrollment
     * const courseEnrollment = await prisma.courseEnrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseEnrollmentUpdateArgs>(
      args: SelectSubset<T, CourseEnrollmentUpdateArgs>
    ): Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>>

    /**
     * Delete zero or more CourseEnrollments.
     * @param {CourseEnrollmentDeleteManyArgs} args - Arguments to filter CourseEnrollments to delete.
     * @example
     * // Delete a few CourseEnrollments
     * const { count } = await prisma.courseEnrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseEnrollmentDeleteManyArgs>(
      args?: SelectSubset<T, CourseEnrollmentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseEnrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseEnrollments
     * const courseEnrollment = await prisma.courseEnrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseEnrollmentUpdateManyArgs>(
      args: SelectSubset<T, CourseEnrollmentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseEnrollment.
     * @param {CourseEnrollmentUpsertArgs} args - Arguments to update or create a CourseEnrollment.
     * @example
     * // Update or create a CourseEnrollment
     * const courseEnrollment = await prisma.courseEnrollment.upsert({
     *   create: {
     *     // ... data to create a CourseEnrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseEnrollment we want to update
     *   }
     * })
    **/
    upsert<T extends CourseEnrollmentUpsertArgs>(
      args: SelectSubset<T, CourseEnrollmentUpsertArgs>
    ): Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>>

    /**
     * Count the number of CourseEnrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollmentCountArgs} args - Arguments to filter CourseEnrollments to count.
     * @example
     * // Count the number of CourseEnrollments
     * const count = await prisma.courseEnrollment.count({
     *   where: {
     *     // ... the filter for the CourseEnrollments we want to count
     *   }
     * })
    **/
    count<T extends CourseEnrollmentCountArgs>(
      args?: Subset<T, CourseEnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseEnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseEnrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseEnrollmentAggregateArgs>(args: Subset<T, CourseEnrollmentAggregateArgs>): Prisma.PrismaPromise<GetCourseEnrollmentAggregateType<T>>

    /**
     * Group by CourseEnrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollmentGroupByArgs} args - Group by arguments.
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
      T extends CourseEnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseEnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: CourseEnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CourseEnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseEnrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CourseEnrollmentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    course<T extends CourseArgs= {}>(args?: Subset<T, CourseArgs>): Prisma__CourseClient<CourseGetPayload<T> | Null>;

    member<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CourseEnrollment base type for findUnique actions
   */
  export type CourseEnrollmentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
     */
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseEnrollmentInclude | null
    /**
     * Filter, which CourseEnrollment to fetch.
     */
    where: CourseEnrollmentWhereUniqueInput
  }

  /**
   * CourseEnrollment findUnique
   */
  export interface CourseEnrollmentFindUniqueArgs extends CourseEnrollmentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CourseEnrollment findUniqueOrThrow
   */
  export type CourseEnrollmentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
     */
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseEnrollmentInclude | null
    /**
     * Filter, which CourseEnrollment to fetch.
     */
    where: CourseEnrollmentWhereUniqueInput
  }


  /**
   * CourseEnrollment base type for findFirst actions
   */
  export type CourseEnrollmentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
     */
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseEnrollmentInclude | null
    /**
     * Filter, which CourseEnrollment to fetch.
     */
    where?: CourseEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEnrollments to fetch.
     */
    orderBy?: Enumerable<CourseEnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseEnrollments.
     */
    cursor?: CourseEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseEnrollments.
     */
    distinct?: Enumerable<CourseEnrollmentScalarFieldEnum>
  }

  /**
   * CourseEnrollment findFirst
   */
  export interface CourseEnrollmentFindFirstArgs extends CourseEnrollmentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CourseEnrollment findFirstOrThrow
   */
  export type CourseEnrollmentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
     */
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseEnrollmentInclude | null
    /**
     * Filter, which CourseEnrollment to fetch.
     */
    where?: CourseEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEnrollments to fetch.
     */
    orderBy?: Enumerable<CourseEnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseEnrollments.
     */
    cursor?: CourseEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseEnrollments.
     */
    distinct?: Enumerable<CourseEnrollmentScalarFieldEnum>
  }


  /**
   * CourseEnrollment findMany
   */
  export type CourseEnrollmentFindManyArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
     */
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseEnrollmentInclude | null
    /**
     * Filter, which CourseEnrollments to fetch.
     */
    where?: CourseEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEnrollments to fetch.
     */
    orderBy?: Enumerable<CourseEnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseEnrollments.
     */
    cursor?: CourseEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEnrollments.
     */
    skip?: number
    distinct?: Enumerable<CourseEnrollmentScalarFieldEnum>
  }


  /**
   * CourseEnrollment create
   */
  export type CourseEnrollmentCreateArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
     */
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseEnrollmentInclude | null
    /**
     * The data needed to create a CourseEnrollment.
     */
    data: XOR<CourseEnrollmentCreateInput, CourseEnrollmentUncheckedCreateInput>
  }


  /**
   * CourseEnrollment createMany
   */
  export type CourseEnrollmentCreateManyArgs = {
    /**
     * The data used to create many CourseEnrollments.
     */
    data: Enumerable<CourseEnrollmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CourseEnrollment update
   */
  export type CourseEnrollmentUpdateArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
     */
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseEnrollmentInclude | null
    /**
     * The data needed to update a CourseEnrollment.
     */
    data: XOR<CourseEnrollmentUpdateInput, CourseEnrollmentUncheckedUpdateInput>
    /**
     * Choose, which CourseEnrollment to update.
     */
    where: CourseEnrollmentWhereUniqueInput
  }


  /**
   * CourseEnrollment updateMany
   */
  export type CourseEnrollmentUpdateManyArgs = {
    /**
     * The data used to update CourseEnrollments.
     */
    data: XOR<CourseEnrollmentUpdateManyMutationInput, CourseEnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which CourseEnrollments to update
     */
    where?: CourseEnrollmentWhereInput
  }


  /**
   * CourseEnrollment upsert
   */
  export type CourseEnrollmentUpsertArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
     */
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseEnrollmentInclude | null
    /**
     * The filter to search for the CourseEnrollment to update in case it exists.
     */
    where: CourseEnrollmentWhereUniqueInput
    /**
     * In case the CourseEnrollment found by the `where` argument doesn't exist, create a new CourseEnrollment with this data.
     */
    create: XOR<CourseEnrollmentCreateInput, CourseEnrollmentUncheckedCreateInput>
    /**
     * In case the CourseEnrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseEnrollmentUpdateInput, CourseEnrollmentUncheckedUpdateInput>
  }


  /**
   * CourseEnrollment delete
   */
  export type CourseEnrollmentDeleteArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
     */
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseEnrollmentInclude | null
    /**
     * Filter which CourseEnrollment to delete.
     */
    where: CourseEnrollmentWhereUniqueInput
  }


  /**
   * CourseEnrollment deleteMany
   */
  export type CourseEnrollmentDeleteManyArgs = {
    /**
     * Filter which CourseEnrollments to delete
     */
    where?: CourseEnrollmentWhereInput
  }


  /**
   * CourseEnrollment without action
   */
  export type CourseEnrollmentArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
     */
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseEnrollmentInclude | null
  }



  /**
   * Model Test
   */


  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type TestSumAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type TestMinAggregateOutputType = {
    id: number | null
    title: string | null
    testDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: number | null
  }

  export type TestMaxAggregateOutputType = {
    id: number | null
    title: string | null
    testDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: number | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    title: number
    testDate: number
    createdAt: number
    updatedAt: number
    courseId: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type TestSumAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    title?: true
    testDate?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    title?: true
    testDate?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    title?: true
    testDate?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    _all?: true
  }

  export type TestAggregateArgs = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs = {
    where?: TestWhereInput
    orderBy?: Enumerable<TestOrderByWithAggregationInput>
    by: TestScalarFieldEnum[]
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }


  export type TestGroupByOutputType = {
    id: number
    title: string
    testDate: Date
    createdAt: Date
    updatedAt: Date
    courseId: number
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect = {
    id?: boolean
    title?: boolean
    testDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    testResults?: boolean | Test$testResultsArgs
    course?: boolean | CourseArgs
    _count?: boolean | TestCountOutputTypeArgs
  }


  export type TestInclude = {
    testResults?: boolean | Test$testResultsArgs
    course?: boolean | CourseArgs
    _count?: boolean | TestCountOutputTypeArgs
  }

  export type TestGetPayload<S extends boolean | null | undefined | TestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Test :
    S extends undefined ? never :
    S extends { include: any } & (TestArgs | TestFindManyArgs)
    ? Test  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'testResults' ? Array < TestResultGetPayload<S['include'][P]>>  :
        P extends 'course' ? CourseGetPayload<S['include'][P]> :
        P extends '_count' ? TestCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TestArgs | TestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'testResults' ? Array < TestResultGetPayload<S['select'][P]>>  :
        P extends 'course' ? CourseGetPayload<S['select'][P]> :
        P extends '_count' ? TestCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Test ? Test[P] : never
  } 
      : Test


  type TestCountArgs = 
    Omit<TestFindManyArgs, 'select' | 'include'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Test'> extends True ? Prisma__TestClient<TestGetPayload<T>> : Prisma__TestClient<TestGetPayload<T> | null, null>

    /**
     * Find one Test that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TestFindUniqueOrThrowArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Test'> extends True ? Prisma__TestClient<TestGetPayload<T>> : Prisma__TestClient<TestGetPayload<T> | null, null>

    /**
     * Find the first Test that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TestFindFirstOrThrowArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestFindManyArgs>(
      args?: SelectSubset<T, TestFindManyArgs>
    ): Prisma.PrismaPromise<Array<TestGetPayload<T>>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
    **/
    create<T extends TestCreateArgs>(
      args: SelectSubset<T, TestCreateArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Create many Tests.
     *     @param {TestCreateManyArgs} args - Arguments to create many Tests.
     *     @example
     *     // Create many Tests
     *     const test = await prisma.test.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TestCreateManyArgs>(
      args?: SelectSubset<T, TestCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
    **/
    delete<T extends TestDeleteArgs>(
      args: SelectSubset<T, TestDeleteArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestUpdateArgs>(
      args: SelectSubset<T, TestUpdateArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestDeleteManyArgs>(
      args?: SelectSubset<T, TestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestUpdateManyArgs>(
      args: SelectSubset<T, TestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
    **/
    upsert<T extends TestUpsertArgs>(
      args: SelectSubset<T, TestUpsertArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
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
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    testResults<T extends Test$testResultsArgs= {}>(args?: Subset<T, Test$testResultsArgs>): Prisma.PrismaPromise<Array<TestResultGetPayload<T>>| Null>;

    course<T extends CourseArgs= {}>(args?: Subset<T, CourseArgs>): Prisma__CourseClient<CourseGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Test base type for findUnique actions
   */
  export type TestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUnique
   */
  export interface TestFindUniqueArgs extends TestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test base type for findFirst actions
   */
  export type TestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: Enumerable<TestScalarFieldEnum>
  }

  /**
   * Test findFirst
   */
  export interface TestFindFirstArgs extends TestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: Enumerable<TestScalarFieldEnum>
  }


  /**
   * Test findMany
   */
  export type TestFindManyArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: Enumerable<TestScalarFieldEnum>
  }


  /**
   * Test create
   */
  export type TestCreateArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }


  /**
   * Test createMany
   */
  export type TestCreateManyArgs = {
    /**
     * The data used to create many Tests.
     */
    data: Enumerable<TestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Test update
   */
  export type TestUpdateArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
  }


  /**
   * Test upsert
   */
  export type TestUpsertArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }


  /**
   * Test delete
   */
  export type TestDeleteArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
  }


  /**
   * Test.testResults
   */
  export type Test$testResultsArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    where?: TestResultWhereInput
    orderBy?: Enumerable<TestResultOrderByWithRelationInput>
    cursor?: TestResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TestResultScalarFieldEnum>
  }


  /**
   * Test without action
   */
  export type TestArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude | null
  }



  /**
   * Model TestResult
   */


  export type AggregateTestResult = {
    _count: TestResultCountAggregateOutputType | null
    _avg: TestResultAvgAggregateOutputType | null
    _sum: TestResultSumAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  export type TestResultAvgAggregateOutputType = {
    id: number | null
    result: Decimal | null
    testId: number | null
    studentId: number | null
    teacherId: number | null
  }

  export type TestResultSumAggregateOutputType = {
    id: number | null
    result: Decimal | null
    testId: number | null
    studentId: number | null
    teacherId: number | null
  }

  export type TestResultMinAggregateOutputType = {
    id: number | null
    result: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    testId: number | null
    studentId: number | null
    teacherId: number | null
  }

  export type TestResultMaxAggregateOutputType = {
    id: number | null
    result: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    testId: number | null
    studentId: number | null
    teacherId: number | null
  }

  export type TestResultCountAggregateOutputType = {
    id: number
    result: number
    createdAt: number
    updatedAt: number
    testId: number
    studentId: number
    teacherId: number
    _all: number
  }


  export type TestResultAvgAggregateInputType = {
    id?: true
    result?: true
    testId?: true
    studentId?: true
    teacherId?: true
  }

  export type TestResultSumAggregateInputType = {
    id?: true
    result?: true
    testId?: true
    studentId?: true
    teacherId?: true
  }

  export type TestResultMinAggregateInputType = {
    id?: true
    result?: true
    createdAt?: true
    updatedAt?: true
    testId?: true
    studentId?: true
    teacherId?: true
  }

  export type TestResultMaxAggregateInputType = {
    id?: true
    result?: true
    createdAt?: true
    updatedAt?: true
    testId?: true
    studentId?: true
    teacherId?: true
  }

  export type TestResultCountAggregateInputType = {
    id?: true
    result?: true
    createdAt?: true
    updatedAt?: true
    testId?: true
    studentId?: true
    teacherId?: true
    _all?: true
  }

  export type TestResultAggregateArgs = {
    /**
     * Filter which TestResult to aggregate.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: Enumerable<TestResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestResults
    **/
    _count?: true | TestResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestResultMaxAggregateInputType
  }

  export type GetTestResultAggregateType<T extends TestResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTestResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestResult[P]>
      : GetScalarType<T[P], AggregateTestResult[P]>
  }




  export type TestResultGroupByArgs = {
    where?: TestResultWhereInput
    orderBy?: Enumerable<TestResultOrderByWithAggregationInput>
    by: TestResultScalarFieldEnum[]
    having?: TestResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestResultCountAggregateInputType | true
    _avg?: TestResultAvgAggregateInputType
    _sum?: TestResultSumAggregateInputType
    _min?: TestResultMinAggregateInputType
    _max?: TestResultMaxAggregateInputType
  }


  export type TestResultGroupByOutputType = {
    id: number
    result: Decimal
    createdAt: Date
    updatedAt: Date
    testId: number
    studentId: number
    teacherId: number
    _count: TestResultCountAggregateOutputType | null
    _avg: TestResultAvgAggregateOutputType | null
    _sum: TestResultSumAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  type GetTestResultGroupByPayload<T extends TestResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TestResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestResultGroupByOutputType[P]>
            : GetScalarType<T[P], TestResultGroupByOutputType[P]>
        }
      >
    >


  export type TestResultSelect = {
    id?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testId?: boolean
    studentId?: boolean
    teacherId?: boolean
    test?: boolean | TestArgs
    student?: boolean | UserArgs
    teacher?: boolean | UserArgs
  }


  export type TestResultInclude = {
    test?: boolean | TestArgs
    student?: boolean | UserArgs
    teacher?: boolean | UserArgs
  }

  export type TestResultGetPayload<S extends boolean | null | undefined | TestResultArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TestResult :
    S extends undefined ? never :
    S extends { include: any } & (TestResultArgs | TestResultFindManyArgs)
    ? TestResult  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'test' ? TestGetPayload<S['include'][P]> :
        P extends 'student' ? UserGetPayload<S['include'][P]> :
        P extends 'teacher' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TestResultArgs | TestResultFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'test' ? TestGetPayload<S['select'][P]> :
        P extends 'student' ? UserGetPayload<S['select'][P]> :
        P extends 'teacher' ? UserGetPayload<S['select'][P]> :  P extends keyof TestResult ? TestResult[P] : never
  } 
      : TestResult


  type TestResultCountArgs = 
    Omit<TestResultFindManyArgs, 'select' | 'include'> & {
      select?: TestResultCountAggregateInputType | true
    }

  export interface TestResultDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TestResult that matches the filter.
     * @param {TestResultFindUniqueArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestResultFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TestResultFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TestResult'> extends True ? Prisma__TestResultClient<TestResultGetPayload<T>> : Prisma__TestResultClient<TestResultGetPayload<T> | null, null>

    /**
     * Find one TestResult that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TestResultFindUniqueOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestResultFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TestResultFindUniqueOrThrowArgs>
    ): Prisma__TestResultClient<TestResultGetPayload<T>>

    /**
     * Find the first TestResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestResultFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TestResultFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TestResult'> extends True ? Prisma__TestResultClient<TestResultGetPayload<T>> : Prisma__TestResultClient<TestResultGetPayload<T> | null, null>

    /**
     * Find the first TestResult that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestResultFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TestResultFindFirstOrThrowArgs>
    ): Prisma__TestResultClient<TestResultGetPayload<T>>

    /**
     * Find zero or more TestResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestResults
     * const testResults = await prisma.testResult.findMany()
     * 
     * // Get first 10 TestResults
     * const testResults = await prisma.testResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testResultWithIdOnly = await prisma.testResult.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestResultFindManyArgs>(
      args?: SelectSubset<T, TestResultFindManyArgs>
    ): Prisma.PrismaPromise<Array<TestResultGetPayload<T>>>

    /**
     * Create a TestResult.
     * @param {TestResultCreateArgs} args - Arguments to create a TestResult.
     * @example
     * // Create one TestResult
     * const TestResult = await prisma.testResult.create({
     *   data: {
     *     // ... data to create a TestResult
     *   }
     * })
     * 
    **/
    create<T extends TestResultCreateArgs>(
      args: SelectSubset<T, TestResultCreateArgs>
    ): Prisma__TestResultClient<TestResultGetPayload<T>>

    /**
     * Create many TestResults.
     *     @param {TestResultCreateManyArgs} args - Arguments to create many TestResults.
     *     @example
     *     // Create many TestResults
     *     const testResult = await prisma.testResult.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TestResultCreateManyArgs>(
      args?: SelectSubset<T, TestResultCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TestResult.
     * @param {TestResultDeleteArgs} args - Arguments to delete one TestResult.
     * @example
     * // Delete one TestResult
     * const TestResult = await prisma.testResult.delete({
     *   where: {
     *     // ... filter to delete one TestResult
     *   }
     * })
     * 
    **/
    delete<T extends TestResultDeleteArgs>(
      args: SelectSubset<T, TestResultDeleteArgs>
    ): Prisma__TestResultClient<TestResultGetPayload<T>>

    /**
     * Update one TestResult.
     * @param {TestResultUpdateArgs} args - Arguments to update one TestResult.
     * @example
     * // Update one TestResult
     * const testResult = await prisma.testResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestResultUpdateArgs>(
      args: SelectSubset<T, TestResultUpdateArgs>
    ): Prisma__TestResultClient<TestResultGetPayload<T>>

    /**
     * Delete zero or more TestResults.
     * @param {TestResultDeleteManyArgs} args - Arguments to filter TestResults to delete.
     * @example
     * // Delete a few TestResults
     * const { count } = await prisma.testResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestResultDeleteManyArgs>(
      args?: SelectSubset<T, TestResultDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestResults
     * const testResult = await prisma.testResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestResultUpdateManyArgs>(
      args: SelectSubset<T, TestResultUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestResult.
     * @param {TestResultUpsertArgs} args - Arguments to update or create a TestResult.
     * @example
     * // Update or create a TestResult
     * const testResult = await prisma.testResult.upsert({
     *   create: {
     *     // ... data to create a TestResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestResult we want to update
     *   }
     * })
    **/
    upsert<T extends TestResultUpsertArgs>(
      args: SelectSubset<T, TestResultUpsertArgs>
    ): Prisma__TestResultClient<TestResultGetPayload<T>>

    /**
     * Count the number of TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultCountArgs} args - Arguments to filter TestResults to count.
     * @example
     * // Count the number of TestResults
     * const count = await prisma.testResult.count({
     *   where: {
     *     // ... the filter for the TestResults we want to count
     *   }
     * })
    **/
    count<T extends TestResultCountArgs>(
      args?: Subset<T, TestResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestResultAggregateArgs>(args: Subset<T, TestResultAggregateArgs>): Prisma.PrismaPromise<GetTestResultAggregateType<T>>

    /**
     * Group by TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultGroupByArgs} args - Group by arguments.
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
      T extends TestResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestResultGroupByArgs['orderBy'] }
        : { orderBy?: TestResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TestResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TestResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestResultClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    test<T extends TestArgs= {}>(args?: Subset<T, TestArgs>): Prisma__TestClient<TestGetPayload<T> | Null>;

    student<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    teacher<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TestResult base type for findUnique actions
   */
  export type TestResultFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult findUnique
   */
  export interface TestResultFindUniqueArgs extends TestResultFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TestResult findUniqueOrThrow
   */
  export type TestResultFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }


  /**
   * TestResult base type for findFirst actions
   */
  export type TestResultFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: Enumerable<TestResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: Enumerable<TestResultScalarFieldEnum>
  }

  /**
   * TestResult findFirst
   */
  export interface TestResultFindFirstArgs extends TestResultFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TestResult findFirstOrThrow
   */
  export type TestResultFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: Enumerable<TestResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: Enumerable<TestResultScalarFieldEnum>
  }


  /**
   * TestResult findMany
   */
  export type TestResultFindManyArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * Filter, which TestResults to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: Enumerable<TestResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    distinct?: Enumerable<TestResultScalarFieldEnum>
  }


  /**
   * TestResult create
   */
  export type TestResultCreateArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * The data needed to create a TestResult.
     */
    data: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
  }


  /**
   * TestResult createMany
   */
  export type TestResultCreateManyArgs = {
    /**
     * The data used to create many TestResults.
     */
    data: Enumerable<TestResultCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TestResult update
   */
  export type TestResultUpdateArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * The data needed to update a TestResult.
     */
    data: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
    /**
     * Choose, which TestResult to update.
     */
    where: TestResultWhereUniqueInput
  }


  /**
   * TestResult updateMany
   */
  export type TestResultUpdateManyArgs = {
    /**
     * The data used to update TestResults.
     */
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyInput>
    /**
     * Filter which TestResults to update
     */
    where?: TestResultWhereInput
  }


  /**
   * TestResult upsert
   */
  export type TestResultUpsertArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * The filter to search for the TestResult to update in case it exists.
     */
    where: TestResultWhereUniqueInput
    /**
     * In case the TestResult found by the `where` argument doesn't exist, create a new TestResult with this data.
     */
    create: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
    /**
     * In case the TestResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
  }


  /**
   * TestResult delete
   */
  export type TestResultDeleteArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * Filter which TestResult to delete.
     */
    where: TestResultWhereUniqueInput
  }


  /**
   * TestResult deleteMany
   */
  export type TestResultDeleteManyArgs = {
    /**
     * Filter which TestResults to delete
     */
    where?: TestResultWhereInput
  }


  /**
   * TestResult without action
   */
  export type TestResultArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CourseEnrollmentScalarFieldEnum: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userRole: 'userRole',
    courseId: 'courseId',
    memberId: 'memberId'
  };

  export type CourseEnrollmentScalarFieldEnum = (typeof CourseEnrollmentScalarFieldEnum)[keyof typeof CourseEnrollmentScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    duration: 'duration',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TestResultScalarFieldEnum: {
    id: 'id',
    result: 'result',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    testId: 'testId',
    studentId: 'studentId',
    teacherId: 'teacherId'
  };

  export type TestResultScalarFieldEnum = (typeof TestResultScalarFieldEnum)[keyof typeof TestResultScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    testDate: 'testDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    courseId: 'courseId'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    email: 'email',
    password: 'password',
    socialMedia: 'socialMedia',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    username?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    socialMedia?: JsonNullableFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    courses?: CourseEnrollmentListRelationFilter
    studentResults?: TestResultListRelationFilter
    gradedTestsResults?: TestResultListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    socialMedia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courses?: CourseEnrollmentOrderByRelationAggregateInput
    studentResults?: TestResultOrderByRelationAggregateInput
    gradedTestsResults?: TestResultOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    socialMedia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    socialMedia?: JsonNullableWithAggregatesFilter
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CourseWhereInput = {
    AND?: Enumerable<CourseWhereInput>
    OR?: Enumerable<CourseWhereInput>
    NOT?: Enumerable<CourseWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    duration?: DecimalFilter | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    members?: CourseEnrollmentListRelationFilter
    tests?: TestListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: CourseEnrollmentOrderByRelationAggregateInput
    tests?: TestOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = {
    id?: number
  }

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CourseScalarWhereWithAggregatesInput>
    OR?: Enumerable<CourseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CourseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    duration?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CourseEnrollmentWhereInput = {
    AND?: Enumerable<CourseEnrollmentWhereInput>
    OR?: Enumerable<CourseEnrollmentWhereInput>
    NOT?: Enumerable<CourseEnrollmentWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userRole?: EnumuserRoleFilter | userRole
    courseId?: IntFilter | number
    memberId?: IntFilter | number
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    member?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CourseEnrollmentOrderByWithRelationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRole?: SortOrder
    courseId?: SortOrder
    memberId?: SortOrder
    course?: CourseOrderByWithRelationInput
    member?: UserOrderByWithRelationInput
  }

  export type CourseEnrollmentWhereUniqueInput = {
    courseId_memberId?: CourseEnrollmentCourseIdMemberIdCompoundUniqueInput
  }

  export type CourseEnrollmentOrderByWithAggregationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRole?: SortOrder
    courseId?: SortOrder
    memberId?: SortOrder
    _count?: CourseEnrollmentCountOrderByAggregateInput
    _avg?: CourseEnrollmentAvgOrderByAggregateInput
    _max?: CourseEnrollmentMaxOrderByAggregateInput
    _min?: CourseEnrollmentMinOrderByAggregateInput
    _sum?: CourseEnrollmentSumOrderByAggregateInput
  }

  export type CourseEnrollmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CourseEnrollmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CourseEnrollmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CourseEnrollmentScalarWhereWithAggregatesInput>
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    userRole?: EnumuserRoleWithAggregatesFilter | userRole
    courseId?: IntWithAggregatesFilter | number
    memberId?: IntWithAggregatesFilter | number
  }

  export type TestWhereInput = {
    AND?: Enumerable<TestWhereInput>
    OR?: Enumerable<TestWhereInput>
    NOT?: Enumerable<TestWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    testDate?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    courseId?: IntFilter | number
    testResults?: TestResultListRelationFilter
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    testDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    testResults?: TestResultOrderByRelationAggregateInput
    course?: CourseOrderByWithRelationInput
  }

  export type TestWhereUniqueInput = {
    id?: number
  }

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    testDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TestScalarWhereWithAggregatesInput>
    OR?: Enumerable<TestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TestScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    testDate?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    courseId?: IntWithAggregatesFilter | number
  }

  export type TestResultWhereInput = {
    AND?: Enumerable<TestResultWhereInput>
    OR?: Enumerable<TestResultWhereInput>
    NOT?: Enumerable<TestResultWhereInput>
    id?: IntFilter | number
    result?: DecimalFilter | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    testId?: IntFilter | number
    studentId?: IntFilter | number
    teacherId?: IntFilter | number
    test?: XOR<TestRelationFilter, TestWhereInput>
    student?: XOR<UserRelationFilter, UserWhereInput>
    teacher?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TestResultOrderByWithRelationInput = {
    id?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testId?: SortOrder
    studentId?: SortOrder
    teacherId?: SortOrder
    test?: TestOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
  }

  export type TestResultWhereUniqueInput = {
    id?: number
  }

  export type TestResultOrderByWithAggregationInput = {
    id?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testId?: SortOrder
    studentId?: SortOrder
    teacherId?: SortOrder
    _count?: TestResultCountOrderByAggregateInput
    _avg?: TestResultAvgOrderByAggregateInput
    _max?: TestResultMaxOrderByAggregateInput
    _min?: TestResultMinOrderByAggregateInput
    _sum?: TestResultSumOrderByAggregateInput
  }

  export type TestResultScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TestResultScalarWhereWithAggregatesInput>
    OR?: Enumerable<TestResultScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TestResultScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    result?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    testId?: IntWithAggregatesFilter | number
    studentId?: IntWithAggregatesFilter | number
    teacherId?: IntWithAggregatesFilter | number
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseEnrollmentCreateNestedManyWithoutMemberInput
    studentResults?: TestResultCreateNestedManyWithoutStudentInput
    gradedTestsResults?: TestResultCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseEnrollmentUncheckedCreateNestedManyWithoutMemberInput
    studentResults?: TestResultUncheckedCreateNestedManyWithoutStudentInput
    gradedTestsResults?: TestResultUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseEnrollmentUpdateManyWithoutMemberNestedInput
    studentResults?: TestResultUpdateManyWithoutStudentNestedInput
    gradedTestsResults?: TestResultUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseEnrollmentUncheckedUpdateManyWithoutMemberNestedInput
    studentResults?: TestResultUncheckedUpdateManyWithoutStudentNestedInput
    gradedTestsResults?: TestResultUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    title: string
    description: string
    duration: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CourseEnrollmentCreateNestedManyWithoutCourseInput
    tests?: TestCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    duration: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CourseEnrollmentUncheckedCreateNestedManyWithoutCourseInput
    tests?: TestUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CourseEnrollmentUpdateManyWithoutCourseNestedInput
    tests?: TestUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CourseEnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    tests?: TestUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    title: string
    description: string
    duration: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseEnrollmentCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    userRole: userRole
    course: CourseCreateNestedOneWithoutMembersInput
    member: UserCreateNestedOneWithoutCoursesInput
  }

  export type CourseEnrollmentUncheckedCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    userRole: userRole
    courseId: number
    memberId: number
  }

  export type CourseEnrollmentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: EnumuserRoleFieldUpdateOperationsInput | userRole
    course?: CourseUpdateOneRequiredWithoutMembersNestedInput
    member?: UserUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseEnrollmentUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: EnumuserRoleFieldUpdateOperationsInput | userRole
    courseId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseEnrollmentCreateManyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    userRole: userRole
    courseId: number
    memberId: number
  }

  export type CourseEnrollmentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: EnumuserRoleFieldUpdateOperationsInput | userRole
  }

  export type CourseEnrollmentUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: EnumuserRoleFieldUpdateOperationsInput | userRole
    courseId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type TestCreateInput = {
    title: string
    testDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    testResults?: TestResultCreateNestedManyWithoutTestInput
    course: CourseCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateInput = {
    id?: number
    title: string
    testDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: number
    testResults?: TestResultUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    testDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testResults?: TestResultUpdateManyWithoutTestNestedInput
    course?: CourseUpdateOneRequiredWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: IntFieldUpdateOperationsInput | number
    testResults?: TestResultUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestCreateManyInput = {
    id?: number
    title: string
    testDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: number
  }

  export type TestUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    testDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultCreateInput = {
    result: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    test: TestCreateNestedOneWithoutTestResultsInput
    student: UserCreateNestedOneWithoutStudentResultsInput
    teacher: UserCreateNestedOneWithoutGradedTestsResultsInput
  }

  export type TestResultUncheckedCreateInput = {
    id?: number
    result: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    testId: number
    studentId: number
    teacherId: number
  }

  export type TestResultUpdateInput = {
    result?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutTestResultsNestedInput
    student?: UserUpdateOneRequiredWithoutStudentResultsNestedInput
    teacher?: UserUpdateOneRequiredWithoutGradedTestsResultsNestedInput
  }

  export type TestResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    result?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultCreateManyInput = {
    id?: number
    result: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    testId: number
    studentId: number
    teacherId: number
  }

  export type TestResultUpdateManyMutationInput = {
    result?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    result?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CourseEnrollmentListRelationFilter = {
    every?: CourseEnrollmentWhereInput
    some?: CourseEnrollmentWhereInput
    none?: CourseEnrollmentWhereInput
  }

  export type TestResultListRelationFilter = {
    every?: TestResultWhereInput
    some?: TestResultWhereInput
    none?: TestResultWhereInput
  }

  export type CourseEnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    socialMedia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type TestListRelationFilter = {
    every?: TestWhereInput
    some?: TestWhereInput
    none?: TestWhereInput
  }

  export type TestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type EnumuserRoleFilter = {
    equals?: userRole
    in?: Enumerable<userRole>
    notIn?: Enumerable<userRole>
    not?: NestedEnumuserRoleFilter | userRole
  }

  export type CourseRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CourseEnrollmentCourseIdMemberIdCompoundUniqueInput = {
    courseId: number
    memberId: number
  }

  export type CourseEnrollmentCountOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRole?: SortOrder
    courseId?: SortOrder
    memberId?: SortOrder
  }

  export type CourseEnrollmentAvgOrderByAggregateInput = {
    courseId?: SortOrder
    memberId?: SortOrder
  }

  export type CourseEnrollmentMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRole?: SortOrder
    courseId?: SortOrder
    memberId?: SortOrder
  }

  export type CourseEnrollmentMinOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRole?: SortOrder
    courseId?: SortOrder
    memberId?: SortOrder
  }

  export type CourseEnrollmentSumOrderByAggregateInput = {
    courseId?: SortOrder
    memberId?: SortOrder
  }

  export type EnumuserRoleWithAggregatesFilter = {
    equals?: userRole
    in?: Enumerable<userRole>
    notIn?: Enumerable<userRole>
    not?: NestedEnumuserRoleWithAggregatesFilter | userRole
    _count?: NestedIntFilter
    _min?: NestedEnumuserRoleFilter
    _max?: NestedEnumuserRoleFilter
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    testDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    testDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    testDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type TestRelationFilter = {
    is?: TestWhereInput
    isNot?: TestWhereInput
  }

  export type TestResultCountOrderByAggregateInput = {
    id?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testId?: SortOrder
    studentId?: SortOrder
    teacherId?: SortOrder
  }

  export type TestResultAvgOrderByAggregateInput = {
    id?: SortOrder
    result?: SortOrder
    testId?: SortOrder
    studentId?: SortOrder
    teacherId?: SortOrder
  }

  export type TestResultMaxOrderByAggregateInput = {
    id?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testId?: SortOrder
    studentId?: SortOrder
    teacherId?: SortOrder
  }

  export type TestResultMinOrderByAggregateInput = {
    id?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testId?: SortOrder
    studentId?: SortOrder
    teacherId?: SortOrder
  }

  export type TestResultSumOrderByAggregateInput = {
    id?: SortOrder
    result?: SortOrder
    testId?: SortOrder
    studentId?: SortOrder
    teacherId?: SortOrder
  }

  export type CourseEnrollmentCreateNestedManyWithoutMemberInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutMemberInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutMemberInput>
    createMany?: CourseEnrollmentCreateManyMemberInputEnvelope
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
  }

  export type TestResultCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutStudentInput>, Enumerable<TestResultUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutStudentInput>
    createMany?: TestResultCreateManyStudentInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type TestResultCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutTeacherInput>, Enumerable<TestResultUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutTeacherInput>
    createMany?: TestResultCreateManyTeacherInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type CourseEnrollmentUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutMemberInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutMemberInput>
    createMany?: CourseEnrollmentCreateManyMemberInputEnvelope
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
  }

  export type TestResultUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutStudentInput>, Enumerable<TestResultUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutStudentInput>
    createMany?: TestResultCreateManyStudentInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type TestResultUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutTeacherInput>, Enumerable<TestResultUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutTeacherInput>
    createMany?: TestResultCreateManyTeacherInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourseEnrollmentUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutMemberInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutMemberInput>
    upsert?: Enumerable<CourseEnrollmentUpsertWithWhereUniqueWithoutMemberInput>
    createMany?: CourseEnrollmentCreateManyMemberInputEnvelope
    set?: Enumerable<CourseEnrollmentWhereUniqueInput>
    disconnect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    delete?: Enumerable<CourseEnrollmentWhereUniqueInput>
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    update?: Enumerable<CourseEnrollmentUpdateWithWhereUniqueWithoutMemberInput>
    updateMany?: Enumerable<CourseEnrollmentUpdateManyWithWhereWithoutMemberInput>
    deleteMany?: Enumerable<CourseEnrollmentScalarWhereInput>
  }

  export type TestResultUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutStudentInput>, Enumerable<TestResultUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: TestResultCreateManyStudentInputEnvelope
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    connect?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type TestResultUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutTeacherInput>, Enumerable<TestResultUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutTeacherInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutTeacherInput>
    createMany?: TestResultCreateManyTeacherInputEnvelope
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    connect?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutTeacherInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutTeacherInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseEnrollmentUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutMemberInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutMemberInput>
    upsert?: Enumerable<CourseEnrollmentUpsertWithWhereUniqueWithoutMemberInput>
    createMany?: CourseEnrollmentCreateManyMemberInputEnvelope
    set?: Enumerable<CourseEnrollmentWhereUniqueInput>
    disconnect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    delete?: Enumerable<CourseEnrollmentWhereUniqueInput>
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    update?: Enumerable<CourseEnrollmentUpdateWithWhereUniqueWithoutMemberInput>
    updateMany?: Enumerable<CourseEnrollmentUpdateManyWithWhereWithoutMemberInput>
    deleteMany?: Enumerable<CourseEnrollmentScalarWhereInput>
  }

  export type TestResultUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutStudentInput>, Enumerable<TestResultUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: TestResultCreateManyStudentInputEnvelope
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    connect?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type TestResultUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutTeacherInput>, Enumerable<TestResultUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutTeacherInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutTeacherInput>
    createMany?: TestResultCreateManyTeacherInputEnvelope
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    connect?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutTeacherInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutTeacherInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type CourseEnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutCourseInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutCourseInput>
    createMany?: CourseEnrollmentCreateManyCourseInputEnvelope
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
  }

  export type TestCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<TestCreateWithoutCourseInput>, Enumerable<TestUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<TestCreateOrConnectWithoutCourseInput>
    createMany?: TestCreateManyCourseInputEnvelope
    connect?: Enumerable<TestWhereUniqueInput>
  }

  export type CourseEnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutCourseInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutCourseInput>
    createMany?: CourseEnrollmentCreateManyCourseInputEnvelope
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
  }

  export type TestUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<TestCreateWithoutCourseInput>, Enumerable<TestUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<TestCreateOrConnectWithoutCourseInput>
    createMany?: TestCreateManyCourseInputEnvelope
    connect?: Enumerable<TestWhereUniqueInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CourseEnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutCourseInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<CourseEnrollmentUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: CourseEnrollmentCreateManyCourseInputEnvelope
    set?: Enumerable<CourseEnrollmentWhereUniqueInput>
    disconnect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    delete?: Enumerable<CourseEnrollmentWhereUniqueInput>
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    update?: Enumerable<CourseEnrollmentUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<CourseEnrollmentUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<CourseEnrollmentScalarWhereInput>
  }

  export type TestUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<TestCreateWithoutCourseInput>, Enumerable<TestUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<TestCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<TestUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: TestCreateManyCourseInputEnvelope
    set?: Enumerable<TestWhereUniqueInput>
    disconnect?: Enumerable<TestWhereUniqueInput>
    delete?: Enumerable<TestWhereUniqueInput>
    connect?: Enumerable<TestWhereUniqueInput>
    update?: Enumerable<TestUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<TestUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<TestScalarWhereInput>
  }

  export type CourseEnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutCourseInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<CourseEnrollmentUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: CourseEnrollmentCreateManyCourseInputEnvelope
    set?: Enumerable<CourseEnrollmentWhereUniqueInput>
    disconnect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    delete?: Enumerable<CourseEnrollmentWhereUniqueInput>
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    update?: Enumerable<CourseEnrollmentUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<CourseEnrollmentUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<CourseEnrollmentScalarWhereInput>
  }

  export type TestUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<TestCreateWithoutCourseInput>, Enumerable<TestUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<TestCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<TestUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: TestCreateManyCourseInputEnvelope
    set?: Enumerable<TestWhereUniqueInput>
    disconnect?: Enumerable<TestWhereUniqueInput>
    delete?: Enumerable<TestWhereUniqueInput>
    connect?: Enumerable<TestWhereUniqueInput>
    update?: Enumerable<TestUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<TestUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<TestScalarWhereInput>
  }

  export type CourseCreateNestedOneWithoutMembersInput = {
    create?: XOR<CourseCreateWithoutMembersInput, CourseUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutMembersInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumuserRoleFieldUpdateOperationsInput = {
    set?: userRole
  }

  export type CourseUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<CourseCreateWithoutMembersInput, CourseUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutMembersInput
    upsert?: CourseUpsertWithoutMembersInput
    connect?: CourseWhereUniqueInput
    update?: XOR<CourseUpdateWithoutMembersInput, CourseUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    upsert?: UserUpsertWithoutCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type TestResultCreateNestedManyWithoutTestInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutTestInput>, Enumerable<TestResultUncheckedCreateWithoutTestInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutTestInput>
    createMany?: TestResultCreateManyTestInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type CourseCreateNestedOneWithoutTestsInput = {
    create?: XOR<CourseCreateWithoutTestsInput, CourseUncheckedCreateWithoutTestsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTestsInput
    connect?: CourseWhereUniqueInput
  }

  export type TestResultUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutTestInput>, Enumerable<TestResultUncheckedCreateWithoutTestInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutTestInput>
    createMany?: TestResultCreateManyTestInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type TestResultUpdateManyWithoutTestNestedInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutTestInput>, Enumerable<TestResultUncheckedCreateWithoutTestInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutTestInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutTestInput>
    createMany?: TestResultCreateManyTestInputEnvelope
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    connect?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutTestInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutTestInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type CourseUpdateOneRequiredWithoutTestsNestedInput = {
    create?: XOR<CourseCreateWithoutTestsInput, CourseUncheckedCreateWithoutTestsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTestsInput
    upsert?: CourseUpsertWithoutTestsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<CourseUpdateWithoutTestsInput, CourseUncheckedUpdateWithoutTestsInput>
  }

  export type TestResultUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutTestInput>, Enumerable<TestResultUncheckedCreateWithoutTestInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutTestInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutTestInput>
    createMany?: TestResultCreateManyTestInputEnvelope
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    connect?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutTestInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutTestInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type TestCreateNestedOneWithoutTestResultsInput = {
    create?: XOR<TestCreateWithoutTestResultsInput, TestUncheckedCreateWithoutTestResultsInput>
    connectOrCreate?: TestCreateOrConnectWithoutTestResultsInput
    connect?: TestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentResultsInput = {
    create?: XOR<UserCreateWithoutStudentResultsInput, UserUncheckedCreateWithoutStudentResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentResultsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGradedTestsResultsInput = {
    create?: XOR<UserCreateWithoutGradedTestsResultsInput, UserUncheckedCreateWithoutGradedTestsResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGradedTestsResultsInput
    connect?: UserWhereUniqueInput
  }

  export type TestUpdateOneRequiredWithoutTestResultsNestedInput = {
    create?: XOR<TestCreateWithoutTestResultsInput, TestUncheckedCreateWithoutTestResultsInput>
    connectOrCreate?: TestCreateOrConnectWithoutTestResultsInput
    upsert?: TestUpsertWithoutTestResultsInput
    connect?: TestWhereUniqueInput
    update?: XOR<TestUpdateWithoutTestResultsInput, TestUncheckedUpdateWithoutTestResultsInput>
  }

  export type UserUpdateOneRequiredWithoutStudentResultsNestedInput = {
    create?: XOR<UserCreateWithoutStudentResultsInput, UserUncheckedCreateWithoutStudentResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentResultsInput
    upsert?: UserUpsertWithoutStudentResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutStudentResultsInput, UserUncheckedUpdateWithoutStudentResultsInput>
  }

  export type UserUpdateOneRequiredWithoutGradedTestsResultsNestedInput = {
    create?: XOR<UserCreateWithoutGradedTestsResultsInput, UserUncheckedCreateWithoutGradedTestsResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGradedTestsResultsInput
    upsert?: UserUpsertWithoutGradedTestsResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutGradedTestsResultsInput, UserUncheckedUpdateWithoutGradedTestsResultsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type NestedEnumuserRoleFilter = {
    equals?: userRole
    in?: Enumerable<userRole>
    notIn?: Enumerable<userRole>
    not?: NestedEnumuserRoleFilter | userRole
  }

  export type NestedEnumuserRoleWithAggregatesFilter = {
    equals?: userRole
    in?: Enumerable<userRole>
    notIn?: Enumerable<userRole>
    not?: NestedEnumuserRoleWithAggregatesFilter | userRole
    _count?: NestedIntFilter
    _min?: NestedEnumuserRoleFilter
    _max?: NestedEnumuserRoleFilter
  }

  export type CourseEnrollmentCreateWithoutMemberInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    userRole: userRole
    course: CourseCreateNestedOneWithoutMembersInput
  }

  export type CourseEnrollmentUncheckedCreateWithoutMemberInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    userRole: userRole
    courseId: number
  }

  export type CourseEnrollmentCreateOrConnectWithoutMemberInput = {
    where: CourseEnrollmentWhereUniqueInput
    create: XOR<CourseEnrollmentCreateWithoutMemberInput, CourseEnrollmentUncheckedCreateWithoutMemberInput>
  }

  export type CourseEnrollmentCreateManyMemberInputEnvelope = {
    data: Enumerable<CourseEnrollmentCreateManyMemberInput>
    skipDuplicates?: boolean
  }

  export type TestResultCreateWithoutStudentInput = {
    result: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    test: TestCreateNestedOneWithoutTestResultsInput
    teacher: UserCreateNestedOneWithoutGradedTestsResultsInput
  }

  export type TestResultUncheckedCreateWithoutStudentInput = {
    id?: number
    result: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    testId: number
    teacherId: number
  }

  export type TestResultCreateOrConnectWithoutStudentInput = {
    where: TestResultWhereUniqueInput
    create: XOR<TestResultCreateWithoutStudentInput, TestResultUncheckedCreateWithoutStudentInput>
  }

  export type TestResultCreateManyStudentInputEnvelope = {
    data: Enumerable<TestResultCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type TestResultCreateWithoutTeacherInput = {
    result: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    test: TestCreateNestedOneWithoutTestResultsInput
    student: UserCreateNestedOneWithoutStudentResultsInput
  }

  export type TestResultUncheckedCreateWithoutTeacherInput = {
    id?: number
    result: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    testId: number
    studentId: number
  }

  export type TestResultCreateOrConnectWithoutTeacherInput = {
    where: TestResultWhereUniqueInput
    create: XOR<TestResultCreateWithoutTeacherInput, TestResultUncheckedCreateWithoutTeacherInput>
  }

  export type TestResultCreateManyTeacherInputEnvelope = {
    data: Enumerable<TestResultCreateManyTeacherInput>
    skipDuplicates?: boolean
  }

  export type CourseEnrollmentUpsertWithWhereUniqueWithoutMemberInput = {
    where: CourseEnrollmentWhereUniqueInput
    update: XOR<CourseEnrollmentUpdateWithoutMemberInput, CourseEnrollmentUncheckedUpdateWithoutMemberInput>
    create: XOR<CourseEnrollmentCreateWithoutMemberInput, CourseEnrollmentUncheckedCreateWithoutMemberInput>
  }

  export type CourseEnrollmentUpdateWithWhereUniqueWithoutMemberInput = {
    where: CourseEnrollmentWhereUniqueInput
    data: XOR<CourseEnrollmentUpdateWithoutMemberInput, CourseEnrollmentUncheckedUpdateWithoutMemberInput>
  }

  export type CourseEnrollmentUpdateManyWithWhereWithoutMemberInput = {
    where: CourseEnrollmentScalarWhereInput
    data: XOR<CourseEnrollmentUpdateManyMutationInput, CourseEnrollmentUncheckedUpdateManyWithoutCoursesInput>
  }

  export type CourseEnrollmentScalarWhereInput = {
    AND?: Enumerable<CourseEnrollmentScalarWhereInput>
    OR?: Enumerable<CourseEnrollmentScalarWhereInput>
    NOT?: Enumerable<CourseEnrollmentScalarWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userRole?: EnumuserRoleFilter | userRole
    courseId?: IntFilter | number
    memberId?: IntFilter | number
  }

  export type TestResultUpsertWithWhereUniqueWithoutStudentInput = {
    where: TestResultWhereUniqueInput
    update: XOR<TestResultUpdateWithoutStudentInput, TestResultUncheckedUpdateWithoutStudentInput>
    create: XOR<TestResultCreateWithoutStudentInput, TestResultUncheckedCreateWithoutStudentInput>
  }

  export type TestResultUpdateWithWhereUniqueWithoutStudentInput = {
    where: TestResultWhereUniqueInput
    data: XOR<TestResultUpdateWithoutStudentInput, TestResultUncheckedUpdateWithoutStudentInput>
  }

  export type TestResultUpdateManyWithWhereWithoutStudentInput = {
    where: TestResultScalarWhereInput
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyWithoutStudentResultsInput>
  }

  export type TestResultScalarWhereInput = {
    AND?: Enumerable<TestResultScalarWhereInput>
    OR?: Enumerable<TestResultScalarWhereInput>
    NOT?: Enumerable<TestResultScalarWhereInput>
    id?: IntFilter | number
    result?: DecimalFilter | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    testId?: IntFilter | number
    studentId?: IntFilter | number
    teacherId?: IntFilter | number
  }

  export type TestResultUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TestResultWhereUniqueInput
    update: XOR<TestResultUpdateWithoutTeacherInput, TestResultUncheckedUpdateWithoutTeacherInput>
    create: XOR<TestResultCreateWithoutTeacherInput, TestResultUncheckedCreateWithoutTeacherInput>
  }

  export type TestResultUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TestResultWhereUniqueInput
    data: XOR<TestResultUpdateWithoutTeacherInput, TestResultUncheckedUpdateWithoutTeacherInput>
  }

  export type TestResultUpdateManyWithWhereWithoutTeacherInput = {
    where: TestResultScalarWhereInput
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyWithoutGradedTestsResultsInput>
  }

  export type CourseEnrollmentCreateWithoutCourseInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    userRole: userRole
    member: UserCreateNestedOneWithoutCoursesInput
  }

  export type CourseEnrollmentUncheckedCreateWithoutCourseInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    userRole: userRole
    memberId: number
  }

  export type CourseEnrollmentCreateOrConnectWithoutCourseInput = {
    where: CourseEnrollmentWhereUniqueInput
    create: XOR<CourseEnrollmentCreateWithoutCourseInput, CourseEnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type CourseEnrollmentCreateManyCourseInputEnvelope = {
    data: Enumerable<CourseEnrollmentCreateManyCourseInput>
    skipDuplicates?: boolean
  }

  export type TestCreateWithoutCourseInput = {
    title: string
    testDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    testResults?: TestResultCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutCourseInput = {
    id?: number
    title: string
    testDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    testResults?: TestResultUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutCourseInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutCourseInput, TestUncheckedCreateWithoutCourseInput>
  }

  export type TestCreateManyCourseInputEnvelope = {
    data: Enumerable<TestCreateManyCourseInput>
    skipDuplicates?: boolean
  }

  export type CourseEnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseEnrollmentWhereUniqueInput
    update: XOR<CourseEnrollmentUpdateWithoutCourseInput, CourseEnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseEnrollmentCreateWithoutCourseInput, CourseEnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type CourseEnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseEnrollmentWhereUniqueInput
    data: XOR<CourseEnrollmentUpdateWithoutCourseInput, CourseEnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type CourseEnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: CourseEnrollmentScalarWhereInput
    data: XOR<CourseEnrollmentUpdateManyMutationInput, CourseEnrollmentUncheckedUpdateManyWithoutMembersInput>
  }

  export type TestUpsertWithWhereUniqueWithoutCourseInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutCourseInput, TestUncheckedUpdateWithoutCourseInput>
    create: XOR<TestCreateWithoutCourseInput, TestUncheckedCreateWithoutCourseInput>
  }

  export type TestUpdateWithWhereUniqueWithoutCourseInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutCourseInput, TestUncheckedUpdateWithoutCourseInput>
  }

  export type TestUpdateManyWithWhereWithoutCourseInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutTestsInput>
  }

  export type TestScalarWhereInput = {
    AND?: Enumerable<TestScalarWhereInput>
    OR?: Enumerable<TestScalarWhereInput>
    NOT?: Enumerable<TestScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    testDate?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    courseId?: IntFilter | number
  }

  export type CourseCreateWithoutMembersInput = {
    title: string
    description: string
    duration: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tests?: TestCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutMembersInput = {
    id?: number
    title: string
    description: string
    duration: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tests?: TestUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutMembersInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutMembersInput, CourseUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutCoursesInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    studentResults?: TestResultCreateNestedManyWithoutStudentInput
    gradedTestsResults?: TestResultCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateWithoutCoursesInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    studentResults?: TestResultUncheckedCreateNestedManyWithoutStudentInput
    gradedTestsResults?: TestResultUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type CourseUpsertWithoutMembersInput = {
    update: XOR<CourseUpdateWithoutMembersInput, CourseUncheckedUpdateWithoutMembersInput>
    create: XOR<CourseCreateWithoutMembersInput, CourseUncheckedCreateWithoutMembersInput>
  }

  export type CourseUpdateWithoutMembersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: TestUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: TestUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutCoursesInput = {
    update: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type UserUpdateWithoutCoursesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentResults?: TestResultUpdateManyWithoutStudentNestedInput
    gradedTestsResults?: TestResultUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentResults?: TestResultUncheckedUpdateManyWithoutStudentNestedInput
    gradedTestsResults?: TestResultUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TestResultCreateWithoutTestInput = {
    result: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: UserCreateNestedOneWithoutStudentResultsInput
    teacher: UserCreateNestedOneWithoutGradedTestsResultsInput
  }

  export type TestResultUncheckedCreateWithoutTestInput = {
    id?: number
    result: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: number
    teacherId: number
  }

  export type TestResultCreateOrConnectWithoutTestInput = {
    where: TestResultWhereUniqueInput
    create: XOR<TestResultCreateWithoutTestInput, TestResultUncheckedCreateWithoutTestInput>
  }

  export type TestResultCreateManyTestInputEnvelope = {
    data: Enumerable<TestResultCreateManyTestInput>
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutTestsInput = {
    title: string
    description: string
    duration: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CourseEnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTestsInput = {
    id?: number
    title: string
    description: string
    duration: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CourseEnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTestsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTestsInput, CourseUncheckedCreateWithoutTestsInput>
  }

  export type TestResultUpsertWithWhereUniqueWithoutTestInput = {
    where: TestResultWhereUniqueInput
    update: XOR<TestResultUpdateWithoutTestInput, TestResultUncheckedUpdateWithoutTestInput>
    create: XOR<TestResultCreateWithoutTestInput, TestResultUncheckedCreateWithoutTestInput>
  }

  export type TestResultUpdateWithWhereUniqueWithoutTestInput = {
    where: TestResultWhereUniqueInput
    data: XOR<TestResultUpdateWithoutTestInput, TestResultUncheckedUpdateWithoutTestInput>
  }

  export type TestResultUpdateManyWithWhereWithoutTestInput = {
    where: TestResultScalarWhereInput
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyWithoutTestResultsInput>
  }

  export type CourseUpsertWithoutTestsInput = {
    update: XOR<CourseUpdateWithoutTestsInput, CourseUncheckedUpdateWithoutTestsInput>
    create: XOR<CourseCreateWithoutTestsInput, CourseUncheckedCreateWithoutTestsInput>
  }

  export type CourseUpdateWithoutTestsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CourseEnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CourseEnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type TestCreateWithoutTestResultsInput = {
    title: string
    testDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutTestResultsInput = {
    id?: number
    title: string
    testDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: number
  }

  export type TestCreateOrConnectWithoutTestResultsInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutTestResultsInput, TestUncheckedCreateWithoutTestResultsInput>
  }

  export type UserCreateWithoutStudentResultsInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseEnrollmentCreateNestedManyWithoutMemberInput
    gradedTestsResults?: TestResultCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateWithoutStudentResultsInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseEnrollmentUncheckedCreateNestedManyWithoutMemberInput
    gradedTestsResults?: TestResultUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutStudentResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentResultsInput, UserUncheckedCreateWithoutStudentResultsInput>
  }

  export type UserCreateWithoutGradedTestsResultsInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseEnrollmentCreateNestedManyWithoutMemberInput
    studentResults?: TestResultCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutGradedTestsResultsInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseEnrollmentUncheckedCreateNestedManyWithoutMemberInput
    studentResults?: TestResultUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutGradedTestsResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGradedTestsResultsInput, UserUncheckedCreateWithoutGradedTestsResultsInput>
  }

  export type TestUpsertWithoutTestResultsInput = {
    update: XOR<TestUpdateWithoutTestResultsInput, TestUncheckedUpdateWithoutTestResultsInput>
    create: XOR<TestCreateWithoutTestResultsInput, TestUncheckedCreateWithoutTestResultsInput>
  }

  export type TestUpdateWithoutTestResultsInput = {
    title?: StringFieldUpdateOperationsInput | string
    testDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateWithoutTestResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutStudentResultsInput = {
    update: XOR<UserUpdateWithoutStudentResultsInput, UserUncheckedUpdateWithoutStudentResultsInput>
    create: XOR<UserCreateWithoutStudentResultsInput, UserUncheckedCreateWithoutStudentResultsInput>
  }

  export type UserUpdateWithoutStudentResultsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseEnrollmentUpdateManyWithoutMemberNestedInput
    gradedTestsResults?: TestResultUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseEnrollmentUncheckedUpdateManyWithoutMemberNestedInput
    gradedTestsResults?: TestResultUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type UserUpsertWithoutGradedTestsResultsInput = {
    update: XOR<UserUpdateWithoutGradedTestsResultsInput, UserUncheckedUpdateWithoutGradedTestsResultsInput>
    create: XOR<UserCreateWithoutGradedTestsResultsInput, UserUncheckedCreateWithoutGradedTestsResultsInput>
  }

  export type UserUpdateWithoutGradedTestsResultsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseEnrollmentUpdateManyWithoutMemberNestedInput
    studentResults?: TestResultUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutGradedTestsResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socialMedia?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseEnrollmentUncheckedUpdateManyWithoutMemberNestedInput
    studentResults?: TestResultUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseEnrollmentCreateManyMemberInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    userRole: userRole
    courseId: number
  }

  export type TestResultCreateManyStudentInput = {
    id?: number
    result: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    testId: number
    teacherId: number
  }

  export type TestResultCreateManyTeacherInput = {
    id?: number
    result: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    testId: number
    studentId: number
  }

  export type CourseEnrollmentUpdateWithoutMemberInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: EnumuserRoleFieldUpdateOperationsInput | userRole
    course?: CourseUpdateOneRequiredWithoutMembersNestedInput
  }

  export type CourseEnrollmentUncheckedUpdateWithoutMemberInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: EnumuserRoleFieldUpdateOperationsInput | userRole
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseEnrollmentUncheckedUpdateManyWithoutCoursesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: EnumuserRoleFieldUpdateOperationsInput | userRole
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultUpdateWithoutStudentInput = {
    result?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutTestResultsNestedInput
    teacher?: UserUpdateOneRequiredWithoutGradedTestsResultsNestedInput
  }

  export type TestResultUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    result?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultUncheckedUpdateManyWithoutStudentResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    result?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultUpdateWithoutTeacherInput = {
    result?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutTestResultsNestedInput
    student?: UserUpdateOneRequiredWithoutStudentResultsNestedInput
  }

  export type TestResultUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    result?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultUncheckedUpdateManyWithoutGradedTestsResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    result?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseEnrollmentCreateManyCourseInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    userRole: userRole
    memberId: number
  }

  export type TestCreateManyCourseInput = {
    id?: number
    title: string
    testDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseEnrollmentUpdateWithoutCourseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: EnumuserRoleFieldUpdateOperationsInput | userRole
    member?: UserUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseEnrollmentUncheckedUpdateWithoutCourseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: EnumuserRoleFieldUpdateOperationsInput | userRole
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseEnrollmentUncheckedUpdateManyWithoutMembersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: EnumuserRoleFieldUpdateOperationsInput | userRole
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type TestUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    testDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testResults?: TestResultUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testResults?: TestResultUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateManyWithoutTestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultCreateManyTestInput = {
    id?: number
    result: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: number
    teacherId: number
  }

  export type TestResultUpdateWithoutTestInput = {
    result?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentResultsNestedInput
    teacher?: UserUpdateOneRequiredWithoutGradedTestsResultsNestedInput
  }

  export type TestResultUncheckedUpdateWithoutTestInput = {
    id?: IntFieldUpdateOperationsInput | number
    result?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultUncheckedUpdateManyWithoutTestResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    result?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
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