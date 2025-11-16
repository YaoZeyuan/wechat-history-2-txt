
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
 * Model RContact
 * 
 */
export type RContact = $Result.DefaultSelection<Prisma.$RContactPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model ImgFlag
 * 
 */
export type ImgFlag = $Result.DefaultSelection<Prisma.$ImgFlagPayload>
/**
 * Model EmojiInfoDesc
 * 
 */
export type EmojiInfoDesc = $Result.DefaultSelection<Prisma.$EmojiInfoDescPayload>
/**
 * Model EmojiInfo
 * 
 */
export type EmojiInfo = $Result.DefaultSelection<Prisma.$EmojiInfoPayload>
/**
 * Model ImgInfo2
 * 
 */
export type ImgInfo2 = $Result.DefaultSelection<Prisma.$ImgInfo2Payload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RContacts
 * const rContacts = await prisma.rContact.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more RContacts
   * const rContacts = await prisma.rContact.findMany()
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
   * `prisma.rContact`: Exposes CRUD operations for the **RContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RContacts
    * const rContacts = await prisma.rContact.findMany()
    * ```
    */
  get rContact(): Prisma.RContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRooms
    * const chatRooms = await prisma.chatRoom.findMany()
    * ```
    */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imgFlag`: Exposes CRUD operations for the **ImgFlag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImgFlags
    * const imgFlags = await prisma.imgFlag.findMany()
    * ```
    */
  get imgFlag(): Prisma.ImgFlagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emojiInfoDesc`: Exposes CRUD operations for the **EmojiInfoDesc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmojiInfoDescs
    * const emojiInfoDescs = await prisma.emojiInfoDesc.findMany()
    * ```
    */
  get emojiInfoDesc(): Prisma.EmojiInfoDescDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emojiInfo`: Exposes CRUD operations for the **EmojiInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmojiInfos
    * const emojiInfos = await prisma.emojiInfo.findMany()
    * ```
    */
  get emojiInfo(): Prisma.EmojiInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imgInfo2`: Exposes CRUD operations for the **ImgInfo2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImgInfo2s
    * const imgInfo2s = await prisma.imgInfo2.findMany()
    * ```
    */
  get imgInfo2(): Prisma.ImgInfo2Delegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    RContact: 'RContact',
    Message: 'Message',
    ChatRoom: 'ChatRoom',
    ImgFlag: 'ImgFlag',
    EmojiInfoDesc: 'EmojiInfoDesc',
    EmojiInfo: 'EmojiInfo',
    ImgInfo2: 'ImgInfo2'
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
      modelProps: "rContact" | "message" | "chatRoom" | "imgFlag" | "emojiInfoDesc" | "emojiInfo" | "imgInfo2"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RContact: {
        payload: Prisma.$RContactPayload<ExtArgs>
        fields: Prisma.RContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RContactPayload>
          }
          findFirst: {
            args: Prisma.RContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RContactPayload>
          }
          findMany: {
            args: Prisma.RContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RContactPayload>[]
          }
          create: {
            args: Prisma.RContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RContactPayload>
          }
          createMany: {
            args: Prisma.RContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RContactPayload>[]
          }
          delete: {
            args: Prisma.RContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RContactPayload>
          }
          update: {
            args: Prisma.RContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RContactPayload>
          }
          deleteMany: {
            args: Prisma.RContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RContactPayload>[]
          }
          upsert: {
            args: Prisma.RContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RContactPayload>
          }
          aggregate: {
            args: Prisma.RContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRContact>
          }
          groupBy: {
            args: Prisma.RContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<RContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.RContactCountArgs<ExtArgs>
            result: $Utils.Optional<RContactCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      ImgFlag: {
        payload: Prisma.$ImgFlagPayload<ExtArgs>
        fields: Prisma.ImgFlagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImgFlagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgFlagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImgFlagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgFlagPayload>
          }
          findFirst: {
            args: Prisma.ImgFlagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgFlagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImgFlagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgFlagPayload>
          }
          findMany: {
            args: Prisma.ImgFlagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgFlagPayload>[]
          }
          create: {
            args: Prisma.ImgFlagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgFlagPayload>
          }
          createMany: {
            args: Prisma.ImgFlagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImgFlagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgFlagPayload>[]
          }
          delete: {
            args: Prisma.ImgFlagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgFlagPayload>
          }
          update: {
            args: Prisma.ImgFlagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgFlagPayload>
          }
          deleteMany: {
            args: Prisma.ImgFlagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImgFlagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImgFlagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgFlagPayload>[]
          }
          upsert: {
            args: Prisma.ImgFlagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgFlagPayload>
          }
          aggregate: {
            args: Prisma.ImgFlagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImgFlag>
          }
          groupBy: {
            args: Prisma.ImgFlagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImgFlagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImgFlagCountArgs<ExtArgs>
            result: $Utils.Optional<ImgFlagCountAggregateOutputType> | number
          }
        }
      }
      EmojiInfoDesc: {
        payload: Prisma.$EmojiInfoDescPayload<ExtArgs>
        fields: Prisma.EmojiInfoDescFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmojiInfoDescFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoDescPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmojiInfoDescFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoDescPayload>
          }
          findFirst: {
            args: Prisma.EmojiInfoDescFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoDescPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmojiInfoDescFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoDescPayload>
          }
          findMany: {
            args: Prisma.EmojiInfoDescFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoDescPayload>[]
          }
          create: {
            args: Prisma.EmojiInfoDescCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoDescPayload>
          }
          createMany: {
            args: Prisma.EmojiInfoDescCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmojiInfoDescCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoDescPayload>[]
          }
          delete: {
            args: Prisma.EmojiInfoDescDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoDescPayload>
          }
          update: {
            args: Prisma.EmojiInfoDescUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoDescPayload>
          }
          deleteMany: {
            args: Prisma.EmojiInfoDescDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmojiInfoDescUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmojiInfoDescUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoDescPayload>[]
          }
          upsert: {
            args: Prisma.EmojiInfoDescUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoDescPayload>
          }
          aggregate: {
            args: Prisma.EmojiInfoDescAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmojiInfoDesc>
          }
          groupBy: {
            args: Prisma.EmojiInfoDescGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmojiInfoDescGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmojiInfoDescCountArgs<ExtArgs>
            result: $Utils.Optional<EmojiInfoDescCountAggregateOutputType> | number
          }
        }
      }
      EmojiInfo: {
        payload: Prisma.$EmojiInfoPayload<ExtArgs>
        fields: Prisma.EmojiInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmojiInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmojiInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoPayload>
          }
          findFirst: {
            args: Prisma.EmojiInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmojiInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoPayload>
          }
          findMany: {
            args: Prisma.EmojiInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoPayload>[]
          }
          create: {
            args: Prisma.EmojiInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoPayload>
          }
          createMany: {
            args: Prisma.EmojiInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmojiInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoPayload>[]
          }
          delete: {
            args: Prisma.EmojiInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoPayload>
          }
          update: {
            args: Prisma.EmojiInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoPayload>
          }
          deleteMany: {
            args: Prisma.EmojiInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmojiInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmojiInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoPayload>[]
          }
          upsert: {
            args: Prisma.EmojiInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmojiInfoPayload>
          }
          aggregate: {
            args: Prisma.EmojiInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmojiInfo>
          }
          groupBy: {
            args: Prisma.EmojiInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmojiInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmojiInfoCountArgs<ExtArgs>
            result: $Utils.Optional<EmojiInfoCountAggregateOutputType> | number
          }
        }
      }
      ImgInfo2: {
        payload: Prisma.$ImgInfo2Payload<ExtArgs>
        fields: Prisma.ImgInfo2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImgInfo2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgInfo2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImgInfo2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgInfo2Payload>
          }
          findFirst: {
            args: Prisma.ImgInfo2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgInfo2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImgInfo2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgInfo2Payload>
          }
          findMany: {
            args: Prisma.ImgInfo2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgInfo2Payload>[]
          }
          create: {
            args: Prisma.ImgInfo2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgInfo2Payload>
          }
          createMany: {
            args: Prisma.ImgInfo2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImgInfo2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgInfo2Payload>[]
          }
          delete: {
            args: Prisma.ImgInfo2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgInfo2Payload>
          }
          update: {
            args: Prisma.ImgInfo2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgInfo2Payload>
          }
          deleteMany: {
            args: Prisma.ImgInfo2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImgInfo2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImgInfo2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgInfo2Payload>[]
          }
          upsert: {
            args: Prisma.ImgInfo2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgInfo2Payload>
          }
          aggregate: {
            args: Prisma.ImgInfo2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImgInfo2>
          }
          groupBy: {
            args: Prisma.ImgInfo2GroupByArgs<ExtArgs>
            result: $Utils.Optional<ImgInfo2GroupByOutputType>[]
          }
          count: {
            args: Prisma.ImgInfo2CountArgs<ExtArgs>
            result: $Utils.Optional<ImgInfo2CountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    rContact?: RContactOmit
    message?: MessageOmit
    chatRoom?: ChatRoomOmit
    imgFlag?: ImgFlagOmit
    emojiInfoDesc?: EmojiInfoDescOmit
    emojiInfo?: EmojiInfoOmit
    imgInfo2?: ImgInfo2Omit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model RContact
   */

  export type AggregateRContact = {
    _count: RContactCountAggregateOutputType | null
    _avg: RContactAvgAggregateOutputType | null
    _sum: RContactSumAggregateOutputType | null
    _min: RContactMinAggregateOutputType | null
    _max: RContactMaxAggregateOutputType | null
  }

  export type RContactAvgAggregateOutputType = {
    showHead: number | null
    type: number | null
    uiType: number | null
    weiboFlag: number | null
    verifyFlag: number | null
    chatroomFlag: number | null
    deleteFlag: number | null
    usernameFlag: number | null
    createTime: number | null
  }

  export type RContactSumAggregateOutputType = {
    showHead: number | null
    type: number | null
    uiType: bigint | null
    weiboFlag: number | null
    verifyFlag: number | null
    chatroomFlag: number | null
    deleteFlag: number | null
    usernameFlag: bigint | null
    createTime: bigint | null
  }

  export type RContactMinAggregateOutputType = {
    username: string | null
    alias: string | null
    conRemark: string | null
    domainList: string | null
    nickname: string | null
    pyInitial: string | null
    quanPin: string | null
    showHead: number | null
    type: number | null
    uiType: bigint | null
    weiboFlag: number | null
    weiboNickname: string | null
    conRemarkPYFull: string | null
    conRemarkPYShort: string | null
    lvbuff: Bytes | null
    verifyFlag: number | null
    encryptUsername: string | null
    chatroomFlag: number | null
    deleteFlag: number | null
    contactLabelIds: string | null
    descWordingId: string | null
    openImAppid: string | null
    sourceExtInfo: string | null
    ticket: string | null
    usernameFlag: bigint | null
    contactExtra: Bytes | null
    createTime: bigint | null
  }

  export type RContactMaxAggregateOutputType = {
    username: string | null
    alias: string | null
    conRemark: string | null
    domainList: string | null
    nickname: string | null
    pyInitial: string | null
    quanPin: string | null
    showHead: number | null
    type: number | null
    uiType: bigint | null
    weiboFlag: number | null
    weiboNickname: string | null
    conRemarkPYFull: string | null
    conRemarkPYShort: string | null
    lvbuff: Bytes | null
    verifyFlag: number | null
    encryptUsername: string | null
    chatroomFlag: number | null
    deleteFlag: number | null
    contactLabelIds: string | null
    descWordingId: string | null
    openImAppid: string | null
    sourceExtInfo: string | null
    ticket: string | null
    usernameFlag: bigint | null
    contactExtra: Bytes | null
    createTime: bigint | null
  }

  export type RContactCountAggregateOutputType = {
    username: number
    alias: number
    conRemark: number
    domainList: number
    nickname: number
    pyInitial: number
    quanPin: number
    showHead: number
    type: number
    uiType: number
    weiboFlag: number
    weiboNickname: number
    conRemarkPYFull: number
    conRemarkPYShort: number
    lvbuff: number
    verifyFlag: number
    encryptUsername: number
    chatroomFlag: number
    deleteFlag: number
    contactLabelIds: number
    descWordingId: number
    openImAppid: number
    sourceExtInfo: number
    ticket: number
    usernameFlag: number
    contactExtra: number
    createTime: number
    _all: number
  }


  export type RContactAvgAggregateInputType = {
    showHead?: true
    type?: true
    uiType?: true
    weiboFlag?: true
    verifyFlag?: true
    chatroomFlag?: true
    deleteFlag?: true
    usernameFlag?: true
    createTime?: true
  }

  export type RContactSumAggregateInputType = {
    showHead?: true
    type?: true
    uiType?: true
    weiboFlag?: true
    verifyFlag?: true
    chatroomFlag?: true
    deleteFlag?: true
    usernameFlag?: true
    createTime?: true
  }

  export type RContactMinAggregateInputType = {
    username?: true
    alias?: true
    conRemark?: true
    domainList?: true
    nickname?: true
    pyInitial?: true
    quanPin?: true
    showHead?: true
    type?: true
    uiType?: true
    weiboFlag?: true
    weiboNickname?: true
    conRemarkPYFull?: true
    conRemarkPYShort?: true
    lvbuff?: true
    verifyFlag?: true
    encryptUsername?: true
    chatroomFlag?: true
    deleteFlag?: true
    contactLabelIds?: true
    descWordingId?: true
    openImAppid?: true
    sourceExtInfo?: true
    ticket?: true
    usernameFlag?: true
    contactExtra?: true
    createTime?: true
  }

  export type RContactMaxAggregateInputType = {
    username?: true
    alias?: true
    conRemark?: true
    domainList?: true
    nickname?: true
    pyInitial?: true
    quanPin?: true
    showHead?: true
    type?: true
    uiType?: true
    weiboFlag?: true
    weiboNickname?: true
    conRemarkPYFull?: true
    conRemarkPYShort?: true
    lvbuff?: true
    verifyFlag?: true
    encryptUsername?: true
    chatroomFlag?: true
    deleteFlag?: true
    contactLabelIds?: true
    descWordingId?: true
    openImAppid?: true
    sourceExtInfo?: true
    ticket?: true
    usernameFlag?: true
    contactExtra?: true
    createTime?: true
  }

  export type RContactCountAggregateInputType = {
    username?: true
    alias?: true
    conRemark?: true
    domainList?: true
    nickname?: true
    pyInitial?: true
    quanPin?: true
    showHead?: true
    type?: true
    uiType?: true
    weiboFlag?: true
    weiboNickname?: true
    conRemarkPYFull?: true
    conRemarkPYShort?: true
    lvbuff?: true
    verifyFlag?: true
    encryptUsername?: true
    chatroomFlag?: true
    deleteFlag?: true
    contactLabelIds?: true
    descWordingId?: true
    openImAppid?: true
    sourceExtInfo?: true
    ticket?: true
    usernameFlag?: true
    contactExtra?: true
    createTime?: true
    _all?: true
  }

  export type RContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RContact to aggregate.
     */
    where?: RContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RContacts to fetch.
     */
    orderBy?: RContactOrderByWithRelationInput | RContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RContacts
    **/
    _count?: true | RContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RContactMaxAggregateInputType
  }

  export type GetRContactAggregateType<T extends RContactAggregateArgs> = {
        [P in keyof T & keyof AggregateRContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRContact[P]>
      : GetScalarType<T[P], AggregateRContact[P]>
  }




  export type RContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RContactWhereInput
    orderBy?: RContactOrderByWithAggregationInput | RContactOrderByWithAggregationInput[]
    by: RContactScalarFieldEnum[] | RContactScalarFieldEnum
    having?: RContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RContactCountAggregateInputType | true
    _avg?: RContactAvgAggregateInputType
    _sum?: RContactSumAggregateInputType
    _min?: RContactMinAggregateInputType
    _max?: RContactMaxAggregateInputType
  }

  export type RContactGroupByOutputType = {
    username: string
    alias: string | null
    conRemark: string | null
    domainList: string | null
    nickname: string | null
    pyInitial: string | null
    quanPin: string | null
    showHead: number | null
    type: number | null
    uiType: bigint | null
    weiboFlag: number | null
    weiboNickname: string | null
    conRemarkPYFull: string | null
    conRemarkPYShort: string | null
    lvbuff: Bytes | null
    verifyFlag: number | null
    encryptUsername: string | null
    chatroomFlag: number | null
    deleteFlag: number | null
    contactLabelIds: string | null
    descWordingId: string | null
    openImAppid: string | null
    sourceExtInfo: string | null
    ticket: string | null
    usernameFlag: bigint | null
    contactExtra: Bytes | null
    createTime: bigint | null
    _count: RContactCountAggregateOutputType | null
    _avg: RContactAvgAggregateOutputType | null
    _sum: RContactSumAggregateOutputType | null
    _min: RContactMinAggregateOutputType | null
    _max: RContactMaxAggregateOutputType | null
  }

  type GetRContactGroupByPayload<T extends RContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RContactGroupByOutputType[P]>
            : GetScalarType<T[P], RContactGroupByOutputType[P]>
        }
      >
    >


  export type RContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    alias?: boolean
    conRemark?: boolean
    domainList?: boolean
    nickname?: boolean
    pyInitial?: boolean
    quanPin?: boolean
    showHead?: boolean
    type?: boolean
    uiType?: boolean
    weiboFlag?: boolean
    weiboNickname?: boolean
    conRemarkPYFull?: boolean
    conRemarkPYShort?: boolean
    lvbuff?: boolean
    verifyFlag?: boolean
    encryptUsername?: boolean
    chatroomFlag?: boolean
    deleteFlag?: boolean
    contactLabelIds?: boolean
    descWordingId?: boolean
    openImAppid?: boolean
    sourceExtInfo?: boolean
    ticket?: boolean
    usernameFlag?: boolean
    contactExtra?: boolean
    createTime?: boolean
  }, ExtArgs["result"]["rContact"]>

  export type RContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    alias?: boolean
    conRemark?: boolean
    domainList?: boolean
    nickname?: boolean
    pyInitial?: boolean
    quanPin?: boolean
    showHead?: boolean
    type?: boolean
    uiType?: boolean
    weiboFlag?: boolean
    weiboNickname?: boolean
    conRemarkPYFull?: boolean
    conRemarkPYShort?: boolean
    lvbuff?: boolean
    verifyFlag?: boolean
    encryptUsername?: boolean
    chatroomFlag?: boolean
    deleteFlag?: boolean
    contactLabelIds?: boolean
    descWordingId?: boolean
    openImAppid?: boolean
    sourceExtInfo?: boolean
    ticket?: boolean
    usernameFlag?: boolean
    contactExtra?: boolean
    createTime?: boolean
  }, ExtArgs["result"]["rContact"]>

  export type RContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    alias?: boolean
    conRemark?: boolean
    domainList?: boolean
    nickname?: boolean
    pyInitial?: boolean
    quanPin?: boolean
    showHead?: boolean
    type?: boolean
    uiType?: boolean
    weiboFlag?: boolean
    weiboNickname?: boolean
    conRemarkPYFull?: boolean
    conRemarkPYShort?: boolean
    lvbuff?: boolean
    verifyFlag?: boolean
    encryptUsername?: boolean
    chatroomFlag?: boolean
    deleteFlag?: boolean
    contactLabelIds?: boolean
    descWordingId?: boolean
    openImAppid?: boolean
    sourceExtInfo?: boolean
    ticket?: boolean
    usernameFlag?: boolean
    contactExtra?: boolean
    createTime?: boolean
  }, ExtArgs["result"]["rContact"]>

  export type RContactSelectScalar = {
    username?: boolean
    alias?: boolean
    conRemark?: boolean
    domainList?: boolean
    nickname?: boolean
    pyInitial?: boolean
    quanPin?: boolean
    showHead?: boolean
    type?: boolean
    uiType?: boolean
    weiboFlag?: boolean
    weiboNickname?: boolean
    conRemarkPYFull?: boolean
    conRemarkPYShort?: boolean
    lvbuff?: boolean
    verifyFlag?: boolean
    encryptUsername?: boolean
    chatroomFlag?: boolean
    deleteFlag?: boolean
    contactLabelIds?: boolean
    descWordingId?: boolean
    openImAppid?: boolean
    sourceExtInfo?: boolean
    ticket?: boolean
    usernameFlag?: boolean
    contactExtra?: boolean
    createTime?: boolean
  }

  export type RContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username" | "alias" | "conRemark" | "domainList" | "nickname" | "pyInitial" | "quanPin" | "showHead" | "type" | "uiType" | "weiboFlag" | "weiboNickname" | "conRemarkPYFull" | "conRemarkPYShort" | "lvbuff" | "verifyFlag" | "encryptUsername" | "chatroomFlag" | "deleteFlag" | "contactLabelIds" | "descWordingId" | "openImAppid" | "sourceExtInfo" | "ticket" | "usernameFlag" | "contactExtra" | "createTime", ExtArgs["result"]["rContact"]>

  export type $RContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RContact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      username: string
      alias: string | null
      conRemark: string | null
      domainList: string | null
      nickname: string | null
      pyInitial: string | null
      quanPin: string | null
      showHead: number | null
      type: number | null
      uiType: bigint | null
      weiboFlag: number | null
      weiboNickname: string | null
      conRemarkPYFull: string | null
      conRemarkPYShort: string | null
      lvbuff: Prisma.Bytes | null
      verifyFlag: number | null
      encryptUsername: string | null
      chatroomFlag: number | null
      deleteFlag: number | null
      contactLabelIds: string | null
      descWordingId: string | null
      openImAppid: string | null
      sourceExtInfo: string | null
      ticket: string | null
      usernameFlag: bigint | null
      contactExtra: Prisma.Bytes | null
      createTime: bigint | null
    }, ExtArgs["result"]["rContact"]>
    composites: {}
  }

  type RContactGetPayload<S extends boolean | null | undefined | RContactDefaultArgs> = $Result.GetResult<Prisma.$RContactPayload, S>

  type RContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RContactCountAggregateInputType | true
    }

  export interface RContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RContact'], meta: { name: 'RContact' } }
    /**
     * Find zero or one RContact that matches the filter.
     * @param {RContactFindUniqueArgs} args - Arguments to find a RContact
     * @example
     * // Get one RContact
     * const rContact = await prisma.rContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RContactFindUniqueArgs>(args: SelectSubset<T, RContactFindUniqueArgs<ExtArgs>>): Prisma__RContactClient<$Result.GetResult<Prisma.$RContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RContact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RContactFindUniqueOrThrowArgs} args - Arguments to find a RContact
     * @example
     * // Get one RContact
     * const rContact = await prisma.rContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RContactFindUniqueOrThrowArgs>(args: SelectSubset<T, RContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RContactClient<$Result.GetResult<Prisma.$RContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RContactFindFirstArgs} args - Arguments to find a RContact
     * @example
     * // Get one RContact
     * const rContact = await prisma.rContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RContactFindFirstArgs>(args?: SelectSubset<T, RContactFindFirstArgs<ExtArgs>>): Prisma__RContactClient<$Result.GetResult<Prisma.$RContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RContactFindFirstOrThrowArgs} args - Arguments to find a RContact
     * @example
     * // Get one RContact
     * const rContact = await prisma.rContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RContactFindFirstOrThrowArgs>(args?: SelectSubset<T, RContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__RContactClient<$Result.GetResult<Prisma.$RContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RContacts
     * const rContacts = await prisma.rContact.findMany()
     * 
     * // Get first 10 RContacts
     * const rContacts = await prisma.rContact.findMany({ take: 10 })
     * 
     * // Only select the `username`
     * const rContactWithUsernameOnly = await prisma.rContact.findMany({ select: { username: true } })
     * 
     */
    findMany<T extends RContactFindManyArgs>(args?: SelectSubset<T, RContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RContact.
     * @param {RContactCreateArgs} args - Arguments to create a RContact.
     * @example
     * // Create one RContact
     * const RContact = await prisma.rContact.create({
     *   data: {
     *     // ... data to create a RContact
     *   }
     * })
     * 
     */
    create<T extends RContactCreateArgs>(args: SelectSubset<T, RContactCreateArgs<ExtArgs>>): Prisma__RContactClient<$Result.GetResult<Prisma.$RContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RContacts.
     * @param {RContactCreateManyArgs} args - Arguments to create many RContacts.
     * @example
     * // Create many RContacts
     * const rContact = await prisma.rContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RContactCreateManyArgs>(args?: SelectSubset<T, RContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RContacts and returns the data saved in the database.
     * @param {RContactCreateManyAndReturnArgs} args - Arguments to create many RContacts.
     * @example
     * // Create many RContacts
     * const rContact = await prisma.rContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RContacts and only return the `username`
     * const rContactWithUsernameOnly = await prisma.rContact.createManyAndReturn({
     *   select: { username: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RContactCreateManyAndReturnArgs>(args?: SelectSubset<T, RContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RContact.
     * @param {RContactDeleteArgs} args - Arguments to delete one RContact.
     * @example
     * // Delete one RContact
     * const RContact = await prisma.rContact.delete({
     *   where: {
     *     // ... filter to delete one RContact
     *   }
     * })
     * 
     */
    delete<T extends RContactDeleteArgs>(args: SelectSubset<T, RContactDeleteArgs<ExtArgs>>): Prisma__RContactClient<$Result.GetResult<Prisma.$RContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RContact.
     * @param {RContactUpdateArgs} args - Arguments to update one RContact.
     * @example
     * // Update one RContact
     * const rContact = await prisma.rContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RContactUpdateArgs>(args: SelectSubset<T, RContactUpdateArgs<ExtArgs>>): Prisma__RContactClient<$Result.GetResult<Prisma.$RContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RContacts.
     * @param {RContactDeleteManyArgs} args - Arguments to filter RContacts to delete.
     * @example
     * // Delete a few RContacts
     * const { count } = await prisma.rContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RContactDeleteManyArgs>(args?: SelectSubset<T, RContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RContacts
     * const rContact = await prisma.rContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RContactUpdateManyArgs>(args: SelectSubset<T, RContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RContacts and returns the data updated in the database.
     * @param {RContactUpdateManyAndReturnArgs} args - Arguments to update many RContacts.
     * @example
     * // Update many RContacts
     * const rContact = await prisma.rContact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RContacts and only return the `username`
     * const rContactWithUsernameOnly = await prisma.rContact.updateManyAndReturn({
     *   select: { username: true },
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
    updateManyAndReturn<T extends RContactUpdateManyAndReturnArgs>(args: SelectSubset<T, RContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RContact.
     * @param {RContactUpsertArgs} args - Arguments to update or create a RContact.
     * @example
     * // Update or create a RContact
     * const rContact = await prisma.rContact.upsert({
     *   create: {
     *     // ... data to create a RContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RContact we want to update
     *   }
     * })
     */
    upsert<T extends RContactUpsertArgs>(args: SelectSubset<T, RContactUpsertArgs<ExtArgs>>): Prisma__RContactClient<$Result.GetResult<Prisma.$RContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RContactCountArgs} args - Arguments to filter RContacts to count.
     * @example
     * // Count the number of RContacts
     * const count = await prisma.rContact.count({
     *   where: {
     *     // ... the filter for the RContacts we want to count
     *   }
     * })
    **/
    count<T extends RContactCountArgs>(
      args?: Subset<T, RContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RContactAggregateArgs>(args: Subset<T, RContactAggregateArgs>): Prisma.PrismaPromise<GetRContactAggregateType<T>>

    /**
     * Group by RContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RContactGroupByArgs} args - Group by arguments.
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
      T extends RContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RContactGroupByArgs['orderBy'] }
        : { orderBy?: RContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RContact model
   */
  readonly fields: RContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RContact model
   */
  interface RContactFieldRefs {
    readonly username: FieldRef<"RContact", 'String'>
    readonly alias: FieldRef<"RContact", 'String'>
    readonly conRemark: FieldRef<"RContact", 'String'>
    readonly domainList: FieldRef<"RContact", 'String'>
    readonly nickname: FieldRef<"RContact", 'String'>
    readonly pyInitial: FieldRef<"RContact", 'String'>
    readonly quanPin: FieldRef<"RContact", 'String'>
    readonly showHead: FieldRef<"RContact", 'Int'>
    readonly type: FieldRef<"RContact", 'Int'>
    readonly uiType: FieldRef<"RContact", 'BigInt'>
    readonly weiboFlag: FieldRef<"RContact", 'Int'>
    readonly weiboNickname: FieldRef<"RContact", 'String'>
    readonly conRemarkPYFull: FieldRef<"RContact", 'String'>
    readonly conRemarkPYShort: FieldRef<"RContact", 'String'>
    readonly lvbuff: FieldRef<"RContact", 'Bytes'>
    readonly verifyFlag: FieldRef<"RContact", 'Int'>
    readonly encryptUsername: FieldRef<"RContact", 'String'>
    readonly chatroomFlag: FieldRef<"RContact", 'Int'>
    readonly deleteFlag: FieldRef<"RContact", 'Int'>
    readonly contactLabelIds: FieldRef<"RContact", 'String'>
    readonly descWordingId: FieldRef<"RContact", 'String'>
    readonly openImAppid: FieldRef<"RContact", 'String'>
    readonly sourceExtInfo: FieldRef<"RContact", 'String'>
    readonly ticket: FieldRef<"RContact", 'String'>
    readonly usernameFlag: FieldRef<"RContact", 'BigInt'>
    readonly contactExtra: FieldRef<"RContact", 'Bytes'>
    readonly createTime: FieldRef<"RContact", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * RContact findUnique
   */
  export type RContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RContact
     */
    select?: RContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RContact
     */
    omit?: RContactOmit<ExtArgs> | null
    /**
     * Filter, which RContact to fetch.
     */
    where: RContactWhereUniqueInput
  }

  /**
   * RContact findUniqueOrThrow
   */
  export type RContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RContact
     */
    select?: RContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RContact
     */
    omit?: RContactOmit<ExtArgs> | null
    /**
     * Filter, which RContact to fetch.
     */
    where: RContactWhereUniqueInput
  }

  /**
   * RContact findFirst
   */
  export type RContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RContact
     */
    select?: RContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RContact
     */
    omit?: RContactOmit<ExtArgs> | null
    /**
     * Filter, which RContact to fetch.
     */
    where?: RContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RContacts to fetch.
     */
    orderBy?: RContactOrderByWithRelationInput | RContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RContacts.
     */
    cursor?: RContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RContacts.
     */
    distinct?: RContactScalarFieldEnum | RContactScalarFieldEnum[]
  }

  /**
   * RContact findFirstOrThrow
   */
  export type RContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RContact
     */
    select?: RContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RContact
     */
    omit?: RContactOmit<ExtArgs> | null
    /**
     * Filter, which RContact to fetch.
     */
    where?: RContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RContacts to fetch.
     */
    orderBy?: RContactOrderByWithRelationInput | RContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RContacts.
     */
    cursor?: RContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RContacts.
     */
    distinct?: RContactScalarFieldEnum | RContactScalarFieldEnum[]
  }

  /**
   * RContact findMany
   */
  export type RContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RContact
     */
    select?: RContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RContact
     */
    omit?: RContactOmit<ExtArgs> | null
    /**
     * Filter, which RContacts to fetch.
     */
    where?: RContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RContacts to fetch.
     */
    orderBy?: RContactOrderByWithRelationInput | RContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RContacts.
     */
    cursor?: RContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RContacts.
     */
    skip?: number
    distinct?: RContactScalarFieldEnum | RContactScalarFieldEnum[]
  }

  /**
   * RContact create
   */
  export type RContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RContact
     */
    select?: RContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RContact
     */
    omit?: RContactOmit<ExtArgs> | null
    /**
     * The data needed to create a RContact.
     */
    data: XOR<RContactCreateInput, RContactUncheckedCreateInput>
  }

  /**
   * RContact createMany
   */
  export type RContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RContacts.
     */
    data: RContactCreateManyInput | RContactCreateManyInput[]
  }

  /**
   * RContact createManyAndReturn
   */
  export type RContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RContact
     */
    select?: RContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RContact
     */
    omit?: RContactOmit<ExtArgs> | null
    /**
     * The data used to create many RContacts.
     */
    data: RContactCreateManyInput | RContactCreateManyInput[]
  }

  /**
   * RContact update
   */
  export type RContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RContact
     */
    select?: RContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RContact
     */
    omit?: RContactOmit<ExtArgs> | null
    /**
     * The data needed to update a RContact.
     */
    data: XOR<RContactUpdateInput, RContactUncheckedUpdateInput>
    /**
     * Choose, which RContact to update.
     */
    where: RContactWhereUniqueInput
  }

  /**
   * RContact updateMany
   */
  export type RContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RContacts.
     */
    data: XOR<RContactUpdateManyMutationInput, RContactUncheckedUpdateManyInput>
    /**
     * Filter which RContacts to update
     */
    where?: RContactWhereInput
    /**
     * Limit how many RContacts to update.
     */
    limit?: number
  }

  /**
   * RContact updateManyAndReturn
   */
  export type RContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RContact
     */
    select?: RContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RContact
     */
    omit?: RContactOmit<ExtArgs> | null
    /**
     * The data used to update RContacts.
     */
    data: XOR<RContactUpdateManyMutationInput, RContactUncheckedUpdateManyInput>
    /**
     * Filter which RContacts to update
     */
    where?: RContactWhereInput
    /**
     * Limit how many RContacts to update.
     */
    limit?: number
  }

  /**
   * RContact upsert
   */
  export type RContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RContact
     */
    select?: RContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RContact
     */
    omit?: RContactOmit<ExtArgs> | null
    /**
     * The filter to search for the RContact to update in case it exists.
     */
    where: RContactWhereUniqueInput
    /**
     * In case the RContact found by the `where` argument doesn't exist, create a new RContact with this data.
     */
    create: XOR<RContactCreateInput, RContactUncheckedCreateInput>
    /**
     * In case the RContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RContactUpdateInput, RContactUncheckedUpdateInput>
  }

  /**
   * RContact delete
   */
  export type RContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RContact
     */
    select?: RContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RContact
     */
    omit?: RContactOmit<ExtArgs> | null
    /**
     * Filter which RContact to delete.
     */
    where: RContactWhereUniqueInput
  }

  /**
   * RContact deleteMany
   */
  export type RContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RContacts to delete
     */
    where?: RContactWhereInput
    /**
     * Limit how many RContacts to delete.
     */
    limit?: number
  }

  /**
   * RContact without action
   */
  export type RContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RContact
     */
    select?: RContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RContact
     */
    omit?: RContactOmit<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    msgId: number | null
    msgSvrId: number | null
    type: number | null
    status: number | null
    isSend: number | null
    isShowTimer: number | null
    createTime: number | null
    talkerId: number | null
    bizChatId: number | null
    msgSeq: number | null
    flag: number | null
  }

  export type MessageSumAggregateOutputType = {
    msgId: number | null
    msgSvrId: bigint | null
    type: number | null
    status: number | null
    isSend: number | null
    isShowTimer: number | null
    createTime: bigint | null
    talkerId: number | null
    bizChatId: number | null
    msgSeq: number | null
    flag: number | null
  }

  export type MessageMinAggregateOutputType = {
    msgId: number | null
    msgSvrId: bigint | null
    type: number | null
    status: number | null
    isSend: number | null
    isShowTimer: number | null
    createTime: bigint | null
    talker: string | null
    content: string | null
    imgPath: string | null
    reserved: string | null
    lvbuffer: Bytes | null
    transContent: string | null
    transBrandWording: string | null
    talkerId: number | null
    bizClientMsgId: string | null
    bizChatId: number | null
    bizChatUserId: string | null
    msgSeq: number | null
    flag: number | null
    solitaireFoldInfo: Bytes | null
    historyId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    msgId: number | null
    msgSvrId: bigint | null
    type: number | null
    status: number | null
    isSend: number | null
    isShowTimer: number | null
    createTime: bigint | null
    talker: string | null
    content: string | null
    imgPath: string | null
    reserved: string | null
    lvbuffer: Bytes | null
    transContent: string | null
    transBrandWording: string | null
    talkerId: number | null
    bizClientMsgId: string | null
    bizChatId: number | null
    bizChatUserId: string | null
    msgSeq: number | null
    flag: number | null
    solitaireFoldInfo: Bytes | null
    historyId: string | null
  }

  export type MessageCountAggregateOutputType = {
    msgId: number
    msgSvrId: number
    type: number
    status: number
    isSend: number
    isShowTimer: number
    createTime: number
    talker: number
    content: number
    imgPath: number
    reserved: number
    lvbuffer: number
    transContent: number
    transBrandWording: number
    talkerId: number
    bizClientMsgId: number
    bizChatId: number
    bizChatUserId: number
    msgSeq: number
    flag: number
    solitaireFoldInfo: number
    historyId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    msgId?: true
    msgSvrId?: true
    type?: true
    status?: true
    isSend?: true
    isShowTimer?: true
    createTime?: true
    talkerId?: true
    bizChatId?: true
    msgSeq?: true
    flag?: true
  }

  export type MessageSumAggregateInputType = {
    msgId?: true
    msgSvrId?: true
    type?: true
    status?: true
    isSend?: true
    isShowTimer?: true
    createTime?: true
    talkerId?: true
    bizChatId?: true
    msgSeq?: true
    flag?: true
  }

  export type MessageMinAggregateInputType = {
    msgId?: true
    msgSvrId?: true
    type?: true
    status?: true
    isSend?: true
    isShowTimer?: true
    createTime?: true
    talker?: true
    content?: true
    imgPath?: true
    reserved?: true
    lvbuffer?: true
    transContent?: true
    transBrandWording?: true
    talkerId?: true
    bizClientMsgId?: true
    bizChatId?: true
    bizChatUserId?: true
    msgSeq?: true
    flag?: true
    solitaireFoldInfo?: true
    historyId?: true
  }

  export type MessageMaxAggregateInputType = {
    msgId?: true
    msgSvrId?: true
    type?: true
    status?: true
    isSend?: true
    isShowTimer?: true
    createTime?: true
    talker?: true
    content?: true
    imgPath?: true
    reserved?: true
    lvbuffer?: true
    transContent?: true
    transBrandWording?: true
    talkerId?: true
    bizClientMsgId?: true
    bizChatId?: true
    bizChatUserId?: true
    msgSeq?: true
    flag?: true
    solitaireFoldInfo?: true
    historyId?: true
  }

  export type MessageCountAggregateInputType = {
    msgId?: true
    msgSvrId?: true
    type?: true
    status?: true
    isSend?: true
    isShowTimer?: true
    createTime?: true
    talker?: true
    content?: true
    imgPath?: true
    reserved?: true
    lvbuffer?: true
    transContent?: true
    transBrandWording?: true
    talkerId?: true
    bizClientMsgId?: true
    bizChatId?: true
    bizChatUserId?: true
    msgSeq?: true
    flag?: true
    solitaireFoldInfo?: true
    historyId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    msgId: number
    msgSvrId: bigint | null
    type: number
    status: number | null
    isSend: number
    isShowTimer: number | null
    createTime: bigint
    talker: string
    content: string | null
    imgPath: string | null
    reserved: string | null
    lvbuffer: Bytes | null
    transContent: string | null
    transBrandWording: string | null
    talkerId: number | null
    bizClientMsgId: string | null
    bizChatId: number | null
    bizChatUserId: string | null
    msgSeq: number | null
    flag: number | null
    solitaireFoldInfo: Bytes | null
    historyId: string | null
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    msgId?: boolean
    msgSvrId?: boolean
    type?: boolean
    status?: boolean
    isSend?: boolean
    isShowTimer?: boolean
    createTime?: boolean
    talker?: boolean
    content?: boolean
    imgPath?: boolean
    reserved?: boolean
    lvbuffer?: boolean
    transContent?: boolean
    transBrandWording?: boolean
    talkerId?: boolean
    bizClientMsgId?: boolean
    bizChatId?: boolean
    bizChatUserId?: boolean
    msgSeq?: boolean
    flag?: boolean
    solitaireFoldInfo?: boolean
    historyId?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    msgId?: boolean
    msgSvrId?: boolean
    type?: boolean
    status?: boolean
    isSend?: boolean
    isShowTimer?: boolean
    createTime?: boolean
    talker?: boolean
    content?: boolean
    imgPath?: boolean
    reserved?: boolean
    lvbuffer?: boolean
    transContent?: boolean
    transBrandWording?: boolean
    talkerId?: boolean
    bizClientMsgId?: boolean
    bizChatId?: boolean
    bizChatUserId?: boolean
    msgSeq?: boolean
    flag?: boolean
    solitaireFoldInfo?: boolean
    historyId?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    msgId?: boolean
    msgSvrId?: boolean
    type?: boolean
    status?: boolean
    isSend?: boolean
    isShowTimer?: boolean
    createTime?: boolean
    talker?: boolean
    content?: boolean
    imgPath?: boolean
    reserved?: boolean
    lvbuffer?: boolean
    transContent?: boolean
    transBrandWording?: boolean
    talkerId?: boolean
    bizClientMsgId?: boolean
    bizChatId?: boolean
    bizChatUserId?: boolean
    msgSeq?: boolean
    flag?: boolean
    solitaireFoldInfo?: boolean
    historyId?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    msgId?: boolean
    msgSvrId?: boolean
    type?: boolean
    status?: boolean
    isSend?: boolean
    isShowTimer?: boolean
    createTime?: boolean
    talker?: boolean
    content?: boolean
    imgPath?: boolean
    reserved?: boolean
    lvbuffer?: boolean
    transContent?: boolean
    transBrandWording?: boolean
    talkerId?: boolean
    bizClientMsgId?: boolean
    bizChatId?: boolean
    bizChatUserId?: boolean
    msgSeq?: boolean
    flag?: boolean
    solitaireFoldInfo?: boolean
    historyId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"msgId" | "msgSvrId" | "type" | "status" | "isSend" | "isShowTimer" | "createTime" | "talker" | "content" | "imgPath" | "reserved" | "lvbuffer" | "transContent" | "transBrandWording" | "talkerId" | "bizClientMsgId" | "bizChatId" | "bizChatUserId" | "msgSeq" | "flag" | "solitaireFoldInfo" | "historyId", ExtArgs["result"]["message"]>

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      msgId: number
      msgSvrId: bigint | null
      type: number
      status: number | null
      isSend: number
      isShowTimer: number | null
      createTime: bigint
      talker: string
      content: string | null
      imgPath: string | null
      reserved: string | null
      lvbuffer: Prisma.Bytes | null
      transContent: string | null
      transBrandWording: string | null
      talkerId: number | null
      bizClientMsgId: string | null
      bizChatId: number | null
      bizChatUserId: string | null
      msgSeq: number | null
      flag: number | null
      solitaireFoldInfo: Prisma.Bytes | null
      historyId: string | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `msgId`
     * const messageWithMsgIdOnly = await prisma.message.findMany({ select: { msgId: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `msgId`
     * const messageWithMsgIdOnly = await prisma.message.createManyAndReturn({
     *   select: { msgId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `msgId`
     * const messageWithMsgIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { msgId: true },
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly msgId: FieldRef<"Message", 'Int'>
    readonly msgSvrId: FieldRef<"Message", 'BigInt'>
    readonly type: FieldRef<"Message", 'Int'>
    readonly status: FieldRef<"Message", 'Int'>
    readonly isSend: FieldRef<"Message", 'Int'>
    readonly isShowTimer: FieldRef<"Message", 'Int'>
    readonly createTime: FieldRef<"Message", 'BigInt'>
    readonly talker: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly imgPath: FieldRef<"Message", 'String'>
    readonly reserved: FieldRef<"Message", 'String'>
    readonly lvbuffer: FieldRef<"Message", 'Bytes'>
    readonly transContent: FieldRef<"Message", 'String'>
    readonly transBrandWording: FieldRef<"Message", 'String'>
    readonly talkerId: FieldRef<"Message", 'Int'>
    readonly bizClientMsgId: FieldRef<"Message", 'String'>
    readonly bizChatId: FieldRef<"Message", 'Int'>
    readonly bizChatUserId: FieldRef<"Message", 'String'>
    readonly msgSeq: FieldRef<"Message", 'Int'>
    readonly flag: FieldRef<"Message", 'Int'>
    readonly solitaireFoldInfo: FieldRef<"Message", 'Bytes'>
    readonly historyId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
  }


  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomAvgAggregateOutputType = {
    addtime: number | null
    roomflag: number | null
    isShowname: number | null
    style: number | null
    chatroomdataflag: number | null
    modifytime: number | null
    chatroomVersion: number | null
    chatroomnoticePublishTime: number | null
    chatroomNoticeNew: number | null
    chatroomLocalVersion: number | null
    chatroomStatus: number | null
    memberCount: number | null
    chatroomfamilystatusmodifytime: number | null
    openIMRoomMigrateStatus: number | null
    oldChatroomVersion: number | null
    spamStatus: number | null
    compactFlag: number | null
  }

  export type ChatRoomSumAggregateOutputType = {
    addtime: bigint | null
    roomflag: number | null
    isShowname: number | null
    style: number | null
    chatroomdataflag: number | null
    modifytime: bigint | null
    chatroomVersion: number | null
    chatroomnoticePublishTime: bigint | null
    chatroomNoticeNew: number | null
    chatroomLocalVersion: bigint | null
    chatroomStatus: number | null
    memberCount: number | null
    chatroomfamilystatusmodifytime: bigint | null
    openIMRoomMigrateStatus: number | null
    oldChatroomVersion: number | null
    spamStatus: number | null
    compactFlag: bigint | null
  }

  export type ChatRoomMinAggregateOutputType = {
    chatroomname: string | null
    addtime: bigint | null
    memberlist: string | null
    displayname: string | null
    chatroomnick: string | null
    roomflag: number | null
    roomowner: string | null
    roomdata: Bytes | null
    isShowname: number | null
    selfDisplayName: string | null
    style: number | null
    chatroomdataflag: number | null
    modifytime: bigint | null
    chatroomnotice: string | null
    xmlChatroomnotice: string | null
    chatroomVersion: number | null
    chatroomnoticeEditor: string | null
    chatroomnoticePublishTime: bigint | null
    chatroomNoticeNew: number | null
    chatroomLocalVersion: bigint | null
    chatroomStatus: number | null
    memberCount: number | null
    chatroomfamilystatusmodifytime: bigint | null
    associateOpenIMRoomName: string | null
    openIMRoomMigrateStatus: number | null
    saveByteVersion: string | null
    handleByteVersion: string | null
    roomInfoDetailResByte: Bytes | null
    oldChatroomVersion: number | null
    localChatRoomWatchMembers: Bytes | null
    spamStatus: number | null
    compactFlag: bigint | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    chatroomname: string | null
    addtime: bigint | null
    memberlist: string | null
    displayname: string | null
    chatroomnick: string | null
    roomflag: number | null
    roomowner: string | null
    roomdata: Bytes | null
    isShowname: number | null
    selfDisplayName: string | null
    style: number | null
    chatroomdataflag: number | null
    modifytime: bigint | null
    chatroomnotice: string | null
    xmlChatroomnotice: string | null
    chatroomVersion: number | null
    chatroomnoticeEditor: string | null
    chatroomnoticePublishTime: bigint | null
    chatroomNoticeNew: number | null
    chatroomLocalVersion: bigint | null
    chatroomStatus: number | null
    memberCount: number | null
    chatroomfamilystatusmodifytime: bigint | null
    associateOpenIMRoomName: string | null
    openIMRoomMigrateStatus: number | null
    saveByteVersion: string | null
    handleByteVersion: string | null
    roomInfoDetailResByte: Bytes | null
    oldChatroomVersion: number | null
    localChatRoomWatchMembers: Bytes | null
    spamStatus: number | null
    compactFlag: bigint | null
  }

  export type ChatRoomCountAggregateOutputType = {
    chatroomname: number
    addtime: number
    memberlist: number
    displayname: number
    chatroomnick: number
    roomflag: number
    roomowner: number
    roomdata: number
    isShowname: number
    selfDisplayName: number
    style: number
    chatroomdataflag: number
    modifytime: number
    chatroomnotice: number
    xmlChatroomnotice: number
    chatroomVersion: number
    chatroomnoticeEditor: number
    chatroomnoticePublishTime: number
    chatroomNoticeNew: number
    chatroomLocalVersion: number
    chatroomStatus: number
    memberCount: number
    chatroomfamilystatusmodifytime: number
    associateOpenIMRoomName: number
    openIMRoomMigrateStatus: number
    saveByteVersion: number
    handleByteVersion: number
    roomInfoDetailResByte: number
    oldChatroomVersion: number
    localChatRoomWatchMembers: number
    spamStatus: number
    compactFlag: number
    _all: number
  }


  export type ChatRoomAvgAggregateInputType = {
    addtime?: true
    roomflag?: true
    isShowname?: true
    style?: true
    chatroomdataflag?: true
    modifytime?: true
    chatroomVersion?: true
    chatroomnoticePublishTime?: true
    chatroomNoticeNew?: true
    chatroomLocalVersion?: true
    chatroomStatus?: true
    memberCount?: true
    chatroomfamilystatusmodifytime?: true
    openIMRoomMigrateStatus?: true
    oldChatroomVersion?: true
    spamStatus?: true
    compactFlag?: true
  }

  export type ChatRoomSumAggregateInputType = {
    addtime?: true
    roomflag?: true
    isShowname?: true
    style?: true
    chatroomdataflag?: true
    modifytime?: true
    chatroomVersion?: true
    chatroomnoticePublishTime?: true
    chatroomNoticeNew?: true
    chatroomLocalVersion?: true
    chatroomStatus?: true
    memberCount?: true
    chatroomfamilystatusmodifytime?: true
    openIMRoomMigrateStatus?: true
    oldChatroomVersion?: true
    spamStatus?: true
    compactFlag?: true
  }

  export type ChatRoomMinAggregateInputType = {
    chatroomname?: true
    addtime?: true
    memberlist?: true
    displayname?: true
    chatroomnick?: true
    roomflag?: true
    roomowner?: true
    roomdata?: true
    isShowname?: true
    selfDisplayName?: true
    style?: true
    chatroomdataflag?: true
    modifytime?: true
    chatroomnotice?: true
    xmlChatroomnotice?: true
    chatroomVersion?: true
    chatroomnoticeEditor?: true
    chatroomnoticePublishTime?: true
    chatroomNoticeNew?: true
    chatroomLocalVersion?: true
    chatroomStatus?: true
    memberCount?: true
    chatroomfamilystatusmodifytime?: true
    associateOpenIMRoomName?: true
    openIMRoomMigrateStatus?: true
    saveByteVersion?: true
    handleByteVersion?: true
    roomInfoDetailResByte?: true
    oldChatroomVersion?: true
    localChatRoomWatchMembers?: true
    spamStatus?: true
    compactFlag?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    chatroomname?: true
    addtime?: true
    memberlist?: true
    displayname?: true
    chatroomnick?: true
    roomflag?: true
    roomowner?: true
    roomdata?: true
    isShowname?: true
    selfDisplayName?: true
    style?: true
    chatroomdataflag?: true
    modifytime?: true
    chatroomnotice?: true
    xmlChatroomnotice?: true
    chatroomVersion?: true
    chatroomnoticeEditor?: true
    chatroomnoticePublishTime?: true
    chatroomNoticeNew?: true
    chatroomLocalVersion?: true
    chatroomStatus?: true
    memberCount?: true
    chatroomfamilystatusmodifytime?: true
    associateOpenIMRoomName?: true
    openIMRoomMigrateStatus?: true
    saveByteVersion?: true
    handleByteVersion?: true
    roomInfoDetailResByte?: true
    oldChatroomVersion?: true
    localChatRoomWatchMembers?: true
    spamStatus?: true
    compactFlag?: true
  }

  export type ChatRoomCountAggregateInputType = {
    chatroomname?: true
    addtime?: true
    memberlist?: true
    displayname?: true
    chatroomnick?: true
    roomflag?: true
    roomowner?: true
    roomdata?: true
    isShowname?: true
    selfDisplayName?: true
    style?: true
    chatroomdataflag?: true
    modifytime?: true
    chatroomnotice?: true
    xmlChatroomnotice?: true
    chatroomVersion?: true
    chatroomnoticeEditor?: true
    chatroomnoticePublishTime?: true
    chatroomNoticeNew?: true
    chatroomLocalVersion?: true
    chatroomStatus?: true
    memberCount?: true
    chatroomfamilystatusmodifytime?: true
    associateOpenIMRoomName?: true
    openIMRoomMigrateStatus?: true
    saveByteVersion?: true
    handleByteVersion?: true
    roomInfoDetailResByte?: true
    oldChatroomVersion?: true
    localChatRoomWatchMembers?: true
    spamStatus?: true
    compactFlag?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _avg?: ChatRoomAvgAggregateInputType
    _sum?: ChatRoomSumAggregateInputType
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    chatroomname: string
    addtime: bigint | null
    memberlist: string | null
    displayname: string | null
    chatroomnick: string | null
    roomflag: number | null
    roomowner: string | null
    roomdata: Bytes | null
    isShowname: number | null
    selfDisplayName: string | null
    style: number | null
    chatroomdataflag: number | null
    modifytime: bigint | null
    chatroomnotice: string | null
    xmlChatroomnotice: string | null
    chatroomVersion: number | null
    chatroomnoticeEditor: string | null
    chatroomnoticePublishTime: bigint | null
    chatroomNoticeNew: number | null
    chatroomLocalVersion: bigint | null
    chatroomStatus: number | null
    memberCount: number | null
    chatroomfamilystatusmodifytime: bigint | null
    associateOpenIMRoomName: string | null
    openIMRoomMigrateStatus: number | null
    saveByteVersion: string | null
    handleByteVersion: string | null
    roomInfoDetailResByte: Bytes | null
    oldChatroomVersion: number | null
    localChatRoomWatchMembers: Bytes | null
    spamStatus: number | null
    compactFlag: bigint | null
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chatroomname?: boolean
    addtime?: boolean
    memberlist?: boolean
    displayname?: boolean
    chatroomnick?: boolean
    roomflag?: boolean
    roomowner?: boolean
    roomdata?: boolean
    isShowname?: boolean
    selfDisplayName?: boolean
    style?: boolean
    chatroomdataflag?: boolean
    modifytime?: boolean
    chatroomnotice?: boolean
    xmlChatroomnotice?: boolean
    chatroomVersion?: boolean
    chatroomnoticeEditor?: boolean
    chatroomnoticePublishTime?: boolean
    chatroomNoticeNew?: boolean
    chatroomLocalVersion?: boolean
    chatroomStatus?: boolean
    memberCount?: boolean
    chatroomfamilystatusmodifytime?: boolean
    associateOpenIMRoomName?: boolean
    openIMRoomMigrateStatus?: boolean
    saveByteVersion?: boolean
    handleByteVersion?: boolean
    roomInfoDetailResByte?: boolean
    oldChatroomVersion?: boolean
    localChatRoomWatchMembers?: boolean
    spamStatus?: boolean
    compactFlag?: boolean
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chatroomname?: boolean
    addtime?: boolean
    memberlist?: boolean
    displayname?: boolean
    chatroomnick?: boolean
    roomflag?: boolean
    roomowner?: boolean
    roomdata?: boolean
    isShowname?: boolean
    selfDisplayName?: boolean
    style?: boolean
    chatroomdataflag?: boolean
    modifytime?: boolean
    chatroomnotice?: boolean
    xmlChatroomnotice?: boolean
    chatroomVersion?: boolean
    chatroomnoticeEditor?: boolean
    chatroomnoticePublishTime?: boolean
    chatroomNoticeNew?: boolean
    chatroomLocalVersion?: boolean
    chatroomStatus?: boolean
    memberCount?: boolean
    chatroomfamilystatusmodifytime?: boolean
    associateOpenIMRoomName?: boolean
    openIMRoomMigrateStatus?: boolean
    saveByteVersion?: boolean
    handleByteVersion?: boolean
    roomInfoDetailResByte?: boolean
    oldChatroomVersion?: boolean
    localChatRoomWatchMembers?: boolean
    spamStatus?: boolean
    compactFlag?: boolean
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chatroomname?: boolean
    addtime?: boolean
    memberlist?: boolean
    displayname?: boolean
    chatroomnick?: boolean
    roomflag?: boolean
    roomowner?: boolean
    roomdata?: boolean
    isShowname?: boolean
    selfDisplayName?: boolean
    style?: boolean
    chatroomdataflag?: boolean
    modifytime?: boolean
    chatroomnotice?: boolean
    xmlChatroomnotice?: boolean
    chatroomVersion?: boolean
    chatroomnoticeEditor?: boolean
    chatroomnoticePublishTime?: boolean
    chatroomNoticeNew?: boolean
    chatroomLocalVersion?: boolean
    chatroomStatus?: boolean
    memberCount?: boolean
    chatroomfamilystatusmodifytime?: boolean
    associateOpenIMRoomName?: boolean
    openIMRoomMigrateStatus?: boolean
    saveByteVersion?: boolean
    handleByteVersion?: boolean
    roomInfoDetailResByte?: boolean
    oldChatroomVersion?: boolean
    localChatRoomWatchMembers?: boolean
    spamStatus?: boolean
    compactFlag?: boolean
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectScalar = {
    chatroomname?: boolean
    addtime?: boolean
    memberlist?: boolean
    displayname?: boolean
    chatroomnick?: boolean
    roomflag?: boolean
    roomowner?: boolean
    roomdata?: boolean
    isShowname?: boolean
    selfDisplayName?: boolean
    style?: boolean
    chatroomdataflag?: boolean
    modifytime?: boolean
    chatroomnotice?: boolean
    xmlChatroomnotice?: boolean
    chatroomVersion?: boolean
    chatroomnoticeEditor?: boolean
    chatroomnoticePublishTime?: boolean
    chatroomNoticeNew?: boolean
    chatroomLocalVersion?: boolean
    chatroomStatus?: boolean
    memberCount?: boolean
    chatroomfamilystatusmodifytime?: boolean
    associateOpenIMRoomName?: boolean
    openIMRoomMigrateStatus?: boolean
    saveByteVersion?: boolean
    handleByteVersion?: boolean
    roomInfoDetailResByte?: boolean
    oldChatroomVersion?: boolean
    localChatRoomWatchMembers?: boolean
    spamStatus?: boolean
    compactFlag?: boolean
  }

  export type ChatRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chatroomname" | "addtime" | "memberlist" | "displayname" | "chatroomnick" | "roomflag" | "roomowner" | "roomdata" | "isShowname" | "selfDisplayName" | "style" | "chatroomdataflag" | "modifytime" | "chatroomnotice" | "xmlChatroomnotice" | "chatroomVersion" | "chatroomnoticeEditor" | "chatroomnoticePublishTime" | "chatroomNoticeNew" | "chatroomLocalVersion" | "chatroomStatus" | "memberCount" | "chatroomfamilystatusmodifytime" | "associateOpenIMRoomName" | "openIMRoomMigrateStatus" | "saveByteVersion" | "handleByteVersion" | "roomInfoDetailResByte" | "oldChatroomVersion" | "localChatRoomWatchMembers" | "spamStatus" | "compactFlag", ExtArgs["result"]["chatRoom"]>

  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      chatroomname: string
      addtime: bigint | null
      memberlist: string | null
      displayname: string | null
      chatroomnick: string | null
      roomflag: number | null
      roomowner: string | null
      roomdata: Prisma.Bytes | null
      isShowname: number | null
      selfDisplayName: string | null
      style: number | null
      chatroomdataflag: number | null
      modifytime: bigint | null
      chatroomnotice: string | null
      xmlChatroomnotice: string | null
      chatroomVersion: number | null
      chatroomnoticeEditor: string | null
      chatroomnoticePublishTime: bigint | null
      chatroomNoticeNew: number | null
      chatroomLocalVersion: bigint | null
      chatroomStatus: number | null
      memberCount: number | null
      chatroomfamilystatusmodifytime: bigint | null
      associateOpenIMRoomName: string | null
      openIMRoomMigrateStatus: number | null
      saveByteVersion: string | null
      handleByteVersion: string | null
      roomInfoDetailResByte: Prisma.Bytes | null
      oldChatroomVersion: number | null
      localChatRoomWatchMembers: Prisma.Bytes | null
      spamStatus: number | null
      compactFlag: bigint | null
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }

  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRoomFindUniqueArgs>(args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRoomFindFirstArgs>(args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     * 
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     * 
     * // Only select the `chatroomname`
     * const chatRoomWithChatroomnameOnly = await prisma.chatRoom.findMany({ select: { chatroomname: true } })
     * 
     */
    findMany<T extends ChatRoomFindManyArgs>(args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     * 
     */
    create<T extends ChatRoomCreateArgs>(args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRooms.
     * @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRoomCreateManyArgs>(args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatRooms and returns the data saved in the database.
     * @param {ChatRoomCreateManyAndReturnArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatRooms and only return the `chatroomname`
     * const chatRoomWithChatroomnameOnly = await prisma.chatRoom.createManyAndReturn({
     *   select: { chatroomname: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     * 
     */
    delete<T extends ChatRoomDeleteArgs>(args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRoomUpdateArgs>(args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRoomDeleteManyArgs>(args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRoomUpdateManyArgs>(args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms and returns the data updated in the database.
     * @param {ChatRoomUpdateManyAndReturnArgs} args - Arguments to update many ChatRooms.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatRooms and only return the `chatroomname`
     * const chatRoomWithChatroomnameOnly = await prisma.chatRoom.updateManyAndReturn({
     *   select: { chatroomname: true },
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
    updateManyAndReturn<T extends ChatRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
     */
    upsert<T extends ChatRoomUpsertArgs>(args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
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
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoom model
   */
  readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ChatRoom model
   */
  interface ChatRoomFieldRefs {
    readonly chatroomname: FieldRef<"ChatRoom", 'String'>
    readonly addtime: FieldRef<"ChatRoom", 'BigInt'>
    readonly memberlist: FieldRef<"ChatRoom", 'String'>
    readonly displayname: FieldRef<"ChatRoom", 'String'>
    readonly chatroomnick: FieldRef<"ChatRoom", 'String'>
    readonly roomflag: FieldRef<"ChatRoom", 'Int'>
    readonly roomowner: FieldRef<"ChatRoom", 'String'>
    readonly roomdata: FieldRef<"ChatRoom", 'Bytes'>
    readonly isShowname: FieldRef<"ChatRoom", 'Int'>
    readonly selfDisplayName: FieldRef<"ChatRoom", 'String'>
    readonly style: FieldRef<"ChatRoom", 'Int'>
    readonly chatroomdataflag: FieldRef<"ChatRoom", 'Int'>
    readonly modifytime: FieldRef<"ChatRoom", 'BigInt'>
    readonly chatroomnotice: FieldRef<"ChatRoom", 'String'>
    readonly xmlChatroomnotice: FieldRef<"ChatRoom", 'String'>
    readonly chatroomVersion: FieldRef<"ChatRoom", 'Int'>
    readonly chatroomnoticeEditor: FieldRef<"ChatRoom", 'String'>
    readonly chatroomnoticePublishTime: FieldRef<"ChatRoom", 'BigInt'>
    readonly chatroomNoticeNew: FieldRef<"ChatRoom", 'Int'>
    readonly chatroomLocalVersion: FieldRef<"ChatRoom", 'BigInt'>
    readonly chatroomStatus: FieldRef<"ChatRoom", 'Int'>
    readonly memberCount: FieldRef<"ChatRoom", 'Int'>
    readonly chatroomfamilystatusmodifytime: FieldRef<"ChatRoom", 'BigInt'>
    readonly associateOpenIMRoomName: FieldRef<"ChatRoom", 'String'>
    readonly openIMRoomMigrateStatus: FieldRef<"ChatRoom", 'Int'>
    readonly saveByteVersion: FieldRef<"ChatRoom", 'String'>
    readonly handleByteVersion: FieldRef<"ChatRoom", 'String'>
    readonly roomInfoDetailResByte: FieldRef<"ChatRoom", 'Bytes'>
    readonly oldChatroomVersion: FieldRef<"ChatRoom", 'Int'>
    readonly localChatRoomWatchMembers: FieldRef<"ChatRoom", 'Bytes'>
    readonly spamStatus: FieldRef<"ChatRoom", 'Int'>
    readonly compactFlag: FieldRef<"ChatRoom", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
  }

  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
  }

  /**
   * ChatRoom createManyAndReturn
   */
  export type ChatRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
  }

  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom updateManyAndReturn
   */
  export type ChatRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
  }

  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to delete.
     */
    limit?: number
  }

  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
  }


  /**
   * Model ImgFlag
   */

  export type AggregateImgFlag = {
    _count: ImgFlagCountAggregateOutputType | null
    _avg: ImgFlagAvgAggregateOutputType | null
    _sum: ImgFlagSumAggregateOutputType | null
    _min: ImgFlagMinAggregateOutputType | null
    _max: ImgFlagMaxAggregateOutputType | null
  }

  export type ImgFlagAvgAggregateOutputType = {
    imgflag: number | null
    lastupdatetime: number | null
    reserved3: number | null
    reserved4: number | null
    updateflag: number | null
  }

  export type ImgFlagSumAggregateOutputType = {
    imgflag: number | null
    lastupdatetime: number | null
    reserved3: number | null
    reserved4: number | null
    updateflag: number | null
  }

  export type ImgFlagMinAggregateOutputType = {
    username: string | null
    imgflag: number | null
    lastupdatetime: number | null
    reserved1: string | null
    reserved2: string | null
    reserved3: number | null
    reserved4: number | null
    updateflag: number | null
  }

  export type ImgFlagMaxAggregateOutputType = {
    username: string | null
    imgflag: number | null
    lastupdatetime: number | null
    reserved1: string | null
    reserved2: string | null
    reserved3: number | null
    reserved4: number | null
    updateflag: number | null
  }

  export type ImgFlagCountAggregateOutputType = {
    username: number
    imgflag: number
    lastupdatetime: number
    reserved1: number
    reserved2: number
    reserved3: number
    reserved4: number
    updateflag: number
    _all: number
  }


  export type ImgFlagAvgAggregateInputType = {
    imgflag?: true
    lastupdatetime?: true
    reserved3?: true
    reserved4?: true
    updateflag?: true
  }

  export type ImgFlagSumAggregateInputType = {
    imgflag?: true
    lastupdatetime?: true
    reserved3?: true
    reserved4?: true
    updateflag?: true
  }

  export type ImgFlagMinAggregateInputType = {
    username?: true
    imgflag?: true
    lastupdatetime?: true
    reserved1?: true
    reserved2?: true
    reserved3?: true
    reserved4?: true
    updateflag?: true
  }

  export type ImgFlagMaxAggregateInputType = {
    username?: true
    imgflag?: true
    lastupdatetime?: true
    reserved1?: true
    reserved2?: true
    reserved3?: true
    reserved4?: true
    updateflag?: true
  }

  export type ImgFlagCountAggregateInputType = {
    username?: true
    imgflag?: true
    lastupdatetime?: true
    reserved1?: true
    reserved2?: true
    reserved3?: true
    reserved4?: true
    updateflag?: true
    _all?: true
  }

  export type ImgFlagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImgFlag to aggregate.
     */
    where?: ImgFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgFlags to fetch.
     */
    orderBy?: ImgFlagOrderByWithRelationInput | ImgFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImgFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImgFlags
    **/
    _count?: true | ImgFlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImgFlagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImgFlagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImgFlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImgFlagMaxAggregateInputType
  }

  export type GetImgFlagAggregateType<T extends ImgFlagAggregateArgs> = {
        [P in keyof T & keyof AggregateImgFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImgFlag[P]>
      : GetScalarType<T[P], AggregateImgFlag[P]>
  }




  export type ImgFlagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImgFlagWhereInput
    orderBy?: ImgFlagOrderByWithAggregationInput | ImgFlagOrderByWithAggregationInput[]
    by: ImgFlagScalarFieldEnum[] | ImgFlagScalarFieldEnum
    having?: ImgFlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImgFlagCountAggregateInputType | true
    _avg?: ImgFlagAvgAggregateInputType
    _sum?: ImgFlagSumAggregateInputType
    _min?: ImgFlagMinAggregateInputType
    _max?: ImgFlagMaxAggregateInputType
  }

  export type ImgFlagGroupByOutputType = {
    username: string
    imgflag: number | null
    lastupdatetime: number | null
    reserved1: string | null
    reserved2: string | null
    reserved3: number | null
    reserved4: number | null
    updateflag: number | null
    _count: ImgFlagCountAggregateOutputType | null
    _avg: ImgFlagAvgAggregateOutputType | null
    _sum: ImgFlagSumAggregateOutputType | null
    _min: ImgFlagMinAggregateOutputType | null
    _max: ImgFlagMaxAggregateOutputType | null
  }

  type GetImgFlagGroupByPayload<T extends ImgFlagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImgFlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImgFlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImgFlagGroupByOutputType[P]>
            : GetScalarType<T[P], ImgFlagGroupByOutputType[P]>
        }
      >
    >


  export type ImgFlagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    imgflag?: boolean
    lastupdatetime?: boolean
    reserved1?: boolean
    reserved2?: boolean
    reserved3?: boolean
    reserved4?: boolean
    updateflag?: boolean
  }, ExtArgs["result"]["imgFlag"]>

  export type ImgFlagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    imgflag?: boolean
    lastupdatetime?: boolean
    reserved1?: boolean
    reserved2?: boolean
    reserved3?: boolean
    reserved4?: boolean
    updateflag?: boolean
  }, ExtArgs["result"]["imgFlag"]>

  export type ImgFlagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    imgflag?: boolean
    lastupdatetime?: boolean
    reserved1?: boolean
    reserved2?: boolean
    reserved3?: boolean
    reserved4?: boolean
    updateflag?: boolean
  }, ExtArgs["result"]["imgFlag"]>

  export type ImgFlagSelectScalar = {
    username?: boolean
    imgflag?: boolean
    lastupdatetime?: boolean
    reserved1?: boolean
    reserved2?: boolean
    reserved3?: boolean
    reserved4?: boolean
    updateflag?: boolean
  }

  export type ImgFlagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username" | "imgflag" | "lastupdatetime" | "reserved1" | "reserved2" | "reserved3" | "reserved4" | "updateflag", ExtArgs["result"]["imgFlag"]>

  export type $ImgFlagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImgFlag"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      username: string
      imgflag: number | null
      lastupdatetime: number | null
      reserved1: string | null
      reserved2: string | null
      reserved3: number | null
      reserved4: number | null
      updateflag: number | null
    }, ExtArgs["result"]["imgFlag"]>
    composites: {}
  }

  type ImgFlagGetPayload<S extends boolean | null | undefined | ImgFlagDefaultArgs> = $Result.GetResult<Prisma.$ImgFlagPayload, S>

  type ImgFlagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImgFlagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImgFlagCountAggregateInputType | true
    }

  export interface ImgFlagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImgFlag'], meta: { name: 'ImgFlag' } }
    /**
     * Find zero or one ImgFlag that matches the filter.
     * @param {ImgFlagFindUniqueArgs} args - Arguments to find a ImgFlag
     * @example
     * // Get one ImgFlag
     * const imgFlag = await prisma.imgFlag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImgFlagFindUniqueArgs>(args: SelectSubset<T, ImgFlagFindUniqueArgs<ExtArgs>>): Prisma__ImgFlagClient<$Result.GetResult<Prisma.$ImgFlagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImgFlag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImgFlagFindUniqueOrThrowArgs} args - Arguments to find a ImgFlag
     * @example
     * // Get one ImgFlag
     * const imgFlag = await prisma.imgFlag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImgFlagFindUniqueOrThrowArgs>(args: SelectSubset<T, ImgFlagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImgFlagClient<$Result.GetResult<Prisma.$ImgFlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImgFlag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFlagFindFirstArgs} args - Arguments to find a ImgFlag
     * @example
     * // Get one ImgFlag
     * const imgFlag = await prisma.imgFlag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImgFlagFindFirstArgs>(args?: SelectSubset<T, ImgFlagFindFirstArgs<ExtArgs>>): Prisma__ImgFlagClient<$Result.GetResult<Prisma.$ImgFlagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImgFlag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFlagFindFirstOrThrowArgs} args - Arguments to find a ImgFlag
     * @example
     * // Get one ImgFlag
     * const imgFlag = await prisma.imgFlag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImgFlagFindFirstOrThrowArgs>(args?: SelectSubset<T, ImgFlagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImgFlagClient<$Result.GetResult<Prisma.$ImgFlagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImgFlags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFlagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImgFlags
     * const imgFlags = await prisma.imgFlag.findMany()
     * 
     * // Get first 10 ImgFlags
     * const imgFlags = await prisma.imgFlag.findMany({ take: 10 })
     * 
     * // Only select the `username`
     * const imgFlagWithUsernameOnly = await prisma.imgFlag.findMany({ select: { username: true } })
     * 
     */
    findMany<T extends ImgFlagFindManyArgs>(args?: SelectSubset<T, ImgFlagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImgFlag.
     * @param {ImgFlagCreateArgs} args - Arguments to create a ImgFlag.
     * @example
     * // Create one ImgFlag
     * const ImgFlag = await prisma.imgFlag.create({
     *   data: {
     *     // ... data to create a ImgFlag
     *   }
     * })
     * 
     */
    create<T extends ImgFlagCreateArgs>(args: SelectSubset<T, ImgFlagCreateArgs<ExtArgs>>): Prisma__ImgFlagClient<$Result.GetResult<Prisma.$ImgFlagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImgFlags.
     * @param {ImgFlagCreateManyArgs} args - Arguments to create many ImgFlags.
     * @example
     * // Create many ImgFlags
     * const imgFlag = await prisma.imgFlag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImgFlagCreateManyArgs>(args?: SelectSubset<T, ImgFlagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImgFlags and returns the data saved in the database.
     * @param {ImgFlagCreateManyAndReturnArgs} args - Arguments to create many ImgFlags.
     * @example
     * // Create many ImgFlags
     * const imgFlag = await prisma.imgFlag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImgFlags and only return the `username`
     * const imgFlagWithUsernameOnly = await prisma.imgFlag.createManyAndReturn({
     *   select: { username: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImgFlagCreateManyAndReturnArgs>(args?: SelectSubset<T, ImgFlagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgFlagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImgFlag.
     * @param {ImgFlagDeleteArgs} args - Arguments to delete one ImgFlag.
     * @example
     * // Delete one ImgFlag
     * const ImgFlag = await prisma.imgFlag.delete({
     *   where: {
     *     // ... filter to delete one ImgFlag
     *   }
     * })
     * 
     */
    delete<T extends ImgFlagDeleteArgs>(args: SelectSubset<T, ImgFlagDeleteArgs<ExtArgs>>): Prisma__ImgFlagClient<$Result.GetResult<Prisma.$ImgFlagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImgFlag.
     * @param {ImgFlagUpdateArgs} args - Arguments to update one ImgFlag.
     * @example
     * // Update one ImgFlag
     * const imgFlag = await prisma.imgFlag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImgFlagUpdateArgs>(args: SelectSubset<T, ImgFlagUpdateArgs<ExtArgs>>): Prisma__ImgFlagClient<$Result.GetResult<Prisma.$ImgFlagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImgFlags.
     * @param {ImgFlagDeleteManyArgs} args - Arguments to filter ImgFlags to delete.
     * @example
     * // Delete a few ImgFlags
     * const { count } = await prisma.imgFlag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImgFlagDeleteManyArgs>(args?: SelectSubset<T, ImgFlagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImgFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImgFlags
     * const imgFlag = await prisma.imgFlag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImgFlagUpdateManyArgs>(args: SelectSubset<T, ImgFlagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImgFlags and returns the data updated in the database.
     * @param {ImgFlagUpdateManyAndReturnArgs} args - Arguments to update many ImgFlags.
     * @example
     * // Update many ImgFlags
     * const imgFlag = await prisma.imgFlag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImgFlags and only return the `username`
     * const imgFlagWithUsernameOnly = await prisma.imgFlag.updateManyAndReturn({
     *   select: { username: true },
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
    updateManyAndReturn<T extends ImgFlagUpdateManyAndReturnArgs>(args: SelectSubset<T, ImgFlagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgFlagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImgFlag.
     * @param {ImgFlagUpsertArgs} args - Arguments to update or create a ImgFlag.
     * @example
     * // Update or create a ImgFlag
     * const imgFlag = await prisma.imgFlag.upsert({
     *   create: {
     *     // ... data to create a ImgFlag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImgFlag we want to update
     *   }
     * })
     */
    upsert<T extends ImgFlagUpsertArgs>(args: SelectSubset<T, ImgFlagUpsertArgs<ExtArgs>>): Prisma__ImgFlagClient<$Result.GetResult<Prisma.$ImgFlagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImgFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFlagCountArgs} args - Arguments to filter ImgFlags to count.
     * @example
     * // Count the number of ImgFlags
     * const count = await prisma.imgFlag.count({
     *   where: {
     *     // ... the filter for the ImgFlags we want to count
     *   }
     * })
    **/
    count<T extends ImgFlagCountArgs>(
      args?: Subset<T, ImgFlagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImgFlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImgFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImgFlagAggregateArgs>(args: Subset<T, ImgFlagAggregateArgs>): Prisma.PrismaPromise<GetImgFlagAggregateType<T>>

    /**
     * Group by ImgFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFlagGroupByArgs} args - Group by arguments.
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
      T extends ImgFlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImgFlagGroupByArgs['orderBy'] }
        : { orderBy?: ImgFlagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImgFlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImgFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImgFlag model
   */
  readonly fields: ImgFlagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImgFlag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImgFlagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ImgFlag model
   */
  interface ImgFlagFieldRefs {
    readonly username: FieldRef<"ImgFlag", 'String'>
    readonly imgflag: FieldRef<"ImgFlag", 'Int'>
    readonly lastupdatetime: FieldRef<"ImgFlag", 'Int'>
    readonly reserved1: FieldRef<"ImgFlag", 'String'>
    readonly reserved2: FieldRef<"ImgFlag", 'String'>
    readonly reserved3: FieldRef<"ImgFlag", 'Int'>
    readonly reserved4: FieldRef<"ImgFlag", 'Int'>
    readonly updateflag: FieldRef<"ImgFlag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ImgFlag findUnique
   */
  export type ImgFlagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFlag
     */
    select?: ImgFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgFlag
     */
    omit?: ImgFlagOmit<ExtArgs> | null
    /**
     * Filter, which ImgFlag to fetch.
     */
    where: ImgFlagWhereUniqueInput
  }

  /**
   * ImgFlag findUniqueOrThrow
   */
  export type ImgFlagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFlag
     */
    select?: ImgFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgFlag
     */
    omit?: ImgFlagOmit<ExtArgs> | null
    /**
     * Filter, which ImgFlag to fetch.
     */
    where: ImgFlagWhereUniqueInput
  }

  /**
   * ImgFlag findFirst
   */
  export type ImgFlagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFlag
     */
    select?: ImgFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgFlag
     */
    omit?: ImgFlagOmit<ExtArgs> | null
    /**
     * Filter, which ImgFlag to fetch.
     */
    where?: ImgFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgFlags to fetch.
     */
    orderBy?: ImgFlagOrderByWithRelationInput | ImgFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImgFlags.
     */
    cursor?: ImgFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImgFlags.
     */
    distinct?: ImgFlagScalarFieldEnum | ImgFlagScalarFieldEnum[]
  }

  /**
   * ImgFlag findFirstOrThrow
   */
  export type ImgFlagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFlag
     */
    select?: ImgFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgFlag
     */
    omit?: ImgFlagOmit<ExtArgs> | null
    /**
     * Filter, which ImgFlag to fetch.
     */
    where?: ImgFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgFlags to fetch.
     */
    orderBy?: ImgFlagOrderByWithRelationInput | ImgFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImgFlags.
     */
    cursor?: ImgFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImgFlags.
     */
    distinct?: ImgFlagScalarFieldEnum | ImgFlagScalarFieldEnum[]
  }

  /**
   * ImgFlag findMany
   */
  export type ImgFlagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFlag
     */
    select?: ImgFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgFlag
     */
    omit?: ImgFlagOmit<ExtArgs> | null
    /**
     * Filter, which ImgFlags to fetch.
     */
    where?: ImgFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgFlags to fetch.
     */
    orderBy?: ImgFlagOrderByWithRelationInput | ImgFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImgFlags.
     */
    cursor?: ImgFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgFlags.
     */
    skip?: number
    distinct?: ImgFlagScalarFieldEnum | ImgFlagScalarFieldEnum[]
  }

  /**
   * ImgFlag create
   */
  export type ImgFlagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFlag
     */
    select?: ImgFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgFlag
     */
    omit?: ImgFlagOmit<ExtArgs> | null
    /**
     * The data needed to create a ImgFlag.
     */
    data: XOR<ImgFlagCreateInput, ImgFlagUncheckedCreateInput>
  }

  /**
   * ImgFlag createMany
   */
  export type ImgFlagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImgFlags.
     */
    data: ImgFlagCreateManyInput | ImgFlagCreateManyInput[]
  }

  /**
   * ImgFlag createManyAndReturn
   */
  export type ImgFlagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFlag
     */
    select?: ImgFlagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImgFlag
     */
    omit?: ImgFlagOmit<ExtArgs> | null
    /**
     * The data used to create many ImgFlags.
     */
    data: ImgFlagCreateManyInput | ImgFlagCreateManyInput[]
  }

  /**
   * ImgFlag update
   */
  export type ImgFlagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFlag
     */
    select?: ImgFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgFlag
     */
    omit?: ImgFlagOmit<ExtArgs> | null
    /**
     * The data needed to update a ImgFlag.
     */
    data: XOR<ImgFlagUpdateInput, ImgFlagUncheckedUpdateInput>
    /**
     * Choose, which ImgFlag to update.
     */
    where: ImgFlagWhereUniqueInput
  }

  /**
   * ImgFlag updateMany
   */
  export type ImgFlagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImgFlags.
     */
    data: XOR<ImgFlagUpdateManyMutationInput, ImgFlagUncheckedUpdateManyInput>
    /**
     * Filter which ImgFlags to update
     */
    where?: ImgFlagWhereInput
    /**
     * Limit how many ImgFlags to update.
     */
    limit?: number
  }

  /**
   * ImgFlag updateManyAndReturn
   */
  export type ImgFlagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFlag
     */
    select?: ImgFlagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImgFlag
     */
    omit?: ImgFlagOmit<ExtArgs> | null
    /**
     * The data used to update ImgFlags.
     */
    data: XOR<ImgFlagUpdateManyMutationInput, ImgFlagUncheckedUpdateManyInput>
    /**
     * Filter which ImgFlags to update
     */
    where?: ImgFlagWhereInput
    /**
     * Limit how many ImgFlags to update.
     */
    limit?: number
  }

  /**
   * ImgFlag upsert
   */
  export type ImgFlagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFlag
     */
    select?: ImgFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgFlag
     */
    omit?: ImgFlagOmit<ExtArgs> | null
    /**
     * The filter to search for the ImgFlag to update in case it exists.
     */
    where: ImgFlagWhereUniqueInput
    /**
     * In case the ImgFlag found by the `where` argument doesn't exist, create a new ImgFlag with this data.
     */
    create: XOR<ImgFlagCreateInput, ImgFlagUncheckedCreateInput>
    /**
     * In case the ImgFlag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImgFlagUpdateInput, ImgFlagUncheckedUpdateInput>
  }

  /**
   * ImgFlag delete
   */
  export type ImgFlagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFlag
     */
    select?: ImgFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgFlag
     */
    omit?: ImgFlagOmit<ExtArgs> | null
    /**
     * Filter which ImgFlag to delete.
     */
    where: ImgFlagWhereUniqueInput
  }

  /**
   * ImgFlag deleteMany
   */
  export type ImgFlagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImgFlags to delete
     */
    where?: ImgFlagWhereInput
    /**
     * Limit how many ImgFlags to delete.
     */
    limit?: number
  }

  /**
   * ImgFlag without action
   */
  export type ImgFlagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgFlag
     */
    select?: ImgFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImgFlag
     */
    omit?: ImgFlagOmit<ExtArgs> | null
  }


  /**
   * Model EmojiInfoDesc
   */

  export type AggregateEmojiInfoDesc = {
    _count: EmojiInfoDescCountAggregateOutputType | null
    _avg: EmojiInfoDescAvgAggregateOutputType | null
    _sum: EmojiInfoDescSumAggregateOutputType | null
    _min: EmojiInfoDescMinAggregateOutputType | null
    _max: EmojiInfoDescMaxAggregateOutputType | null
  }

  export type EmojiInfoDescAvgAggregateOutputType = {
    click_flag: number | null
    download_flag: number | null
  }

  export type EmojiInfoDescSumAggregateOutputType = {
    click_flag: number | null
    download_flag: number | null
  }

  export type EmojiInfoDescMinAggregateOutputType = {
    md5_lang: string | null
    md5: string | null
    lang: string | null
    desc: string | null
    groupId: string | null
    click_flag: number | null
    download_flag: number | null
  }

  export type EmojiInfoDescMaxAggregateOutputType = {
    md5_lang: string | null
    md5: string | null
    lang: string | null
    desc: string | null
    groupId: string | null
    click_flag: number | null
    download_flag: number | null
  }

  export type EmojiInfoDescCountAggregateOutputType = {
    md5_lang: number
    md5: number
    lang: number
    desc: number
    groupId: number
    click_flag: number
    download_flag: number
    _all: number
  }


  export type EmojiInfoDescAvgAggregateInputType = {
    click_flag?: true
    download_flag?: true
  }

  export type EmojiInfoDescSumAggregateInputType = {
    click_flag?: true
    download_flag?: true
  }

  export type EmojiInfoDescMinAggregateInputType = {
    md5_lang?: true
    md5?: true
    lang?: true
    desc?: true
    groupId?: true
    click_flag?: true
    download_flag?: true
  }

  export type EmojiInfoDescMaxAggregateInputType = {
    md5_lang?: true
    md5?: true
    lang?: true
    desc?: true
    groupId?: true
    click_flag?: true
    download_flag?: true
  }

  export type EmojiInfoDescCountAggregateInputType = {
    md5_lang?: true
    md5?: true
    lang?: true
    desc?: true
    groupId?: true
    click_flag?: true
    download_flag?: true
    _all?: true
  }

  export type EmojiInfoDescAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmojiInfoDesc to aggregate.
     */
    where?: EmojiInfoDescWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiInfoDescs to fetch.
     */
    orderBy?: EmojiInfoDescOrderByWithRelationInput | EmojiInfoDescOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmojiInfoDescWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiInfoDescs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiInfoDescs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmojiInfoDescs
    **/
    _count?: true | EmojiInfoDescCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmojiInfoDescAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmojiInfoDescSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmojiInfoDescMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmojiInfoDescMaxAggregateInputType
  }

  export type GetEmojiInfoDescAggregateType<T extends EmojiInfoDescAggregateArgs> = {
        [P in keyof T & keyof AggregateEmojiInfoDesc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmojiInfoDesc[P]>
      : GetScalarType<T[P], AggregateEmojiInfoDesc[P]>
  }




  export type EmojiInfoDescGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmojiInfoDescWhereInput
    orderBy?: EmojiInfoDescOrderByWithAggregationInput | EmojiInfoDescOrderByWithAggregationInput[]
    by: EmojiInfoDescScalarFieldEnum[] | EmojiInfoDescScalarFieldEnum
    having?: EmojiInfoDescScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmojiInfoDescCountAggregateInputType | true
    _avg?: EmojiInfoDescAvgAggregateInputType
    _sum?: EmojiInfoDescSumAggregateInputType
    _min?: EmojiInfoDescMinAggregateInputType
    _max?: EmojiInfoDescMaxAggregateInputType
  }

  export type EmojiInfoDescGroupByOutputType = {
    md5_lang: string
    md5: string | null
    lang: string | null
    desc: string | null
    groupId: string | null
    click_flag: number | null
    download_flag: number | null
    _count: EmojiInfoDescCountAggregateOutputType | null
    _avg: EmojiInfoDescAvgAggregateOutputType | null
    _sum: EmojiInfoDescSumAggregateOutputType | null
    _min: EmojiInfoDescMinAggregateOutputType | null
    _max: EmojiInfoDescMaxAggregateOutputType | null
  }

  type GetEmojiInfoDescGroupByPayload<T extends EmojiInfoDescGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmojiInfoDescGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmojiInfoDescGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmojiInfoDescGroupByOutputType[P]>
            : GetScalarType<T[P], EmojiInfoDescGroupByOutputType[P]>
        }
      >
    >


  export type EmojiInfoDescSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    md5_lang?: boolean
    md5?: boolean
    lang?: boolean
    desc?: boolean
    groupId?: boolean
    click_flag?: boolean
    download_flag?: boolean
  }, ExtArgs["result"]["emojiInfoDesc"]>

  export type EmojiInfoDescSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    md5_lang?: boolean
    md5?: boolean
    lang?: boolean
    desc?: boolean
    groupId?: boolean
    click_flag?: boolean
    download_flag?: boolean
  }, ExtArgs["result"]["emojiInfoDesc"]>

  export type EmojiInfoDescSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    md5_lang?: boolean
    md5?: boolean
    lang?: boolean
    desc?: boolean
    groupId?: boolean
    click_flag?: boolean
    download_flag?: boolean
  }, ExtArgs["result"]["emojiInfoDesc"]>

  export type EmojiInfoDescSelectScalar = {
    md5_lang?: boolean
    md5?: boolean
    lang?: boolean
    desc?: boolean
    groupId?: boolean
    click_flag?: boolean
    download_flag?: boolean
  }

  export type EmojiInfoDescOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"md5_lang" | "md5" | "lang" | "desc" | "groupId" | "click_flag" | "download_flag", ExtArgs["result"]["emojiInfoDesc"]>

  export type $EmojiInfoDescPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmojiInfoDesc"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      md5_lang: string
      md5: string | null
      lang: string | null
      desc: string | null
      groupId: string | null
      click_flag: number | null
      download_flag: number | null
    }, ExtArgs["result"]["emojiInfoDesc"]>
    composites: {}
  }

  type EmojiInfoDescGetPayload<S extends boolean | null | undefined | EmojiInfoDescDefaultArgs> = $Result.GetResult<Prisma.$EmojiInfoDescPayload, S>

  type EmojiInfoDescCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmojiInfoDescFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmojiInfoDescCountAggregateInputType | true
    }

  export interface EmojiInfoDescDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmojiInfoDesc'], meta: { name: 'EmojiInfoDesc' } }
    /**
     * Find zero or one EmojiInfoDesc that matches the filter.
     * @param {EmojiInfoDescFindUniqueArgs} args - Arguments to find a EmojiInfoDesc
     * @example
     * // Get one EmojiInfoDesc
     * const emojiInfoDesc = await prisma.emojiInfoDesc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmojiInfoDescFindUniqueArgs>(args: SelectSubset<T, EmojiInfoDescFindUniqueArgs<ExtArgs>>): Prisma__EmojiInfoDescClient<$Result.GetResult<Prisma.$EmojiInfoDescPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmojiInfoDesc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmojiInfoDescFindUniqueOrThrowArgs} args - Arguments to find a EmojiInfoDesc
     * @example
     * // Get one EmojiInfoDesc
     * const emojiInfoDesc = await prisma.emojiInfoDesc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmojiInfoDescFindUniqueOrThrowArgs>(args: SelectSubset<T, EmojiInfoDescFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmojiInfoDescClient<$Result.GetResult<Prisma.$EmojiInfoDescPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmojiInfoDesc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoDescFindFirstArgs} args - Arguments to find a EmojiInfoDesc
     * @example
     * // Get one EmojiInfoDesc
     * const emojiInfoDesc = await prisma.emojiInfoDesc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmojiInfoDescFindFirstArgs>(args?: SelectSubset<T, EmojiInfoDescFindFirstArgs<ExtArgs>>): Prisma__EmojiInfoDescClient<$Result.GetResult<Prisma.$EmojiInfoDescPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmojiInfoDesc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoDescFindFirstOrThrowArgs} args - Arguments to find a EmojiInfoDesc
     * @example
     * // Get one EmojiInfoDesc
     * const emojiInfoDesc = await prisma.emojiInfoDesc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmojiInfoDescFindFirstOrThrowArgs>(args?: SelectSubset<T, EmojiInfoDescFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmojiInfoDescClient<$Result.GetResult<Prisma.$EmojiInfoDescPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmojiInfoDescs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoDescFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmojiInfoDescs
     * const emojiInfoDescs = await prisma.emojiInfoDesc.findMany()
     * 
     * // Get first 10 EmojiInfoDescs
     * const emojiInfoDescs = await prisma.emojiInfoDesc.findMany({ take: 10 })
     * 
     * // Only select the `md5_lang`
     * const emojiInfoDescWithMd5_langOnly = await prisma.emojiInfoDesc.findMany({ select: { md5_lang: true } })
     * 
     */
    findMany<T extends EmojiInfoDescFindManyArgs>(args?: SelectSubset<T, EmojiInfoDescFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmojiInfoDescPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmojiInfoDesc.
     * @param {EmojiInfoDescCreateArgs} args - Arguments to create a EmojiInfoDesc.
     * @example
     * // Create one EmojiInfoDesc
     * const EmojiInfoDesc = await prisma.emojiInfoDesc.create({
     *   data: {
     *     // ... data to create a EmojiInfoDesc
     *   }
     * })
     * 
     */
    create<T extends EmojiInfoDescCreateArgs>(args: SelectSubset<T, EmojiInfoDescCreateArgs<ExtArgs>>): Prisma__EmojiInfoDescClient<$Result.GetResult<Prisma.$EmojiInfoDescPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmojiInfoDescs.
     * @param {EmojiInfoDescCreateManyArgs} args - Arguments to create many EmojiInfoDescs.
     * @example
     * // Create many EmojiInfoDescs
     * const emojiInfoDesc = await prisma.emojiInfoDesc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmojiInfoDescCreateManyArgs>(args?: SelectSubset<T, EmojiInfoDescCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmojiInfoDescs and returns the data saved in the database.
     * @param {EmojiInfoDescCreateManyAndReturnArgs} args - Arguments to create many EmojiInfoDescs.
     * @example
     * // Create many EmojiInfoDescs
     * const emojiInfoDesc = await prisma.emojiInfoDesc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmojiInfoDescs and only return the `md5_lang`
     * const emojiInfoDescWithMd5_langOnly = await prisma.emojiInfoDesc.createManyAndReturn({
     *   select: { md5_lang: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmojiInfoDescCreateManyAndReturnArgs>(args?: SelectSubset<T, EmojiInfoDescCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmojiInfoDescPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmojiInfoDesc.
     * @param {EmojiInfoDescDeleteArgs} args - Arguments to delete one EmojiInfoDesc.
     * @example
     * // Delete one EmojiInfoDesc
     * const EmojiInfoDesc = await prisma.emojiInfoDesc.delete({
     *   where: {
     *     // ... filter to delete one EmojiInfoDesc
     *   }
     * })
     * 
     */
    delete<T extends EmojiInfoDescDeleteArgs>(args: SelectSubset<T, EmojiInfoDescDeleteArgs<ExtArgs>>): Prisma__EmojiInfoDescClient<$Result.GetResult<Prisma.$EmojiInfoDescPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmojiInfoDesc.
     * @param {EmojiInfoDescUpdateArgs} args - Arguments to update one EmojiInfoDesc.
     * @example
     * // Update one EmojiInfoDesc
     * const emojiInfoDesc = await prisma.emojiInfoDesc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmojiInfoDescUpdateArgs>(args: SelectSubset<T, EmojiInfoDescUpdateArgs<ExtArgs>>): Prisma__EmojiInfoDescClient<$Result.GetResult<Prisma.$EmojiInfoDescPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmojiInfoDescs.
     * @param {EmojiInfoDescDeleteManyArgs} args - Arguments to filter EmojiInfoDescs to delete.
     * @example
     * // Delete a few EmojiInfoDescs
     * const { count } = await prisma.emojiInfoDesc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmojiInfoDescDeleteManyArgs>(args?: SelectSubset<T, EmojiInfoDescDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmojiInfoDescs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoDescUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmojiInfoDescs
     * const emojiInfoDesc = await prisma.emojiInfoDesc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmojiInfoDescUpdateManyArgs>(args: SelectSubset<T, EmojiInfoDescUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmojiInfoDescs and returns the data updated in the database.
     * @param {EmojiInfoDescUpdateManyAndReturnArgs} args - Arguments to update many EmojiInfoDescs.
     * @example
     * // Update many EmojiInfoDescs
     * const emojiInfoDesc = await prisma.emojiInfoDesc.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmojiInfoDescs and only return the `md5_lang`
     * const emojiInfoDescWithMd5_langOnly = await prisma.emojiInfoDesc.updateManyAndReturn({
     *   select: { md5_lang: true },
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
    updateManyAndReturn<T extends EmojiInfoDescUpdateManyAndReturnArgs>(args: SelectSubset<T, EmojiInfoDescUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmojiInfoDescPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmojiInfoDesc.
     * @param {EmojiInfoDescUpsertArgs} args - Arguments to update or create a EmojiInfoDesc.
     * @example
     * // Update or create a EmojiInfoDesc
     * const emojiInfoDesc = await prisma.emojiInfoDesc.upsert({
     *   create: {
     *     // ... data to create a EmojiInfoDesc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmojiInfoDesc we want to update
     *   }
     * })
     */
    upsert<T extends EmojiInfoDescUpsertArgs>(args: SelectSubset<T, EmojiInfoDescUpsertArgs<ExtArgs>>): Prisma__EmojiInfoDescClient<$Result.GetResult<Prisma.$EmojiInfoDescPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmojiInfoDescs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoDescCountArgs} args - Arguments to filter EmojiInfoDescs to count.
     * @example
     * // Count the number of EmojiInfoDescs
     * const count = await prisma.emojiInfoDesc.count({
     *   where: {
     *     // ... the filter for the EmojiInfoDescs we want to count
     *   }
     * })
    **/
    count<T extends EmojiInfoDescCountArgs>(
      args?: Subset<T, EmojiInfoDescCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmojiInfoDescCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmojiInfoDesc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoDescAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmojiInfoDescAggregateArgs>(args: Subset<T, EmojiInfoDescAggregateArgs>): Prisma.PrismaPromise<GetEmojiInfoDescAggregateType<T>>

    /**
     * Group by EmojiInfoDesc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoDescGroupByArgs} args - Group by arguments.
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
      T extends EmojiInfoDescGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmojiInfoDescGroupByArgs['orderBy'] }
        : { orderBy?: EmojiInfoDescGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmojiInfoDescGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmojiInfoDescGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmojiInfoDesc model
   */
  readonly fields: EmojiInfoDescFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmojiInfoDesc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmojiInfoDescClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EmojiInfoDesc model
   */
  interface EmojiInfoDescFieldRefs {
    readonly md5_lang: FieldRef<"EmojiInfoDesc", 'String'>
    readonly md5: FieldRef<"EmojiInfoDesc", 'String'>
    readonly lang: FieldRef<"EmojiInfoDesc", 'String'>
    readonly desc: FieldRef<"EmojiInfoDesc", 'String'>
    readonly groupId: FieldRef<"EmojiInfoDesc", 'String'>
    readonly click_flag: FieldRef<"EmojiInfoDesc", 'Int'>
    readonly download_flag: FieldRef<"EmojiInfoDesc", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EmojiInfoDesc findUnique
   */
  export type EmojiInfoDescFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfoDesc
     */
    select?: EmojiInfoDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfoDesc
     */
    omit?: EmojiInfoDescOmit<ExtArgs> | null
    /**
     * Filter, which EmojiInfoDesc to fetch.
     */
    where: EmojiInfoDescWhereUniqueInput
  }

  /**
   * EmojiInfoDesc findUniqueOrThrow
   */
  export type EmojiInfoDescFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfoDesc
     */
    select?: EmojiInfoDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfoDesc
     */
    omit?: EmojiInfoDescOmit<ExtArgs> | null
    /**
     * Filter, which EmojiInfoDesc to fetch.
     */
    where: EmojiInfoDescWhereUniqueInput
  }

  /**
   * EmojiInfoDesc findFirst
   */
  export type EmojiInfoDescFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfoDesc
     */
    select?: EmojiInfoDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfoDesc
     */
    omit?: EmojiInfoDescOmit<ExtArgs> | null
    /**
     * Filter, which EmojiInfoDesc to fetch.
     */
    where?: EmojiInfoDescWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiInfoDescs to fetch.
     */
    orderBy?: EmojiInfoDescOrderByWithRelationInput | EmojiInfoDescOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmojiInfoDescs.
     */
    cursor?: EmojiInfoDescWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiInfoDescs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiInfoDescs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmojiInfoDescs.
     */
    distinct?: EmojiInfoDescScalarFieldEnum | EmojiInfoDescScalarFieldEnum[]
  }

  /**
   * EmojiInfoDesc findFirstOrThrow
   */
  export type EmojiInfoDescFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfoDesc
     */
    select?: EmojiInfoDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfoDesc
     */
    omit?: EmojiInfoDescOmit<ExtArgs> | null
    /**
     * Filter, which EmojiInfoDesc to fetch.
     */
    where?: EmojiInfoDescWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiInfoDescs to fetch.
     */
    orderBy?: EmojiInfoDescOrderByWithRelationInput | EmojiInfoDescOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmojiInfoDescs.
     */
    cursor?: EmojiInfoDescWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiInfoDescs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiInfoDescs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmojiInfoDescs.
     */
    distinct?: EmojiInfoDescScalarFieldEnum | EmojiInfoDescScalarFieldEnum[]
  }

  /**
   * EmojiInfoDesc findMany
   */
  export type EmojiInfoDescFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfoDesc
     */
    select?: EmojiInfoDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfoDesc
     */
    omit?: EmojiInfoDescOmit<ExtArgs> | null
    /**
     * Filter, which EmojiInfoDescs to fetch.
     */
    where?: EmojiInfoDescWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiInfoDescs to fetch.
     */
    orderBy?: EmojiInfoDescOrderByWithRelationInput | EmojiInfoDescOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmojiInfoDescs.
     */
    cursor?: EmojiInfoDescWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiInfoDescs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiInfoDescs.
     */
    skip?: number
    distinct?: EmojiInfoDescScalarFieldEnum | EmojiInfoDescScalarFieldEnum[]
  }

  /**
   * EmojiInfoDesc create
   */
  export type EmojiInfoDescCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfoDesc
     */
    select?: EmojiInfoDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfoDesc
     */
    omit?: EmojiInfoDescOmit<ExtArgs> | null
    /**
     * The data needed to create a EmojiInfoDesc.
     */
    data: XOR<EmojiInfoDescCreateInput, EmojiInfoDescUncheckedCreateInput>
  }

  /**
   * EmojiInfoDesc createMany
   */
  export type EmojiInfoDescCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmojiInfoDescs.
     */
    data: EmojiInfoDescCreateManyInput | EmojiInfoDescCreateManyInput[]
  }

  /**
   * EmojiInfoDesc createManyAndReturn
   */
  export type EmojiInfoDescCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfoDesc
     */
    select?: EmojiInfoDescSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfoDesc
     */
    omit?: EmojiInfoDescOmit<ExtArgs> | null
    /**
     * The data used to create many EmojiInfoDescs.
     */
    data: EmojiInfoDescCreateManyInput | EmojiInfoDescCreateManyInput[]
  }

  /**
   * EmojiInfoDesc update
   */
  export type EmojiInfoDescUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfoDesc
     */
    select?: EmojiInfoDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfoDesc
     */
    omit?: EmojiInfoDescOmit<ExtArgs> | null
    /**
     * The data needed to update a EmojiInfoDesc.
     */
    data: XOR<EmojiInfoDescUpdateInput, EmojiInfoDescUncheckedUpdateInput>
    /**
     * Choose, which EmojiInfoDesc to update.
     */
    where: EmojiInfoDescWhereUniqueInput
  }

  /**
   * EmojiInfoDesc updateMany
   */
  export type EmojiInfoDescUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmojiInfoDescs.
     */
    data: XOR<EmojiInfoDescUpdateManyMutationInput, EmojiInfoDescUncheckedUpdateManyInput>
    /**
     * Filter which EmojiInfoDescs to update
     */
    where?: EmojiInfoDescWhereInput
    /**
     * Limit how many EmojiInfoDescs to update.
     */
    limit?: number
  }

  /**
   * EmojiInfoDesc updateManyAndReturn
   */
  export type EmojiInfoDescUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfoDesc
     */
    select?: EmojiInfoDescSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfoDesc
     */
    omit?: EmojiInfoDescOmit<ExtArgs> | null
    /**
     * The data used to update EmojiInfoDescs.
     */
    data: XOR<EmojiInfoDescUpdateManyMutationInput, EmojiInfoDescUncheckedUpdateManyInput>
    /**
     * Filter which EmojiInfoDescs to update
     */
    where?: EmojiInfoDescWhereInput
    /**
     * Limit how many EmojiInfoDescs to update.
     */
    limit?: number
  }

  /**
   * EmojiInfoDesc upsert
   */
  export type EmojiInfoDescUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfoDesc
     */
    select?: EmojiInfoDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfoDesc
     */
    omit?: EmojiInfoDescOmit<ExtArgs> | null
    /**
     * The filter to search for the EmojiInfoDesc to update in case it exists.
     */
    where: EmojiInfoDescWhereUniqueInput
    /**
     * In case the EmojiInfoDesc found by the `where` argument doesn't exist, create a new EmojiInfoDesc with this data.
     */
    create: XOR<EmojiInfoDescCreateInput, EmojiInfoDescUncheckedCreateInput>
    /**
     * In case the EmojiInfoDesc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmojiInfoDescUpdateInput, EmojiInfoDescUncheckedUpdateInput>
  }

  /**
   * EmojiInfoDesc delete
   */
  export type EmojiInfoDescDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfoDesc
     */
    select?: EmojiInfoDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfoDesc
     */
    omit?: EmojiInfoDescOmit<ExtArgs> | null
    /**
     * Filter which EmojiInfoDesc to delete.
     */
    where: EmojiInfoDescWhereUniqueInput
  }

  /**
   * EmojiInfoDesc deleteMany
   */
  export type EmojiInfoDescDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmojiInfoDescs to delete
     */
    where?: EmojiInfoDescWhereInput
    /**
     * Limit how many EmojiInfoDescs to delete.
     */
    limit?: number
  }

  /**
   * EmojiInfoDesc without action
   */
  export type EmojiInfoDescDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfoDesc
     */
    select?: EmojiInfoDescSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfoDesc
     */
    omit?: EmojiInfoDescOmit<ExtArgs> | null
  }


  /**
   * Model EmojiInfo
   */

  export type AggregateEmojiInfo = {
    _count: EmojiInfoCountAggregateOutputType | null
    _avg: EmojiInfoAvgAggregateOutputType | null
    _sum: EmojiInfoSumAggregateOutputType | null
    _min: EmojiInfoMinAggregateOutputType | null
    _max: EmojiInfoMaxAggregateOutputType | null
  }

  export type EmojiInfoAvgAggregateOutputType = {
    catalog: number | null
    type: number | null
    size: number | null
    start: number | null
    state: number | null
    reserved3: number | null
    reserved4: number | null
    lastUseTime: number | null
    idx: number | null
    temp: number | null
    source: number | null
    needupload: number | null
    width: number | null
    height: number | null
    captureStatus: number | null
    captureUploadErrCode: number | null
    captureUploadCounter: number | null
    captureEnterTime: number | null
    captureScene: number | null
    emojiFlag: number | null
  }

  export type EmojiInfoSumAggregateOutputType = {
    catalog: number | null
    type: number | null
    size: number | null
    start: number | null
    state: number | null
    reserved3: number | null
    reserved4: number | null
    lastUseTime: bigint | null
    idx: number | null
    temp: number | null
    source: number | null
    needupload: number | null
    width: number | null
    height: number | null
    captureStatus: number | null
    captureUploadErrCode: number | null
    captureUploadCounter: number | null
    captureEnterTime: bigint | null
    captureScene: number | null
    emojiFlag: bigint | null
  }

  export type EmojiInfoMinAggregateOutputType = {
    md5: string | null
    svrid: string | null
    catalog: number | null
    type: number | null
    size: number | null
    start: number | null
    state: number | null
    name: string | null
    content: string | null
    reserved1: string | null
    reserved2: string | null
    reserved3: number | null
    reserved4: number | null
    app_id: string | null
    groupId: string | null
    lastUseTime: bigint | null
    framesInfo: string | null
    idx: number | null
    temp: number | null
    source: number | null
    needupload: number | null
    designerID: string | null
    thumbUrl: string | null
    cdnUrl: string | null
    encrypturl: string | null
    aeskey: string | null
    width: number | null
    height: number | null
    externUrl: string | null
    externMd5: string | null
    activityid: string | null
    tpurl: string | null
    tpauthkey: string | null
    wxamMd5: string | null
    attachedText: string | null
    captureStatus: number | null
    attachedEmojiMD5: Bytes | null
    imitateMd5: string | null
    captureUploadErrCode: number | null
    captureUploadCounter: number | null
    captureEnterTime: bigint | null
    lensId: string | null
    attachTextColor: string | null
    captureScene: number | null
    attr: string | null
    linkId: string | null
    meanings: string | null
    custom_meaning: string | null
    emojiFlag: bigint | null
  }

  export type EmojiInfoMaxAggregateOutputType = {
    md5: string | null
    svrid: string | null
    catalog: number | null
    type: number | null
    size: number | null
    start: number | null
    state: number | null
    name: string | null
    content: string | null
    reserved1: string | null
    reserved2: string | null
    reserved3: number | null
    reserved4: number | null
    app_id: string | null
    groupId: string | null
    lastUseTime: bigint | null
    framesInfo: string | null
    idx: number | null
    temp: number | null
    source: number | null
    needupload: number | null
    designerID: string | null
    thumbUrl: string | null
    cdnUrl: string | null
    encrypturl: string | null
    aeskey: string | null
    width: number | null
    height: number | null
    externUrl: string | null
    externMd5: string | null
    activityid: string | null
    tpurl: string | null
    tpauthkey: string | null
    wxamMd5: string | null
    attachedText: string | null
    captureStatus: number | null
    attachedEmojiMD5: Bytes | null
    imitateMd5: string | null
    captureUploadErrCode: number | null
    captureUploadCounter: number | null
    captureEnterTime: bigint | null
    lensId: string | null
    attachTextColor: string | null
    captureScene: number | null
    attr: string | null
    linkId: string | null
    meanings: string | null
    custom_meaning: string | null
    emojiFlag: bigint | null
  }

  export type EmojiInfoCountAggregateOutputType = {
    md5: number
    svrid: number
    catalog: number
    type: number
    size: number
    start: number
    state: number
    name: number
    content: number
    reserved1: number
    reserved2: number
    reserved3: number
    reserved4: number
    app_id: number
    groupId: number
    lastUseTime: number
    framesInfo: number
    idx: number
    temp: number
    source: number
    needupload: number
    designerID: number
    thumbUrl: number
    cdnUrl: number
    encrypturl: number
    aeskey: number
    width: number
    height: number
    externUrl: number
    externMd5: number
    activityid: number
    tpurl: number
    tpauthkey: number
    wxamMd5: number
    attachedText: number
    captureStatus: number
    attachedEmojiMD5: number
    imitateMd5: number
    captureUploadErrCode: number
    captureUploadCounter: number
    captureEnterTime: number
    lensId: number
    attachTextColor: number
    captureScene: number
    attr: number
    linkId: number
    meanings: number
    custom_meaning: number
    emojiFlag: number
    _all: number
  }


  export type EmojiInfoAvgAggregateInputType = {
    catalog?: true
    type?: true
    size?: true
    start?: true
    state?: true
    reserved3?: true
    reserved4?: true
    lastUseTime?: true
    idx?: true
    temp?: true
    source?: true
    needupload?: true
    width?: true
    height?: true
    captureStatus?: true
    captureUploadErrCode?: true
    captureUploadCounter?: true
    captureEnterTime?: true
    captureScene?: true
    emojiFlag?: true
  }

  export type EmojiInfoSumAggregateInputType = {
    catalog?: true
    type?: true
    size?: true
    start?: true
    state?: true
    reserved3?: true
    reserved4?: true
    lastUseTime?: true
    idx?: true
    temp?: true
    source?: true
    needupload?: true
    width?: true
    height?: true
    captureStatus?: true
    captureUploadErrCode?: true
    captureUploadCounter?: true
    captureEnterTime?: true
    captureScene?: true
    emojiFlag?: true
  }

  export type EmojiInfoMinAggregateInputType = {
    md5?: true
    svrid?: true
    catalog?: true
    type?: true
    size?: true
    start?: true
    state?: true
    name?: true
    content?: true
    reserved1?: true
    reserved2?: true
    reserved3?: true
    reserved4?: true
    app_id?: true
    groupId?: true
    lastUseTime?: true
    framesInfo?: true
    idx?: true
    temp?: true
    source?: true
    needupload?: true
    designerID?: true
    thumbUrl?: true
    cdnUrl?: true
    encrypturl?: true
    aeskey?: true
    width?: true
    height?: true
    externUrl?: true
    externMd5?: true
    activityid?: true
    tpurl?: true
    tpauthkey?: true
    wxamMd5?: true
    attachedText?: true
    captureStatus?: true
    attachedEmojiMD5?: true
    imitateMd5?: true
    captureUploadErrCode?: true
    captureUploadCounter?: true
    captureEnterTime?: true
    lensId?: true
    attachTextColor?: true
    captureScene?: true
    attr?: true
    linkId?: true
    meanings?: true
    custom_meaning?: true
    emojiFlag?: true
  }

  export type EmojiInfoMaxAggregateInputType = {
    md5?: true
    svrid?: true
    catalog?: true
    type?: true
    size?: true
    start?: true
    state?: true
    name?: true
    content?: true
    reserved1?: true
    reserved2?: true
    reserved3?: true
    reserved4?: true
    app_id?: true
    groupId?: true
    lastUseTime?: true
    framesInfo?: true
    idx?: true
    temp?: true
    source?: true
    needupload?: true
    designerID?: true
    thumbUrl?: true
    cdnUrl?: true
    encrypturl?: true
    aeskey?: true
    width?: true
    height?: true
    externUrl?: true
    externMd5?: true
    activityid?: true
    tpurl?: true
    tpauthkey?: true
    wxamMd5?: true
    attachedText?: true
    captureStatus?: true
    attachedEmojiMD5?: true
    imitateMd5?: true
    captureUploadErrCode?: true
    captureUploadCounter?: true
    captureEnterTime?: true
    lensId?: true
    attachTextColor?: true
    captureScene?: true
    attr?: true
    linkId?: true
    meanings?: true
    custom_meaning?: true
    emojiFlag?: true
  }

  export type EmojiInfoCountAggregateInputType = {
    md5?: true
    svrid?: true
    catalog?: true
    type?: true
    size?: true
    start?: true
    state?: true
    name?: true
    content?: true
    reserved1?: true
    reserved2?: true
    reserved3?: true
    reserved4?: true
    app_id?: true
    groupId?: true
    lastUseTime?: true
    framesInfo?: true
    idx?: true
    temp?: true
    source?: true
    needupload?: true
    designerID?: true
    thumbUrl?: true
    cdnUrl?: true
    encrypturl?: true
    aeskey?: true
    width?: true
    height?: true
    externUrl?: true
    externMd5?: true
    activityid?: true
    tpurl?: true
    tpauthkey?: true
    wxamMd5?: true
    attachedText?: true
    captureStatus?: true
    attachedEmojiMD5?: true
    imitateMd5?: true
    captureUploadErrCode?: true
    captureUploadCounter?: true
    captureEnterTime?: true
    lensId?: true
    attachTextColor?: true
    captureScene?: true
    attr?: true
    linkId?: true
    meanings?: true
    custom_meaning?: true
    emojiFlag?: true
    _all?: true
  }

  export type EmojiInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmojiInfo to aggregate.
     */
    where?: EmojiInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiInfos to fetch.
     */
    orderBy?: EmojiInfoOrderByWithRelationInput | EmojiInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmojiInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmojiInfos
    **/
    _count?: true | EmojiInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmojiInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmojiInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmojiInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmojiInfoMaxAggregateInputType
  }

  export type GetEmojiInfoAggregateType<T extends EmojiInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmojiInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmojiInfo[P]>
      : GetScalarType<T[P], AggregateEmojiInfo[P]>
  }




  export type EmojiInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmojiInfoWhereInput
    orderBy?: EmojiInfoOrderByWithAggregationInput | EmojiInfoOrderByWithAggregationInput[]
    by: EmojiInfoScalarFieldEnum[] | EmojiInfoScalarFieldEnum
    having?: EmojiInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmojiInfoCountAggregateInputType | true
    _avg?: EmojiInfoAvgAggregateInputType
    _sum?: EmojiInfoSumAggregateInputType
    _min?: EmojiInfoMinAggregateInputType
    _max?: EmojiInfoMaxAggregateInputType
  }

  export type EmojiInfoGroupByOutputType = {
    md5: string
    svrid: string | null
    catalog: number | null
    type: number | null
    size: number | null
    start: number | null
    state: number | null
    name: string | null
    content: string | null
    reserved1: string | null
    reserved2: string | null
    reserved3: number | null
    reserved4: number | null
    app_id: string | null
    groupId: string | null
    lastUseTime: bigint | null
    framesInfo: string | null
    idx: number | null
    temp: number | null
    source: number | null
    needupload: number | null
    designerID: string | null
    thumbUrl: string | null
    cdnUrl: string | null
    encrypturl: string | null
    aeskey: string | null
    width: number | null
    height: number | null
    externUrl: string | null
    externMd5: string | null
    activityid: string | null
    tpurl: string | null
    tpauthkey: string | null
    wxamMd5: string | null
    attachedText: string | null
    captureStatus: number | null
    attachedEmojiMD5: Bytes | null
    imitateMd5: string | null
    captureUploadErrCode: number | null
    captureUploadCounter: number | null
    captureEnterTime: bigint | null
    lensId: string | null
    attachTextColor: string | null
    captureScene: number | null
    attr: string | null
    linkId: string | null
    meanings: string | null
    custom_meaning: string | null
    emojiFlag: bigint | null
    _count: EmojiInfoCountAggregateOutputType | null
    _avg: EmojiInfoAvgAggregateOutputType | null
    _sum: EmojiInfoSumAggregateOutputType | null
    _min: EmojiInfoMinAggregateOutputType | null
    _max: EmojiInfoMaxAggregateOutputType | null
  }

  type GetEmojiInfoGroupByPayload<T extends EmojiInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmojiInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmojiInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmojiInfoGroupByOutputType[P]>
            : GetScalarType<T[P], EmojiInfoGroupByOutputType[P]>
        }
      >
    >


  export type EmojiInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    md5?: boolean
    svrid?: boolean
    catalog?: boolean
    type?: boolean
    size?: boolean
    start?: boolean
    state?: boolean
    name?: boolean
    content?: boolean
    reserved1?: boolean
    reserved2?: boolean
    reserved3?: boolean
    reserved4?: boolean
    app_id?: boolean
    groupId?: boolean
    lastUseTime?: boolean
    framesInfo?: boolean
    idx?: boolean
    temp?: boolean
    source?: boolean
    needupload?: boolean
    designerID?: boolean
    thumbUrl?: boolean
    cdnUrl?: boolean
    encrypturl?: boolean
    aeskey?: boolean
    width?: boolean
    height?: boolean
    externUrl?: boolean
    externMd5?: boolean
    activityid?: boolean
    tpurl?: boolean
    tpauthkey?: boolean
    wxamMd5?: boolean
    attachedText?: boolean
    captureStatus?: boolean
    attachedEmojiMD5?: boolean
    imitateMd5?: boolean
    captureUploadErrCode?: boolean
    captureUploadCounter?: boolean
    captureEnterTime?: boolean
    lensId?: boolean
    attachTextColor?: boolean
    captureScene?: boolean
    attr?: boolean
    linkId?: boolean
    meanings?: boolean
    custom_meaning?: boolean
    emojiFlag?: boolean
  }, ExtArgs["result"]["emojiInfo"]>

  export type EmojiInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    md5?: boolean
    svrid?: boolean
    catalog?: boolean
    type?: boolean
    size?: boolean
    start?: boolean
    state?: boolean
    name?: boolean
    content?: boolean
    reserved1?: boolean
    reserved2?: boolean
    reserved3?: boolean
    reserved4?: boolean
    app_id?: boolean
    groupId?: boolean
    lastUseTime?: boolean
    framesInfo?: boolean
    idx?: boolean
    temp?: boolean
    source?: boolean
    needupload?: boolean
    designerID?: boolean
    thumbUrl?: boolean
    cdnUrl?: boolean
    encrypturl?: boolean
    aeskey?: boolean
    width?: boolean
    height?: boolean
    externUrl?: boolean
    externMd5?: boolean
    activityid?: boolean
    tpurl?: boolean
    tpauthkey?: boolean
    wxamMd5?: boolean
    attachedText?: boolean
    captureStatus?: boolean
    attachedEmojiMD5?: boolean
    imitateMd5?: boolean
    captureUploadErrCode?: boolean
    captureUploadCounter?: boolean
    captureEnterTime?: boolean
    lensId?: boolean
    attachTextColor?: boolean
    captureScene?: boolean
    attr?: boolean
    linkId?: boolean
    meanings?: boolean
    custom_meaning?: boolean
    emojiFlag?: boolean
  }, ExtArgs["result"]["emojiInfo"]>

  export type EmojiInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    md5?: boolean
    svrid?: boolean
    catalog?: boolean
    type?: boolean
    size?: boolean
    start?: boolean
    state?: boolean
    name?: boolean
    content?: boolean
    reserved1?: boolean
    reserved2?: boolean
    reserved3?: boolean
    reserved4?: boolean
    app_id?: boolean
    groupId?: boolean
    lastUseTime?: boolean
    framesInfo?: boolean
    idx?: boolean
    temp?: boolean
    source?: boolean
    needupload?: boolean
    designerID?: boolean
    thumbUrl?: boolean
    cdnUrl?: boolean
    encrypturl?: boolean
    aeskey?: boolean
    width?: boolean
    height?: boolean
    externUrl?: boolean
    externMd5?: boolean
    activityid?: boolean
    tpurl?: boolean
    tpauthkey?: boolean
    wxamMd5?: boolean
    attachedText?: boolean
    captureStatus?: boolean
    attachedEmojiMD5?: boolean
    imitateMd5?: boolean
    captureUploadErrCode?: boolean
    captureUploadCounter?: boolean
    captureEnterTime?: boolean
    lensId?: boolean
    attachTextColor?: boolean
    captureScene?: boolean
    attr?: boolean
    linkId?: boolean
    meanings?: boolean
    custom_meaning?: boolean
    emojiFlag?: boolean
  }, ExtArgs["result"]["emojiInfo"]>

  export type EmojiInfoSelectScalar = {
    md5?: boolean
    svrid?: boolean
    catalog?: boolean
    type?: boolean
    size?: boolean
    start?: boolean
    state?: boolean
    name?: boolean
    content?: boolean
    reserved1?: boolean
    reserved2?: boolean
    reserved3?: boolean
    reserved4?: boolean
    app_id?: boolean
    groupId?: boolean
    lastUseTime?: boolean
    framesInfo?: boolean
    idx?: boolean
    temp?: boolean
    source?: boolean
    needupload?: boolean
    designerID?: boolean
    thumbUrl?: boolean
    cdnUrl?: boolean
    encrypturl?: boolean
    aeskey?: boolean
    width?: boolean
    height?: boolean
    externUrl?: boolean
    externMd5?: boolean
    activityid?: boolean
    tpurl?: boolean
    tpauthkey?: boolean
    wxamMd5?: boolean
    attachedText?: boolean
    captureStatus?: boolean
    attachedEmojiMD5?: boolean
    imitateMd5?: boolean
    captureUploadErrCode?: boolean
    captureUploadCounter?: boolean
    captureEnterTime?: boolean
    lensId?: boolean
    attachTextColor?: boolean
    captureScene?: boolean
    attr?: boolean
    linkId?: boolean
    meanings?: boolean
    custom_meaning?: boolean
    emojiFlag?: boolean
  }

  export type EmojiInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"md5" | "svrid" | "catalog" | "type" | "size" | "start" | "state" | "name" | "content" | "reserved1" | "reserved2" | "reserved3" | "reserved4" | "app_id" | "groupId" | "lastUseTime" | "framesInfo" | "idx" | "temp" | "source" | "needupload" | "designerID" | "thumbUrl" | "cdnUrl" | "encrypturl" | "aeskey" | "width" | "height" | "externUrl" | "externMd5" | "activityid" | "tpurl" | "tpauthkey" | "wxamMd5" | "attachedText" | "captureStatus" | "attachedEmojiMD5" | "imitateMd5" | "captureUploadErrCode" | "captureUploadCounter" | "captureEnterTime" | "lensId" | "attachTextColor" | "captureScene" | "attr" | "linkId" | "meanings" | "custom_meaning" | "emojiFlag", ExtArgs["result"]["emojiInfo"]>

  export type $EmojiInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmojiInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      md5: string
      svrid: string | null
      catalog: number | null
      type: number | null
      size: number | null
      start: number | null
      state: number | null
      name: string | null
      content: string | null
      reserved1: string | null
      reserved2: string | null
      reserved3: number | null
      reserved4: number | null
      app_id: string | null
      groupId: string | null
      lastUseTime: bigint | null
      framesInfo: string | null
      idx: number | null
      temp: number | null
      source: number | null
      needupload: number | null
      designerID: string | null
      thumbUrl: string | null
      cdnUrl: string | null
      encrypturl: string | null
      aeskey: string | null
      width: number | null
      height: number | null
      externUrl: string | null
      externMd5: string | null
      activityid: string | null
      tpurl: string | null
      tpauthkey: string | null
      wxamMd5: string | null
      attachedText: string | null
      captureStatus: number | null
      attachedEmojiMD5: Prisma.Bytes | null
      imitateMd5: string | null
      captureUploadErrCode: number | null
      captureUploadCounter: number | null
      captureEnterTime: bigint | null
      lensId: string | null
      attachTextColor: string | null
      captureScene: number | null
      attr: string | null
      linkId: string | null
      meanings: string | null
      custom_meaning: string | null
      emojiFlag: bigint | null
    }, ExtArgs["result"]["emojiInfo"]>
    composites: {}
  }

  type EmojiInfoGetPayload<S extends boolean | null | undefined | EmojiInfoDefaultArgs> = $Result.GetResult<Prisma.$EmojiInfoPayload, S>

  type EmojiInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmojiInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmojiInfoCountAggregateInputType | true
    }

  export interface EmojiInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmojiInfo'], meta: { name: 'EmojiInfo' } }
    /**
     * Find zero or one EmojiInfo that matches the filter.
     * @param {EmojiInfoFindUniqueArgs} args - Arguments to find a EmojiInfo
     * @example
     * // Get one EmojiInfo
     * const emojiInfo = await prisma.emojiInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmojiInfoFindUniqueArgs>(args: SelectSubset<T, EmojiInfoFindUniqueArgs<ExtArgs>>): Prisma__EmojiInfoClient<$Result.GetResult<Prisma.$EmojiInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmojiInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmojiInfoFindUniqueOrThrowArgs} args - Arguments to find a EmojiInfo
     * @example
     * // Get one EmojiInfo
     * const emojiInfo = await prisma.emojiInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmojiInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmojiInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmojiInfoClient<$Result.GetResult<Prisma.$EmojiInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmojiInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoFindFirstArgs} args - Arguments to find a EmojiInfo
     * @example
     * // Get one EmojiInfo
     * const emojiInfo = await prisma.emojiInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmojiInfoFindFirstArgs>(args?: SelectSubset<T, EmojiInfoFindFirstArgs<ExtArgs>>): Prisma__EmojiInfoClient<$Result.GetResult<Prisma.$EmojiInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmojiInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoFindFirstOrThrowArgs} args - Arguments to find a EmojiInfo
     * @example
     * // Get one EmojiInfo
     * const emojiInfo = await prisma.emojiInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmojiInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmojiInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmojiInfoClient<$Result.GetResult<Prisma.$EmojiInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmojiInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmojiInfos
     * const emojiInfos = await prisma.emojiInfo.findMany()
     * 
     * // Get first 10 EmojiInfos
     * const emojiInfos = await prisma.emojiInfo.findMany({ take: 10 })
     * 
     * // Only select the `md5`
     * const emojiInfoWithMd5Only = await prisma.emojiInfo.findMany({ select: { md5: true } })
     * 
     */
    findMany<T extends EmojiInfoFindManyArgs>(args?: SelectSubset<T, EmojiInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmojiInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmojiInfo.
     * @param {EmojiInfoCreateArgs} args - Arguments to create a EmojiInfo.
     * @example
     * // Create one EmojiInfo
     * const EmojiInfo = await prisma.emojiInfo.create({
     *   data: {
     *     // ... data to create a EmojiInfo
     *   }
     * })
     * 
     */
    create<T extends EmojiInfoCreateArgs>(args: SelectSubset<T, EmojiInfoCreateArgs<ExtArgs>>): Prisma__EmojiInfoClient<$Result.GetResult<Prisma.$EmojiInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmojiInfos.
     * @param {EmojiInfoCreateManyArgs} args - Arguments to create many EmojiInfos.
     * @example
     * // Create many EmojiInfos
     * const emojiInfo = await prisma.emojiInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmojiInfoCreateManyArgs>(args?: SelectSubset<T, EmojiInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmojiInfos and returns the data saved in the database.
     * @param {EmojiInfoCreateManyAndReturnArgs} args - Arguments to create many EmojiInfos.
     * @example
     * // Create many EmojiInfos
     * const emojiInfo = await prisma.emojiInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmojiInfos and only return the `md5`
     * const emojiInfoWithMd5Only = await prisma.emojiInfo.createManyAndReturn({
     *   select: { md5: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmojiInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmojiInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmojiInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmojiInfo.
     * @param {EmojiInfoDeleteArgs} args - Arguments to delete one EmojiInfo.
     * @example
     * // Delete one EmojiInfo
     * const EmojiInfo = await prisma.emojiInfo.delete({
     *   where: {
     *     // ... filter to delete one EmojiInfo
     *   }
     * })
     * 
     */
    delete<T extends EmojiInfoDeleteArgs>(args: SelectSubset<T, EmojiInfoDeleteArgs<ExtArgs>>): Prisma__EmojiInfoClient<$Result.GetResult<Prisma.$EmojiInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmojiInfo.
     * @param {EmojiInfoUpdateArgs} args - Arguments to update one EmojiInfo.
     * @example
     * // Update one EmojiInfo
     * const emojiInfo = await prisma.emojiInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmojiInfoUpdateArgs>(args: SelectSubset<T, EmojiInfoUpdateArgs<ExtArgs>>): Prisma__EmojiInfoClient<$Result.GetResult<Prisma.$EmojiInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmojiInfos.
     * @param {EmojiInfoDeleteManyArgs} args - Arguments to filter EmojiInfos to delete.
     * @example
     * // Delete a few EmojiInfos
     * const { count } = await prisma.emojiInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmojiInfoDeleteManyArgs>(args?: SelectSubset<T, EmojiInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmojiInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmojiInfos
     * const emojiInfo = await prisma.emojiInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmojiInfoUpdateManyArgs>(args: SelectSubset<T, EmojiInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmojiInfos and returns the data updated in the database.
     * @param {EmojiInfoUpdateManyAndReturnArgs} args - Arguments to update many EmojiInfos.
     * @example
     * // Update many EmojiInfos
     * const emojiInfo = await prisma.emojiInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmojiInfos and only return the `md5`
     * const emojiInfoWithMd5Only = await prisma.emojiInfo.updateManyAndReturn({
     *   select: { md5: true },
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
    updateManyAndReturn<T extends EmojiInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmojiInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmojiInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmojiInfo.
     * @param {EmojiInfoUpsertArgs} args - Arguments to update or create a EmojiInfo.
     * @example
     * // Update or create a EmojiInfo
     * const emojiInfo = await prisma.emojiInfo.upsert({
     *   create: {
     *     // ... data to create a EmojiInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmojiInfo we want to update
     *   }
     * })
     */
    upsert<T extends EmojiInfoUpsertArgs>(args: SelectSubset<T, EmojiInfoUpsertArgs<ExtArgs>>): Prisma__EmojiInfoClient<$Result.GetResult<Prisma.$EmojiInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmojiInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoCountArgs} args - Arguments to filter EmojiInfos to count.
     * @example
     * // Count the number of EmojiInfos
     * const count = await prisma.emojiInfo.count({
     *   where: {
     *     // ... the filter for the EmojiInfos we want to count
     *   }
     * })
    **/
    count<T extends EmojiInfoCountArgs>(
      args?: Subset<T, EmojiInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmojiInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmojiInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmojiInfoAggregateArgs>(args: Subset<T, EmojiInfoAggregateArgs>): Prisma.PrismaPromise<GetEmojiInfoAggregateType<T>>

    /**
     * Group by EmojiInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmojiInfoGroupByArgs} args - Group by arguments.
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
      T extends EmojiInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmojiInfoGroupByArgs['orderBy'] }
        : { orderBy?: EmojiInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmojiInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmojiInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmojiInfo model
   */
  readonly fields: EmojiInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmojiInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmojiInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EmojiInfo model
   */
  interface EmojiInfoFieldRefs {
    readonly md5: FieldRef<"EmojiInfo", 'String'>
    readonly svrid: FieldRef<"EmojiInfo", 'String'>
    readonly catalog: FieldRef<"EmojiInfo", 'Int'>
    readonly type: FieldRef<"EmojiInfo", 'Int'>
    readonly size: FieldRef<"EmojiInfo", 'Int'>
    readonly start: FieldRef<"EmojiInfo", 'Int'>
    readonly state: FieldRef<"EmojiInfo", 'Int'>
    readonly name: FieldRef<"EmojiInfo", 'String'>
    readonly content: FieldRef<"EmojiInfo", 'String'>
    readonly reserved1: FieldRef<"EmojiInfo", 'String'>
    readonly reserved2: FieldRef<"EmojiInfo", 'String'>
    readonly reserved3: FieldRef<"EmojiInfo", 'Int'>
    readonly reserved4: FieldRef<"EmojiInfo", 'Int'>
    readonly app_id: FieldRef<"EmojiInfo", 'String'>
    readonly groupId: FieldRef<"EmojiInfo", 'String'>
    readonly lastUseTime: FieldRef<"EmojiInfo", 'BigInt'>
    readonly framesInfo: FieldRef<"EmojiInfo", 'String'>
    readonly idx: FieldRef<"EmojiInfo", 'Int'>
    readonly temp: FieldRef<"EmojiInfo", 'Int'>
    readonly source: FieldRef<"EmojiInfo", 'Int'>
    readonly needupload: FieldRef<"EmojiInfo", 'Int'>
    readonly designerID: FieldRef<"EmojiInfo", 'String'>
    readonly thumbUrl: FieldRef<"EmojiInfo", 'String'>
    readonly cdnUrl: FieldRef<"EmojiInfo", 'String'>
    readonly encrypturl: FieldRef<"EmojiInfo", 'String'>
    readonly aeskey: FieldRef<"EmojiInfo", 'String'>
    readonly width: FieldRef<"EmojiInfo", 'Int'>
    readonly height: FieldRef<"EmojiInfo", 'Int'>
    readonly externUrl: FieldRef<"EmojiInfo", 'String'>
    readonly externMd5: FieldRef<"EmojiInfo", 'String'>
    readonly activityid: FieldRef<"EmojiInfo", 'String'>
    readonly tpurl: FieldRef<"EmojiInfo", 'String'>
    readonly tpauthkey: FieldRef<"EmojiInfo", 'String'>
    readonly wxamMd5: FieldRef<"EmojiInfo", 'String'>
    readonly attachedText: FieldRef<"EmojiInfo", 'String'>
    readonly captureStatus: FieldRef<"EmojiInfo", 'Int'>
    readonly attachedEmojiMD5: FieldRef<"EmojiInfo", 'Bytes'>
    readonly imitateMd5: FieldRef<"EmojiInfo", 'String'>
    readonly captureUploadErrCode: FieldRef<"EmojiInfo", 'Int'>
    readonly captureUploadCounter: FieldRef<"EmojiInfo", 'Int'>
    readonly captureEnterTime: FieldRef<"EmojiInfo", 'BigInt'>
    readonly lensId: FieldRef<"EmojiInfo", 'String'>
    readonly attachTextColor: FieldRef<"EmojiInfo", 'String'>
    readonly captureScene: FieldRef<"EmojiInfo", 'Int'>
    readonly attr: FieldRef<"EmojiInfo", 'String'>
    readonly linkId: FieldRef<"EmojiInfo", 'String'>
    readonly meanings: FieldRef<"EmojiInfo", 'String'>
    readonly custom_meaning: FieldRef<"EmojiInfo", 'String'>
    readonly emojiFlag: FieldRef<"EmojiInfo", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * EmojiInfo findUnique
   */
  export type EmojiInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfo
     */
    select?: EmojiInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfo
     */
    omit?: EmojiInfoOmit<ExtArgs> | null
    /**
     * Filter, which EmojiInfo to fetch.
     */
    where: EmojiInfoWhereUniqueInput
  }

  /**
   * EmojiInfo findUniqueOrThrow
   */
  export type EmojiInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfo
     */
    select?: EmojiInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfo
     */
    omit?: EmojiInfoOmit<ExtArgs> | null
    /**
     * Filter, which EmojiInfo to fetch.
     */
    where: EmojiInfoWhereUniqueInput
  }

  /**
   * EmojiInfo findFirst
   */
  export type EmojiInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfo
     */
    select?: EmojiInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfo
     */
    omit?: EmojiInfoOmit<ExtArgs> | null
    /**
     * Filter, which EmojiInfo to fetch.
     */
    where?: EmojiInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiInfos to fetch.
     */
    orderBy?: EmojiInfoOrderByWithRelationInput | EmojiInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmojiInfos.
     */
    cursor?: EmojiInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmojiInfos.
     */
    distinct?: EmojiInfoScalarFieldEnum | EmojiInfoScalarFieldEnum[]
  }

  /**
   * EmojiInfo findFirstOrThrow
   */
  export type EmojiInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfo
     */
    select?: EmojiInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfo
     */
    omit?: EmojiInfoOmit<ExtArgs> | null
    /**
     * Filter, which EmojiInfo to fetch.
     */
    where?: EmojiInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiInfos to fetch.
     */
    orderBy?: EmojiInfoOrderByWithRelationInput | EmojiInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmojiInfos.
     */
    cursor?: EmojiInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmojiInfos.
     */
    distinct?: EmojiInfoScalarFieldEnum | EmojiInfoScalarFieldEnum[]
  }

  /**
   * EmojiInfo findMany
   */
  export type EmojiInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfo
     */
    select?: EmojiInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfo
     */
    omit?: EmojiInfoOmit<ExtArgs> | null
    /**
     * Filter, which EmojiInfos to fetch.
     */
    where?: EmojiInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmojiInfos to fetch.
     */
    orderBy?: EmojiInfoOrderByWithRelationInput | EmojiInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmojiInfos.
     */
    cursor?: EmojiInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmojiInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmojiInfos.
     */
    skip?: number
    distinct?: EmojiInfoScalarFieldEnum | EmojiInfoScalarFieldEnum[]
  }

  /**
   * EmojiInfo create
   */
  export type EmojiInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfo
     */
    select?: EmojiInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfo
     */
    omit?: EmojiInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a EmojiInfo.
     */
    data: XOR<EmojiInfoCreateInput, EmojiInfoUncheckedCreateInput>
  }

  /**
   * EmojiInfo createMany
   */
  export type EmojiInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmojiInfos.
     */
    data: EmojiInfoCreateManyInput | EmojiInfoCreateManyInput[]
  }

  /**
   * EmojiInfo createManyAndReturn
   */
  export type EmojiInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfo
     */
    select?: EmojiInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfo
     */
    omit?: EmojiInfoOmit<ExtArgs> | null
    /**
     * The data used to create many EmojiInfos.
     */
    data: EmojiInfoCreateManyInput | EmojiInfoCreateManyInput[]
  }

  /**
   * EmojiInfo update
   */
  export type EmojiInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfo
     */
    select?: EmojiInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfo
     */
    omit?: EmojiInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a EmojiInfo.
     */
    data: XOR<EmojiInfoUpdateInput, EmojiInfoUncheckedUpdateInput>
    /**
     * Choose, which EmojiInfo to update.
     */
    where: EmojiInfoWhereUniqueInput
  }

  /**
   * EmojiInfo updateMany
   */
  export type EmojiInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmojiInfos.
     */
    data: XOR<EmojiInfoUpdateManyMutationInput, EmojiInfoUncheckedUpdateManyInput>
    /**
     * Filter which EmojiInfos to update
     */
    where?: EmojiInfoWhereInput
    /**
     * Limit how many EmojiInfos to update.
     */
    limit?: number
  }

  /**
   * EmojiInfo updateManyAndReturn
   */
  export type EmojiInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfo
     */
    select?: EmojiInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfo
     */
    omit?: EmojiInfoOmit<ExtArgs> | null
    /**
     * The data used to update EmojiInfos.
     */
    data: XOR<EmojiInfoUpdateManyMutationInput, EmojiInfoUncheckedUpdateManyInput>
    /**
     * Filter which EmojiInfos to update
     */
    where?: EmojiInfoWhereInput
    /**
     * Limit how many EmojiInfos to update.
     */
    limit?: number
  }

  /**
   * EmojiInfo upsert
   */
  export type EmojiInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfo
     */
    select?: EmojiInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfo
     */
    omit?: EmojiInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the EmojiInfo to update in case it exists.
     */
    where: EmojiInfoWhereUniqueInput
    /**
     * In case the EmojiInfo found by the `where` argument doesn't exist, create a new EmojiInfo with this data.
     */
    create: XOR<EmojiInfoCreateInput, EmojiInfoUncheckedCreateInput>
    /**
     * In case the EmojiInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmojiInfoUpdateInput, EmojiInfoUncheckedUpdateInput>
  }

  /**
   * EmojiInfo delete
   */
  export type EmojiInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfo
     */
    select?: EmojiInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfo
     */
    omit?: EmojiInfoOmit<ExtArgs> | null
    /**
     * Filter which EmojiInfo to delete.
     */
    where: EmojiInfoWhereUniqueInput
  }

  /**
   * EmojiInfo deleteMany
   */
  export type EmojiInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmojiInfos to delete
     */
    where?: EmojiInfoWhereInput
    /**
     * Limit how many EmojiInfos to delete.
     */
    limit?: number
  }

  /**
   * EmojiInfo without action
   */
  export type EmojiInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmojiInfo
     */
    select?: EmojiInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmojiInfo
     */
    omit?: EmojiInfoOmit<ExtArgs> | null
  }


  /**
   * Model ImgInfo2
   */

  export type AggregateImgInfo2 = {
    _count: ImgInfo2CountAggregateOutputType | null
    _avg: ImgInfo2AvgAggregateOutputType | null
    _sum: ImgInfo2SumAggregateOutputType | null
    _min: ImgInfo2MinAggregateOutputType | null
    _max: ImgInfo2MaxAggregateOutputType | null
  }

  export type ImgInfo2AvgAggregateOutputType = {
    id: number | null
    msgSvrId: number | null
    offset: number | null
    totalLen: number | null
    createtime: number | null
    msglocalid: number | null
    status: number | null
    nettimes: number | null
    reserved1: number | null
    reserved2: number | null
    hashdthumb: number | null
    iscomplete: number | null
    compressType: number | null
    forwardType: number | null
    sendImgType: number | null
  }

  export type ImgInfo2SumAggregateOutputType = {
    id: number | null
    msgSvrId: bigint | null
    offset: number | null
    totalLen: number | null
    createtime: number | null
    msglocalid: number | null
    status: number | null
    nettimes: number | null
    reserved1: number | null
    reserved2: number | null
    hashdthumb: number | null
    iscomplete: number | null
    compressType: number | null
    forwardType: number | null
    sendImgType: number | null
  }

  export type ImgInfo2MinAggregateOutputType = {
    id: number | null
    msgSvrId: bigint | null
    offset: number | null
    totalLen: number | null
    bigImgPath: string | null
    thumbImgPath: string | null
    createtime: number | null
    msglocalid: number | null
    status: number | null
    nettimes: number | null
    reserved1: number | null
    reserved2: number | null
    reserved3: string | null
    reserved4: string | null
    hashdthumb: number | null
    iscomplete: number | null
    origImgMD5: string | null
    compressType: number | null
    midImgPath: string | null
    forwardType: number | null
    hevcPath: string | null
    sendImgType: number | null
    originSourceMd5: string | null
    msgTalker: string | null
  }

  export type ImgInfo2MaxAggregateOutputType = {
    id: number | null
    msgSvrId: bigint | null
    offset: number | null
    totalLen: number | null
    bigImgPath: string | null
    thumbImgPath: string | null
    createtime: number | null
    msglocalid: number | null
    status: number | null
    nettimes: number | null
    reserved1: number | null
    reserved2: number | null
    reserved3: string | null
    reserved4: string | null
    hashdthumb: number | null
    iscomplete: number | null
    origImgMD5: string | null
    compressType: number | null
    midImgPath: string | null
    forwardType: number | null
    hevcPath: string | null
    sendImgType: number | null
    originSourceMd5: string | null
    msgTalker: string | null
  }

  export type ImgInfo2CountAggregateOutputType = {
    id: number
    msgSvrId: number
    offset: number
    totalLen: number
    bigImgPath: number
    thumbImgPath: number
    createtime: number
    msglocalid: number
    status: number
    nettimes: number
    reserved1: number
    reserved2: number
    reserved3: number
    reserved4: number
    hashdthumb: number
    iscomplete: number
    origImgMD5: number
    compressType: number
    midImgPath: number
    forwardType: number
    hevcPath: number
    sendImgType: number
    originSourceMd5: number
    msgTalker: number
    _all: number
  }


  export type ImgInfo2AvgAggregateInputType = {
    id?: true
    msgSvrId?: true
    offset?: true
    totalLen?: true
    createtime?: true
    msglocalid?: true
    status?: true
    nettimes?: true
    reserved1?: true
    reserved2?: true
    hashdthumb?: true
    iscomplete?: true
    compressType?: true
    forwardType?: true
    sendImgType?: true
  }

  export type ImgInfo2SumAggregateInputType = {
    id?: true
    msgSvrId?: true
    offset?: true
    totalLen?: true
    createtime?: true
    msglocalid?: true
    status?: true
    nettimes?: true
    reserved1?: true
    reserved2?: true
    hashdthumb?: true
    iscomplete?: true
    compressType?: true
    forwardType?: true
    sendImgType?: true
  }

  export type ImgInfo2MinAggregateInputType = {
    id?: true
    msgSvrId?: true
    offset?: true
    totalLen?: true
    bigImgPath?: true
    thumbImgPath?: true
    createtime?: true
    msglocalid?: true
    status?: true
    nettimes?: true
    reserved1?: true
    reserved2?: true
    reserved3?: true
    reserved4?: true
    hashdthumb?: true
    iscomplete?: true
    origImgMD5?: true
    compressType?: true
    midImgPath?: true
    forwardType?: true
    hevcPath?: true
    sendImgType?: true
    originSourceMd5?: true
    msgTalker?: true
  }

  export type ImgInfo2MaxAggregateInputType = {
    id?: true
    msgSvrId?: true
    offset?: true
    totalLen?: true
    bigImgPath?: true
    thumbImgPath?: true
    createtime?: true
    msglocalid?: true
    status?: true
    nettimes?: true
    reserved1?: true
    reserved2?: true
    reserved3?: true
    reserved4?: true
    hashdthumb?: true
    iscomplete?: true
    origImgMD5?: true
    compressType?: true
    midImgPath?: true
    forwardType?: true
    hevcPath?: true
    sendImgType?: true
    originSourceMd5?: true
    msgTalker?: true
  }

  export type ImgInfo2CountAggregateInputType = {
    id?: true
    msgSvrId?: true
    offset?: true
    totalLen?: true
    bigImgPath?: true
    thumbImgPath?: true
    createtime?: true
    msglocalid?: true
    status?: true
    nettimes?: true
    reserved1?: true
    reserved2?: true
    reserved3?: true
    reserved4?: true
    hashdthumb?: true
    iscomplete?: true
    origImgMD5?: true
    compressType?: true
    midImgPath?: true
    forwardType?: true
    hevcPath?: true
    sendImgType?: true
    originSourceMd5?: true
    msgTalker?: true
    _all?: true
  }

  export type ImgInfo2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImgInfo2 to aggregate.
     */
    where?: ImgInfo2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgInfo2s to fetch.
     */
    orderBy?: ImgInfo2OrderByWithRelationInput | ImgInfo2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImgInfo2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgInfo2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgInfo2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImgInfo2s
    **/
    _count?: true | ImgInfo2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImgInfo2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImgInfo2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImgInfo2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImgInfo2MaxAggregateInputType
  }

  export type GetImgInfo2AggregateType<T extends ImgInfo2AggregateArgs> = {
        [P in keyof T & keyof AggregateImgInfo2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImgInfo2[P]>
      : GetScalarType<T[P], AggregateImgInfo2[P]>
  }




  export type ImgInfo2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImgInfo2WhereInput
    orderBy?: ImgInfo2OrderByWithAggregationInput | ImgInfo2OrderByWithAggregationInput[]
    by: ImgInfo2ScalarFieldEnum[] | ImgInfo2ScalarFieldEnum
    having?: ImgInfo2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImgInfo2CountAggregateInputType | true
    _avg?: ImgInfo2AvgAggregateInputType
    _sum?: ImgInfo2SumAggregateInputType
    _min?: ImgInfo2MinAggregateInputType
    _max?: ImgInfo2MaxAggregateInputType
  }

  export type ImgInfo2GroupByOutputType = {
    id: number
    msgSvrId: bigint | null
    offset: number | null
    totalLen: number | null
    bigImgPath: string | null
    thumbImgPath: string | null
    createtime: number | null
    msglocalid: number | null
    status: number | null
    nettimes: number | null
    reserved1: number | null
    reserved2: number | null
    reserved3: string | null
    reserved4: string | null
    hashdthumb: number | null
    iscomplete: number | null
    origImgMD5: string | null
    compressType: number | null
    midImgPath: string | null
    forwardType: number | null
    hevcPath: string | null
    sendImgType: number | null
    originSourceMd5: string | null
    msgTalker: string | null
    _count: ImgInfo2CountAggregateOutputType | null
    _avg: ImgInfo2AvgAggregateOutputType | null
    _sum: ImgInfo2SumAggregateOutputType | null
    _min: ImgInfo2MinAggregateOutputType | null
    _max: ImgInfo2MaxAggregateOutputType | null
  }

  type GetImgInfo2GroupByPayload<T extends ImgInfo2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImgInfo2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImgInfo2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImgInfo2GroupByOutputType[P]>
            : GetScalarType<T[P], ImgInfo2GroupByOutputType[P]>
        }
      >
    >


  export type ImgInfo2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    msgSvrId?: boolean
    offset?: boolean
    totalLen?: boolean
    bigImgPath?: boolean
    thumbImgPath?: boolean
    createtime?: boolean
    msglocalid?: boolean
    status?: boolean
    nettimes?: boolean
    reserved1?: boolean
    reserved2?: boolean
    reserved3?: boolean
    reserved4?: boolean
    hashdthumb?: boolean
    iscomplete?: boolean
    origImgMD5?: boolean
    compressType?: boolean
    midImgPath?: boolean
    forwardType?: boolean
    hevcPath?: boolean
    sendImgType?: boolean
    originSourceMd5?: boolean
    msgTalker?: boolean
  }, ExtArgs["result"]["imgInfo2"]>

  export type ImgInfo2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    msgSvrId?: boolean
    offset?: boolean
    totalLen?: boolean
    bigImgPath?: boolean
    thumbImgPath?: boolean
    createtime?: boolean
    msglocalid?: boolean
    status?: boolean
    nettimes?: boolean
    reserved1?: boolean
    reserved2?: boolean
    reserved3?: boolean
    reserved4?: boolean
    hashdthumb?: boolean
    iscomplete?: boolean
    origImgMD5?: boolean
    compressType?: boolean
    midImgPath?: boolean
    forwardType?: boolean
    hevcPath?: boolean
    sendImgType?: boolean
    originSourceMd5?: boolean
    msgTalker?: boolean
  }, ExtArgs["result"]["imgInfo2"]>

  export type ImgInfo2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    msgSvrId?: boolean
    offset?: boolean
    totalLen?: boolean
    bigImgPath?: boolean
    thumbImgPath?: boolean
    createtime?: boolean
    msglocalid?: boolean
    status?: boolean
    nettimes?: boolean
    reserved1?: boolean
    reserved2?: boolean
    reserved3?: boolean
    reserved4?: boolean
    hashdthumb?: boolean
    iscomplete?: boolean
    origImgMD5?: boolean
    compressType?: boolean
    midImgPath?: boolean
    forwardType?: boolean
    hevcPath?: boolean
    sendImgType?: boolean
    originSourceMd5?: boolean
    msgTalker?: boolean
  }, ExtArgs["result"]["imgInfo2"]>

  export type ImgInfo2SelectScalar = {
    id?: boolean
    msgSvrId?: boolean
    offset?: boolean
    totalLen?: boolean
    bigImgPath?: boolean
    thumbImgPath?: boolean
    createtime?: boolean
    msglocalid?: boolean
    status?: boolean
    nettimes?: boolean
    reserved1?: boolean
    reserved2?: boolean
    reserved3?: boolean
    reserved4?: boolean
    hashdthumb?: boolean
    iscomplete?: boolean
    origImgMD5?: boolean
    compressType?: boolean
    midImgPath?: boolean
    forwardType?: boolean
    hevcPath?: boolean
    sendImgType?: boolean
    originSourceMd5?: boolean
    msgTalker?: boolean
  }

  export type ImgInfo2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "msgSvrId" | "offset" | "totalLen" | "bigImgPath" | "thumbImgPath" | "createtime" | "msglocalid" | "status" | "nettimes" | "reserved1" | "reserved2" | "reserved3" | "reserved4" | "hashdthumb" | "iscomplete" | "origImgMD5" | "compressType" | "midImgPath" | "forwardType" | "hevcPath" | "sendImgType" | "originSourceMd5" | "msgTalker", ExtArgs["result"]["imgInfo2"]>

  export type $ImgInfo2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImgInfo2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      msgSvrId: bigint | null
      offset: number | null
      totalLen: number | null
      bigImgPath: string | null
      thumbImgPath: string | null
      createtime: number | null
      msglocalid: number | null
      status: number | null
      nettimes: number | null
      reserved1: number | null
      reserved2: number | null
      reserved3: string | null
      reserved4: string | null
      hashdthumb: number | null
      iscomplete: number | null
      origImgMD5: string | null
      compressType: number | null
      midImgPath: string | null
      forwardType: number | null
      hevcPath: string | null
      sendImgType: number | null
      originSourceMd5: string | null
      msgTalker: string | null
    }, ExtArgs["result"]["imgInfo2"]>
    composites: {}
  }

  type ImgInfo2GetPayload<S extends boolean | null | undefined | ImgInfo2DefaultArgs> = $Result.GetResult<Prisma.$ImgInfo2Payload, S>

  type ImgInfo2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImgInfo2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImgInfo2CountAggregateInputType | true
    }

  export interface ImgInfo2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImgInfo2'], meta: { name: 'ImgInfo2' } }
    /**
     * Find zero or one ImgInfo2 that matches the filter.
     * @param {ImgInfo2FindUniqueArgs} args - Arguments to find a ImgInfo2
     * @example
     * // Get one ImgInfo2
     * const imgInfo2 = await prisma.imgInfo2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImgInfo2FindUniqueArgs>(args: SelectSubset<T, ImgInfo2FindUniqueArgs<ExtArgs>>): Prisma__ImgInfo2Client<$Result.GetResult<Prisma.$ImgInfo2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImgInfo2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImgInfo2FindUniqueOrThrowArgs} args - Arguments to find a ImgInfo2
     * @example
     * // Get one ImgInfo2
     * const imgInfo2 = await prisma.imgInfo2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImgInfo2FindUniqueOrThrowArgs>(args: SelectSubset<T, ImgInfo2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImgInfo2Client<$Result.GetResult<Prisma.$ImgInfo2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImgInfo2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgInfo2FindFirstArgs} args - Arguments to find a ImgInfo2
     * @example
     * // Get one ImgInfo2
     * const imgInfo2 = await prisma.imgInfo2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImgInfo2FindFirstArgs>(args?: SelectSubset<T, ImgInfo2FindFirstArgs<ExtArgs>>): Prisma__ImgInfo2Client<$Result.GetResult<Prisma.$ImgInfo2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImgInfo2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgInfo2FindFirstOrThrowArgs} args - Arguments to find a ImgInfo2
     * @example
     * // Get one ImgInfo2
     * const imgInfo2 = await prisma.imgInfo2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImgInfo2FindFirstOrThrowArgs>(args?: SelectSubset<T, ImgInfo2FindFirstOrThrowArgs<ExtArgs>>): Prisma__ImgInfo2Client<$Result.GetResult<Prisma.$ImgInfo2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImgInfo2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgInfo2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImgInfo2s
     * const imgInfo2s = await prisma.imgInfo2.findMany()
     * 
     * // Get first 10 ImgInfo2s
     * const imgInfo2s = await prisma.imgInfo2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imgInfo2WithIdOnly = await prisma.imgInfo2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImgInfo2FindManyArgs>(args?: SelectSubset<T, ImgInfo2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgInfo2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImgInfo2.
     * @param {ImgInfo2CreateArgs} args - Arguments to create a ImgInfo2.
     * @example
     * // Create one ImgInfo2
     * const ImgInfo2 = await prisma.imgInfo2.create({
     *   data: {
     *     // ... data to create a ImgInfo2
     *   }
     * })
     * 
     */
    create<T extends ImgInfo2CreateArgs>(args: SelectSubset<T, ImgInfo2CreateArgs<ExtArgs>>): Prisma__ImgInfo2Client<$Result.GetResult<Prisma.$ImgInfo2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImgInfo2s.
     * @param {ImgInfo2CreateManyArgs} args - Arguments to create many ImgInfo2s.
     * @example
     * // Create many ImgInfo2s
     * const imgInfo2 = await prisma.imgInfo2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImgInfo2CreateManyArgs>(args?: SelectSubset<T, ImgInfo2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImgInfo2s and returns the data saved in the database.
     * @param {ImgInfo2CreateManyAndReturnArgs} args - Arguments to create many ImgInfo2s.
     * @example
     * // Create many ImgInfo2s
     * const imgInfo2 = await prisma.imgInfo2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImgInfo2s and only return the `id`
     * const imgInfo2WithIdOnly = await prisma.imgInfo2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImgInfo2CreateManyAndReturnArgs>(args?: SelectSubset<T, ImgInfo2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgInfo2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImgInfo2.
     * @param {ImgInfo2DeleteArgs} args - Arguments to delete one ImgInfo2.
     * @example
     * // Delete one ImgInfo2
     * const ImgInfo2 = await prisma.imgInfo2.delete({
     *   where: {
     *     // ... filter to delete one ImgInfo2
     *   }
     * })
     * 
     */
    delete<T extends ImgInfo2DeleteArgs>(args: SelectSubset<T, ImgInfo2DeleteArgs<ExtArgs>>): Prisma__ImgInfo2Client<$Result.GetResult<Prisma.$ImgInfo2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImgInfo2.
     * @param {ImgInfo2UpdateArgs} args - Arguments to update one ImgInfo2.
     * @example
     * // Update one ImgInfo2
     * const imgInfo2 = await prisma.imgInfo2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImgInfo2UpdateArgs>(args: SelectSubset<T, ImgInfo2UpdateArgs<ExtArgs>>): Prisma__ImgInfo2Client<$Result.GetResult<Prisma.$ImgInfo2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImgInfo2s.
     * @param {ImgInfo2DeleteManyArgs} args - Arguments to filter ImgInfo2s to delete.
     * @example
     * // Delete a few ImgInfo2s
     * const { count } = await prisma.imgInfo2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImgInfo2DeleteManyArgs>(args?: SelectSubset<T, ImgInfo2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImgInfo2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgInfo2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImgInfo2s
     * const imgInfo2 = await prisma.imgInfo2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImgInfo2UpdateManyArgs>(args: SelectSubset<T, ImgInfo2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImgInfo2s and returns the data updated in the database.
     * @param {ImgInfo2UpdateManyAndReturnArgs} args - Arguments to update many ImgInfo2s.
     * @example
     * // Update many ImgInfo2s
     * const imgInfo2 = await prisma.imgInfo2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImgInfo2s and only return the `id`
     * const imgInfo2WithIdOnly = await prisma.imgInfo2.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImgInfo2UpdateManyAndReturnArgs>(args: SelectSubset<T, ImgInfo2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgInfo2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImgInfo2.
     * @param {ImgInfo2UpsertArgs} args - Arguments to update or create a ImgInfo2.
     * @example
     * // Update or create a ImgInfo2
     * const imgInfo2 = await prisma.imgInfo2.upsert({
     *   create: {
     *     // ... data to create a ImgInfo2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImgInfo2 we want to update
     *   }
     * })
     */
    upsert<T extends ImgInfo2UpsertArgs>(args: SelectSubset<T, ImgInfo2UpsertArgs<ExtArgs>>): Prisma__ImgInfo2Client<$Result.GetResult<Prisma.$ImgInfo2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImgInfo2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgInfo2CountArgs} args - Arguments to filter ImgInfo2s to count.
     * @example
     * // Count the number of ImgInfo2s
     * const count = await prisma.imgInfo2.count({
     *   where: {
     *     // ... the filter for the ImgInfo2s we want to count
     *   }
     * })
    **/
    count<T extends ImgInfo2CountArgs>(
      args?: Subset<T, ImgInfo2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImgInfo2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImgInfo2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgInfo2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImgInfo2AggregateArgs>(args: Subset<T, ImgInfo2AggregateArgs>): Prisma.PrismaPromise<GetImgInfo2AggregateType<T>>

    /**
     * Group by ImgInfo2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgInfo2GroupByArgs} args - Group by arguments.
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
      T extends ImgInfo2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImgInfo2GroupByArgs['orderBy'] }
        : { orderBy?: ImgInfo2GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImgInfo2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImgInfo2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImgInfo2 model
   */
  readonly fields: ImgInfo2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImgInfo2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImgInfo2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ImgInfo2 model
   */
  interface ImgInfo2FieldRefs {
    readonly id: FieldRef<"ImgInfo2", 'Int'>
    readonly msgSvrId: FieldRef<"ImgInfo2", 'BigInt'>
    readonly offset: FieldRef<"ImgInfo2", 'Int'>
    readonly totalLen: FieldRef<"ImgInfo2", 'Int'>
    readonly bigImgPath: FieldRef<"ImgInfo2", 'String'>
    readonly thumbImgPath: FieldRef<"ImgInfo2", 'String'>
    readonly createtime: FieldRef<"ImgInfo2", 'Int'>
    readonly msglocalid: FieldRef<"ImgInfo2", 'Int'>
    readonly status: FieldRef<"ImgInfo2", 'Int'>
    readonly nettimes: FieldRef<"ImgInfo2", 'Int'>
    readonly reserved1: FieldRef<"ImgInfo2", 'Int'>
    readonly reserved2: FieldRef<"ImgInfo2", 'Int'>
    readonly reserved3: FieldRef<"ImgInfo2", 'String'>
    readonly reserved4: FieldRef<"ImgInfo2", 'String'>
    readonly hashdthumb: FieldRef<"ImgInfo2", 'Int'>
    readonly iscomplete: FieldRef<"ImgInfo2", 'Int'>
    readonly origImgMD5: FieldRef<"ImgInfo2", 'String'>
    readonly compressType: FieldRef<"ImgInfo2", 'Int'>
    readonly midImgPath: FieldRef<"ImgInfo2", 'String'>
    readonly forwardType: FieldRef<"ImgInfo2", 'Int'>
    readonly hevcPath: FieldRef<"ImgInfo2", 'String'>
    readonly sendImgType: FieldRef<"ImgInfo2", 'Int'>
    readonly originSourceMd5: FieldRef<"ImgInfo2", 'String'>
    readonly msgTalker: FieldRef<"ImgInfo2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ImgInfo2 findUnique
   */
  export type ImgInfo2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgInfo2
     */
    select?: ImgInfo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the ImgInfo2
     */
    omit?: ImgInfo2Omit<ExtArgs> | null
    /**
     * Filter, which ImgInfo2 to fetch.
     */
    where: ImgInfo2WhereUniqueInput
  }

  /**
   * ImgInfo2 findUniqueOrThrow
   */
  export type ImgInfo2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgInfo2
     */
    select?: ImgInfo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the ImgInfo2
     */
    omit?: ImgInfo2Omit<ExtArgs> | null
    /**
     * Filter, which ImgInfo2 to fetch.
     */
    where: ImgInfo2WhereUniqueInput
  }

  /**
   * ImgInfo2 findFirst
   */
  export type ImgInfo2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgInfo2
     */
    select?: ImgInfo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the ImgInfo2
     */
    omit?: ImgInfo2Omit<ExtArgs> | null
    /**
     * Filter, which ImgInfo2 to fetch.
     */
    where?: ImgInfo2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgInfo2s to fetch.
     */
    orderBy?: ImgInfo2OrderByWithRelationInput | ImgInfo2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImgInfo2s.
     */
    cursor?: ImgInfo2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgInfo2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgInfo2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImgInfo2s.
     */
    distinct?: ImgInfo2ScalarFieldEnum | ImgInfo2ScalarFieldEnum[]
  }

  /**
   * ImgInfo2 findFirstOrThrow
   */
  export type ImgInfo2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgInfo2
     */
    select?: ImgInfo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the ImgInfo2
     */
    omit?: ImgInfo2Omit<ExtArgs> | null
    /**
     * Filter, which ImgInfo2 to fetch.
     */
    where?: ImgInfo2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgInfo2s to fetch.
     */
    orderBy?: ImgInfo2OrderByWithRelationInput | ImgInfo2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImgInfo2s.
     */
    cursor?: ImgInfo2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgInfo2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgInfo2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImgInfo2s.
     */
    distinct?: ImgInfo2ScalarFieldEnum | ImgInfo2ScalarFieldEnum[]
  }

  /**
   * ImgInfo2 findMany
   */
  export type ImgInfo2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgInfo2
     */
    select?: ImgInfo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the ImgInfo2
     */
    omit?: ImgInfo2Omit<ExtArgs> | null
    /**
     * Filter, which ImgInfo2s to fetch.
     */
    where?: ImgInfo2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImgInfo2s to fetch.
     */
    orderBy?: ImgInfo2OrderByWithRelationInput | ImgInfo2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImgInfo2s.
     */
    cursor?: ImgInfo2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImgInfo2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImgInfo2s.
     */
    skip?: number
    distinct?: ImgInfo2ScalarFieldEnum | ImgInfo2ScalarFieldEnum[]
  }

  /**
   * ImgInfo2 create
   */
  export type ImgInfo2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgInfo2
     */
    select?: ImgInfo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the ImgInfo2
     */
    omit?: ImgInfo2Omit<ExtArgs> | null
    /**
     * The data needed to create a ImgInfo2.
     */
    data: XOR<ImgInfo2CreateInput, ImgInfo2UncheckedCreateInput>
  }

  /**
   * ImgInfo2 createMany
   */
  export type ImgInfo2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImgInfo2s.
     */
    data: ImgInfo2CreateManyInput | ImgInfo2CreateManyInput[]
  }

  /**
   * ImgInfo2 createManyAndReturn
   */
  export type ImgInfo2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgInfo2
     */
    select?: ImgInfo2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImgInfo2
     */
    omit?: ImgInfo2Omit<ExtArgs> | null
    /**
     * The data used to create many ImgInfo2s.
     */
    data: ImgInfo2CreateManyInput | ImgInfo2CreateManyInput[]
  }

  /**
   * ImgInfo2 update
   */
  export type ImgInfo2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgInfo2
     */
    select?: ImgInfo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the ImgInfo2
     */
    omit?: ImgInfo2Omit<ExtArgs> | null
    /**
     * The data needed to update a ImgInfo2.
     */
    data: XOR<ImgInfo2UpdateInput, ImgInfo2UncheckedUpdateInput>
    /**
     * Choose, which ImgInfo2 to update.
     */
    where: ImgInfo2WhereUniqueInput
  }

  /**
   * ImgInfo2 updateMany
   */
  export type ImgInfo2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImgInfo2s.
     */
    data: XOR<ImgInfo2UpdateManyMutationInput, ImgInfo2UncheckedUpdateManyInput>
    /**
     * Filter which ImgInfo2s to update
     */
    where?: ImgInfo2WhereInput
    /**
     * Limit how many ImgInfo2s to update.
     */
    limit?: number
  }

  /**
   * ImgInfo2 updateManyAndReturn
   */
  export type ImgInfo2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgInfo2
     */
    select?: ImgInfo2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImgInfo2
     */
    omit?: ImgInfo2Omit<ExtArgs> | null
    /**
     * The data used to update ImgInfo2s.
     */
    data: XOR<ImgInfo2UpdateManyMutationInput, ImgInfo2UncheckedUpdateManyInput>
    /**
     * Filter which ImgInfo2s to update
     */
    where?: ImgInfo2WhereInput
    /**
     * Limit how many ImgInfo2s to update.
     */
    limit?: number
  }

  /**
   * ImgInfo2 upsert
   */
  export type ImgInfo2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgInfo2
     */
    select?: ImgInfo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the ImgInfo2
     */
    omit?: ImgInfo2Omit<ExtArgs> | null
    /**
     * The filter to search for the ImgInfo2 to update in case it exists.
     */
    where: ImgInfo2WhereUniqueInput
    /**
     * In case the ImgInfo2 found by the `where` argument doesn't exist, create a new ImgInfo2 with this data.
     */
    create: XOR<ImgInfo2CreateInput, ImgInfo2UncheckedCreateInput>
    /**
     * In case the ImgInfo2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImgInfo2UpdateInput, ImgInfo2UncheckedUpdateInput>
  }

  /**
   * ImgInfo2 delete
   */
  export type ImgInfo2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgInfo2
     */
    select?: ImgInfo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the ImgInfo2
     */
    omit?: ImgInfo2Omit<ExtArgs> | null
    /**
     * Filter which ImgInfo2 to delete.
     */
    where: ImgInfo2WhereUniqueInput
  }

  /**
   * ImgInfo2 deleteMany
   */
  export type ImgInfo2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImgInfo2s to delete
     */
    where?: ImgInfo2WhereInput
    /**
     * Limit how many ImgInfo2s to delete.
     */
    limit?: number
  }

  /**
   * ImgInfo2 without action
   */
  export type ImgInfo2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImgInfo2
     */
    select?: ImgInfo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the ImgInfo2
     */
    omit?: ImgInfo2Omit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RContactScalarFieldEnum: {
    username: 'username',
    alias: 'alias',
    conRemark: 'conRemark',
    domainList: 'domainList',
    nickname: 'nickname',
    pyInitial: 'pyInitial',
    quanPin: 'quanPin',
    showHead: 'showHead',
    type: 'type',
    uiType: 'uiType',
    weiboFlag: 'weiboFlag',
    weiboNickname: 'weiboNickname',
    conRemarkPYFull: 'conRemarkPYFull',
    conRemarkPYShort: 'conRemarkPYShort',
    lvbuff: 'lvbuff',
    verifyFlag: 'verifyFlag',
    encryptUsername: 'encryptUsername',
    chatroomFlag: 'chatroomFlag',
    deleteFlag: 'deleteFlag',
    contactLabelIds: 'contactLabelIds',
    descWordingId: 'descWordingId',
    openImAppid: 'openImAppid',
    sourceExtInfo: 'sourceExtInfo',
    ticket: 'ticket',
    usernameFlag: 'usernameFlag',
    contactExtra: 'contactExtra',
    createTime: 'createTime'
  };

  export type RContactScalarFieldEnum = (typeof RContactScalarFieldEnum)[keyof typeof RContactScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    msgId: 'msgId',
    msgSvrId: 'msgSvrId',
    type: 'type',
    status: 'status',
    isSend: 'isSend',
    isShowTimer: 'isShowTimer',
    createTime: 'createTime',
    talker: 'talker',
    content: 'content',
    imgPath: 'imgPath',
    reserved: 'reserved',
    lvbuffer: 'lvbuffer',
    transContent: 'transContent',
    transBrandWording: 'transBrandWording',
    talkerId: 'talkerId',
    bizClientMsgId: 'bizClientMsgId',
    bizChatId: 'bizChatId',
    bizChatUserId: 'bizChatUserId',
    msgSeq: 'msgSeq',
    flag: 'flag',
    solitaireFoldInfo: 'solitaireFoldInfo',
    historyId: 'historyId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ChatRoomScalarFieldEnum: {
    chatroomname: 'chatroomname',
    addtime: 'addtime',
    memberlist: 'memberlist',
    displayname: 'displayname',
    chatroomnick: 'chatroomnick',
    roomflag: 'roomflag',
    roomowner: 'roomowner',
    roomdata: 'roomdata',
    isShowname: 'isShowname',
    selfDisplayName: 'selfDisplayName',
    style: 'style',
    chatroomdataflag: 'chatroomdataflag',
    modifytime: 'modifytime',
    chatroomnotice: 'chatroomnotice',
    xmlChatroomnotice: 'xmlChatroomnotice',
    chatroomVersion: 'chatroomVersion',
    chatroomnoticeEditor: 'chatroomnoticeEditor',
    chatroomnoticePublishTime: 'chatroomnoticePublishTime',
    chatroomNoticeNew: 'chatroomNoticeNew',
    chatroomLocalVersion: 'chatroomLocalVersion',
    chatroomStatus: 'chatroomStatus',
    memberCount: 'memberCount',
    chatroomfamilystatusmodifytime: 'chatroomfamilystatusmodifytime',
    associateOpenIMRoomName: 'associateOpenIMRoomName',
    openIMRoomMigrateStatus: 'openIMRoomMigrateStatus',
    saveByteVersion: 'saveByteVersion',
    handleByteVersion: 'handleByteVersion',
    roomInfoDetailResByte: 'roomInfoDetailResByte',
    oldChatroomVersion: 'oldChatroomVersion',
    localChatRoomWatchMembers: 'localChatRoomWatchMembers',
    spamStatus: 'spamStatus',
    compactFlag: 'compactFlag'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const ImgFlagScalarFieldEnum: {
    username: 'username',
    imgflag: 'imgflag',
    lastupdatetime: 'lastupdatetime',
    reserved1: 'reserved1',
    reserved2: 'reserved2',
    reserved3: 'reserved3',
    reserved4: 'reserved4',
    updateflag: 'updateflag'
  };

  export type ImgFlagScalarFieldEnum = (typeof ImgFlagScalarFieldEnum)[keyof typeof ImgFlagScalarFieldEnum]


  export const EmojiInfoDescScalarFieldEnum: {
    md5_lang: 'md5_lang',
    md5: 'md5',
    lang: 'lang',
    desc: 'desc',
    groupId: 'groupId',
    click_flag: 'click_flag',
    download_flag: 'download_flag'
  };

  export type EmojiInfoDescScalarFieldEnum = (typeof EmojiInfoDescScalarFieldEnum)[keyof typeof EmojiInfoDescScalarFieldEnum]


  export const EmojiInfoScalarFieldEnum: {
    md5: 'md5',
    svrid: 'svrid',
    catalog: 'catalog',
    type: 'type',
    size: 'size',
    start: 'start',
    state: 'state',
    name: 'name',
    content: 'content',
    reserved1: 'reserved1',
    reserved2: 'reserved2',
    reserved3: 'reserved3',
    reserved4: 'reserved4',
    app_id: 'app_id',
    groupId: 'groupId',
    lastUseTime: 'lastUseTime',
    framesInfo: 'framesInfo',
    idx: 'idx',
    temp: 'temp',
    source: 'source',
    needupload: 'needupload',
    designerID: 'designerID',
    thumbUrl: 'thumbUrl',
    cdnUrl: 'cdnUrl',
    encrypturl: 'encrypturl',
    aeskey: 'aeskey',
    width: 'width',
    height: 'height',
    externUrl: 'externUrl',
    externMd5: 'externMd5',
    activityid: 'activityid',
    tpurl: 'tpurl',
    tpauthkey: 'tpauthkey',
    wxamMd5: 'wxamMd5',
    attachedText: 'attachedText',
    captureStatus: 'captureStatus',
    attachedEmojiMD5: 'attachedEmojiMD5',
    imitateMd5: 'imitateMd5',
    captureUploadErrCode: 'captureUploadErrCode',
    captureUploadCounter: 'captureUploadCounter',
    captureEnterTime: 'captureEnterTime',
    lensId: 'lensId',
    attachTextColor: 'attachTextColor',
    captureScene: 'captureScene',
    attr: 'attr',
    linkId: 'linkId',
    meanings: 'meanings',
    custom_meaning: 'custom_meaning',
    emojiFlag: 'emojiFlag'
  };

  export type EmojiInfoScalarFieldEnum = (typeof EmojiInfoScalarFieldEnum)[keyof typeof EmojiInfoScalarFieldEnum]


  export const ImgInfo2ScalarFieldEnum: {
    id: 'id',
    msgSvrId: 'msgSvrId',
    offset: 'offset',
    totalLen: 'totalLen',
    bigImgPath: 'bigImgPath',
    thumbImgPath: 'thumbImgPath',
    createtime: 'createtime',
    msglocalid: 'msglocalid',
    status: 'status',
    nettimes: 'nettimes',
    reserved1: 'reserved1',
    reserved2: 'reserved2',
    reserved3: 'reserved3',
    reserved4: 'reserved4',
    hashdthumb: 'hashdthumb',
    iscomplete: 'iscomplete',
    origImgMD5: 'origImgMD5',
    compressType: 'compressType',
    midImgPath: 'midImgPath',
    forwardType: 'forwardType',
    hevcPath: 'hevcPath',
    sendImgType: 'sendImgType',
    originSourceMd5: 'originSourceMd5',
    msgTalker: 'msgTalker'
  };

  export type ImgInfo2ScalarFieldEnum = (typeof ImgInfo2ScalarFieldEnum)[keyof typeof ImgInfo2ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RContactWhereInput = {
    AND?: RContactWhereInput | RContactWhereInput[]
    OR?: RContactWhereInput[]
    NOT?: RContactWhereInput | RContactWhereInput[]
    username?: StringFilter<"RContact"> | string
    alias?: StringNullableFilter<"RContact"> | string | null
    conRemark?: StringNullableFilter<"RContact"> | string | null
    domainList?: StringNullableFilter<"RContact"> | string | null
    nickname?: StringNullableFilter<"RContact"> | string | null
    pyInitial?: StringNullableFilter<"RContact"> | string | null
    quanPin?: StringNullableFilter<"RContact"> | string | null
    showHead?: IntNullableFilter<"RContact"> | number | null
    type?: IntNullableFilter<"RContact"> | number | null
    uiType?: BigIntNullableFilter<"RContact"> | bigint | number | null
    weiboFlag?: IntNullableFilter<"RContact"> | number | null
    weiboNickname?: StringNullableFilter<"RContact"> | string | null
    conRemarkPYFull?: StringNullableFilter<"RContact"> | string | null
    conRemarkPYShort?: StringNullableFilter<"RContact"> | string | null
    lvbuff?: BytesNullableFilter<"RContact"> | Bytes | null
    verifyFlag?: IntNullableFilter<"RContact"> | number | null
    encryptUsername?: StringNullableFilter<"RContact"> | string | null
    chatroomFlag?: IntNullableFilter<"RContact"> | number | null
    deleteFlag?: IntNullableFilter<"RContact"> | number | null
    contactLabelIds?: StringNullableFilter<"RContact"> | string | null
    descWordingId?: StringNullableFilter<"RContact"> | string | null
    openImAppid?: StringNullableFilter<"RContact"> | string | null
    sourceExtInfo?: StringNullableFilter<"RContact"> | string | null
    ticket?: StringNullableFilter<"RContact"> | string | null
    usernameFlag?: BigIntNullableFilter<"RContact"> | bigint | number | null
    contactExtra?: BytesNullableFilter<"RContact"> | Bytes | null
    createTime?: BigIntNullableFilter<"RContact"> | bigint | number | null
  }

  export type RContactOrderByWithRelationInput = {
    username?: SortOrder
    alias?: SortOrderInput | SortOrder
    conRemark?: SortOrderInput | SortOrder
    domainList?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    pyInitial?: SortOrderInput | SortOrder
    quanPin?: SortOrderInput | SortOrder
    showHead?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    uiType?: SortOrderInput | SortOrder
    weiboFlag?: SortOrderInput | SortOrder
    weiboNickname?: SortOrderInput | SortOrder
    conRemarkPYFull?: SortOrderInput | SortOrder
    conRemarkPYShort?: SortOrderInput | SortOrder
    lvbuff?: SortOrderInput | SortOrder
    verifyFlag?: SortOrderInput | SortOrder
    encryptUsername?: SortOrderInput | SortOrder
    chatroomFlag?: SortOrderInput | SortOrder
    deleteFlag?: SortOrderInput | SortOrder
    contactLabelIds?: SortOrderInput | SortOrder
    descWordingId?: SortOrderInput | SortOrder
    openImAppid?: SortOrderInput | SortOrder
    sourceExtInfo?: SortOrderInput | SortOrder
    ticket?: SortOrderInput | SortOrder
    usernameFlag?: SortOrderInput | SortOrder
    contactExtra?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
  }

  export type RContactWhereUniqueInput = Prisma.AtLeast<{
    username?: string
    AND?: RContactWhereInput | RContactWhereInput[]
    OR?: RContactWhereInput[]
    NOT?: RContactWhereInput | RContactWhereInput[]
    alias?: StringNullableFilter<"RContact"> | string | null
    conRemark?: StringNullableFilter<"RContact"> | string | null
    domainList?: StringNullableFilter<"RContact"> | string | null
    nickname?: StringNullableFilter<"RContact"> | string | null
    pyInitial?: StringNullableFilter<"RContact"> | string | null
    quanPin?: StringNullableFilter<"RContact"> | string | null
    showHead?: IntNullableFilter<"RContact"> | number | null
    type?: IntNullableFilter<"RContact"> | number | null
    uiType?: BigIntNullableFilter<"RContact"> | bigint | number | null
    weiboFlag?: IntNullableFilter<"RContact"> | number | null
    weiboNickname?: StringNullableFilter<"RContact"> | string | null
    conRemarkPYFull?: StringNullableFilter<"RContact"> | string | null
    conRemarkPYShort?: StringNullableFilter<"RContact"> | string | null
    lvbuff?: BytesNullableFilter<"RContact"> | Bytes | null
    verifyFlag?: IntNullableFilter<"RContact"> | number | null
    encryptUsername?: StringNullableFilter<"RContact"> | string | null
    chatroomFlag?: IntNullableFilter<"RContact"> | number | null
    deleteFlag?: IntNullableFilter<"RContact"> | number | null
    contactLabelIds?: StringNullableFilter<"RContact"> | string | null
    descWordingId?: StringNullableFilter<"RContact"> | string | null
    openImAppid?: StringNullableFilter<"RContact"> | string | null
    sourceExtInfo?: StringNullableFilter<"RContact"> | string | null
    ticket?: StringNullableFilter<"RContact"> | string | null
    usernameFlag?: BigIntNullableFilter<"RContact"> | bigint | number | null
    contactExtra?: BytesNullableFilter<"RContact"> | Bytes | null
    createTime?: BigIntNullableFilter<"RContact"> | bigint | number | null
  }, "username">

  export type RContactOrderByWithAggregationInput = {
    username?: SortOrder
    alias?: SortOrderInput | SortOrder
    conRemark?: SortOrderInput | SortOrder
    domainList?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    pyInitial?: SortOrderInput | SortOrder
    quanPin?: SortOrderInput | SortOrder
    showHead?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    uiType?: SortOrderInput | SortOrder
    weiboFlag?: SortOrderInput | SortOrder
    weiboNickname?: SortOrderInput | SortOrder
    conRemarkPYFull?: SortOrderInput | SortOrder
    conRemarkPYShort?: SortOrderInput | SortOrder
    lvbuff?: SortOrderInput | SortOrder
    verifyFlag?: SortOrderInput | SortOrder
    encryptUsername?: SortOrderInput | SortOrder
    chatroomFlag?: SortOrderInput | SortOrder
    deleteFlag?: SortOrderInput | SortOrder
    contactLabelIds?: SortOrderInput | SortOrder
    descWordingId?: SortOrderInput | SortOrder
    openImAppid?: SortOrderInput | SortOrder
    sourceExtInfo?: SortOrderInput | SortOrder
    ticket?: SortOrderInput | SortOrder
    usernameFlag?: SortOrderInput | SortOrder
    contactExtra?: SortOrderInput | SortOrder
    createTime?: SortOrderInput | SortOrder
    _count?: RContactCountOrderByAggregateInput
    _avg?: RContactAvgOrderByAggregateInput
    _max?: RContactMaxOrderByAggregateInput
    _min?: RContactMinOrderByAggregateInput
    _sum?: RContactSumOrderByAggregateInput
  }

  export type RContactScalarWhereWithAggregatesInput = {
    AND?: RContactScalarWhereWithAggregatesInput | RContactScalarWhereWithAggregatesInput[]
    OR?: RContactScalarWhereWithAggregatesInput[]
    NOT?: RContactScalarWhereWithAggregatesInput | RContactScalarWhereWithAggregatesInput[]
    username?: StringWithAggregatesFilter<"RContact"> | string
    alias?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    conRemark?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    domainList?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    nickname?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    pyInitial?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    quanPin?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    showHead?: IntNullableWithAggregatesFilter<"RContact"> | number | null
    type?: IntNullableWithAggregatesFilter<"RContact"> | number | null
    uiType?: BigIntNullableWithAggregatesFilter<"RContact"> | bigint | number | null
    weiboFlag?: IntNullableWithAggregatesFilter<"RContact"> | number | null
    weiboNickname?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    conRemarkPYFull?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    conRemarkPYShort?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    lvbuff?: BytesNullableWithAggregatesFilter<"RContact"> | Bytes | null
    verifyFlag?: IntNullableWithAggregatesFilter<"RContact"> | number | null
    encryptUsername?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    chatroomFlag?: IntNullableWithAggregatesFilter<"RContact"> | number | null
    deleteFlag?: IntNullableWithAggregatesFilter<"RContact"> | number | null
    contactLabelIds?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    descWordingId?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    openImAppid?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    sourceExtInfo?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    ticket?: StringNullableWithAggregatesFilter<"RContact"> | string | null
    usernameFlag?: BigIntNullableWithAggregatesFilter<"RContact"> | bigint | number | null
    contactExtra?: BytesNullableWithAggregatesFilter<"RContact"> | Bytes | null
    createTime?: BigIntNullableWithAggregatesFilter<"RContact"> | bigint | number | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    msgId?: IntFilter<"Message"> | number
    msgSvrId?: BigIntNullableFilter<"Message"> | bigint | number | null
    type?: IntFilter<"Message"> | number
    status?: IntNullableFilter<"Message"> | number | null
    isSend?: IntFilter<"Message"> | number
    isShowTimer?: IntNullableFilter<"Message"> | number | null
    createTime?: BigIntFilter<"Message"> | bigint | number
    talker?: StringFilter<"Message"> | string
    content?: StringNullableFilter<"Message"> | string | null
    imgPath?: StringNullableFilter<"Message"> | string | null
    reserved?: StringNullableFilter<"Message"> | string | null
    lvbuffer?: BytesNullableFilter<"Message"> | Bytes | null
    transContent?: StringNullableFilter<"Message"> | string | null
    transBrandWording?: StringNullableFilter<"Message"> | string | null
    talkerId?: IntNullableFilter<"Message"> | number | null
    bizClientMsgId?: StringNullableFilter<"Message"> | string | null
    bizChatId?: IntNullableFilter<"Message"> | number | null
    bizChatUserId?: StringNullableFilter<"Message"> | string | null
    msgSeq?: IntNullableFilter<"Message"> | number | null
    flag?: IntNullableFilter<"Message"> | number | null
    solitaireFoldInfo?: BytesNullableFilter<"Message"> | Bytes | null
    historyId?: StringNullableFilter<"Message"> | string | null
  }

  export type MessageOrderByWithRelationInput = {
    msgId?: SortOrder
    msgSvrId?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrderInput | SortOrder
    isSend?: SortOrder
    isShowTimer?: SortOrderInput | SortOrder
    createTime?: SortOrder
    talker?: SortOrder
    content?: SortOrderInput | SortOrder
    imgPath?: SortOrderInput | SortOrder
    reserved?: SortOrderInput | SortOrder
    lvbuffer?: SortOrderInput | SortOrder
    transContent?: SortOrderInput | SortOrder
    transBrandWording?: SortOrderInput | SortOrder
    talkerId?: SortOrderInput | SortOrder
    bizClientMsgId?: SortOrderInput | SortOrder
    bizChatId?: SortOrderInput | SortOrder
    bizChatUserId?: SortOrderInput | SortOrder
    msgSeq?: SortOrderInput | SortOrder
    flag?: SortOrderInput | SortOrder
    solitaireFoldInfo?: SortOrderInput | SortOrder
    historyId?: SortOrderInput | SortOrder
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    msgId?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    msgSvrId?: BigIntNullableFilter<"Message"> | bigint | number | null
    type?: IntFilter<"Message"> | number
    status?: IntNullableFilter<"Message"> | number | null
    isSend?: IntFilter<"Message"> | number
    isShowTimer?: IntNullableFilter<"Message"> | number | null
    createTime?: BigIntFilter<"Message"> | bigint | number
    talker?: StringFilter<"Message"> | string
    content?: StringNullableFilter<"Message"> | string | null
    imgPath?: StringNullableFilter<"Message"> | string | null
    reserved?: StringNullableFilter<"Message"> | string | null
    lvbuffer?: BytesNullableFilter<"Message"> | Bytes | null
    transContent?: StringNullableFilter<"Message"> | string | null
    transBrandWording?: StringNullableFilter<"Message"> | string | null
    talkerId?: IntNullableFilter<"Message"> | number | null
    bizClientMsgId?: StringNullableFilter<"Message"> | string | null
    bizChatId?: IntNullableFilter<"Message"> | number | null
    bizChatUserId?: StringNullableFilter<"Message"> | string | null
    msgSeq?: IntNullableFilter<"Message"> | number | null
    flag?: IntNullableFilter<"Message"> | number | null
    solitaireFoldInfo?: BytesNullableFilter<"Message"> | Bytes | null
    historyId?: StringNullableFilter<"Message"> | string | null
  }, "msgId">

  export type MessageOrderByWithAggregationInput = {
    msgId?: SortOrder
    msgSvrId?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrderInput | SortOrder
    isSend?: SortOrder
    isShowTimer?: SortOrderInput | SortOrder
    createTime?: SortOrder
    talker?: SortOrder
    content?: SortOrderInput | SortOrder
    imgPath?: SortOrderInput | SortOrder
    reserved?: SortOrderInput | SortOrder
    lvbuffer?: SortOrderInput | SortOrder
    transContent?: SortOrderInput | SortOrder
    transBrandWording?: SortOrderInput | SortOrder
    talkerId?: SortOrderInput | SortOrder
    bizClientMsgId?: SortOrderInput | SortOrder
    bizChatId?: SortOrderInput | SortOrder
    bizChatUserId?: SortOrderInput | SortOrder
    msgSeq?: SortOrderInput | SortOrder
    flag?: SortOrderInput | SortOrder
    solitaireFoldInfo?: SortOrderInput | SortOrder
    historyId?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    msgId?: IntWithAggregatesFilter<"Message"> | number
    msgSvrId?: BigIntNullableWithAggregatesFilter<"Message"> | bigint | number | null
    type?: IntWithAggregatesFilter<"Message"> | number
    status?: IntNullableWithAggregatesFilter<"Message"> | number | null
    isSend?: IntWithAggregatesFilter<"Message"> | number
    isShowTimer?: IntNullableWithAggregatesFilter<"Message"> | number | null
    createTime?: BigIntWithAggregatesFilter<"Message"> | bigint | number
    talker?: StringWithAggregatesFilter<"Message"> | string
    content?: StringNullableWithAggregatesFilter<"Message"> | string | null
    imgPath?: StringNullableWithAggregatesFilter<"Message"> | string | null
    reserved?: StringNullableWithAggregatesFilter<"Message"> | string | null
    lvbuffer?: BytesNullableWithAggregatesFilter<"Message"> | Bytes | null
    transContent?: StringNullableWithAggregatesFilter<"Message"> | string | null
    transBrandWording?: StringNullableWithAggregatesFilter<"Message"> | string | null
    talkerId?: IntNullableWithAggregatesFilter<"Message"> | number | null
    bizClientMsgId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    bizChatId?: IntNullableWithAggregatesFilter<"Message"> | number | null
    bizChatUserId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    msgSeq?: IntNullableWithAggregatesFilter<"Message"> | number | null
    flag?: IntNullableWithAggregatesFilter<"Message"> | number | null
    solitaireFoldInfo?: BytesNullableWithAggregatesFilter<"Message"> | Bytes | null
    historyId?: StringNullableWithAggregatesFilter<"Message"> | string | null
  }

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    chatroomname?: StringFilter<"ChatRoom"> | string
    addtime?: BigIntNullableFilter<"ChatRoom"> | bigint | number | null
    memberlist?: StringNullableFilter<"ChatRoom"> | string | null
    displayname?: StringNullableFilter<"ChatRoom"> | string | null
    chatroomnick?: StringNullableFilter<"ChatRoom"> | string | null
    roomflag?: IntNullableFilter<"ChatRoom"> | number | null
    roomowner?: StringNullableFilter<"ChatRoom"> | string | null
    roomdata?: BytesNullableFilter<"ChatRoom"> | Bytes | null
    isShowname?: IntNullableFilter<"ChatRoom"> | number | null
    selfDisplayName?: StringNullableFilter<"ChatRoom"> | string | null
    style?: IntNullableFilter<"ChatRoom"> | number | null
    chatroomdataflag?: IntNullableFilter<"ChatRoom"> | number | null
    modifytime?: BigIntNullableFilter<"ChatRoom"> | bigint | number | null
    chatroomnotice?: StringNullableFilter<"ChatRoom"> | string | null
    xmlChatroomnotice?: StringNullableFilter<"ChatRoom"> | string | null
    chatroomVersion?: IntNullableFilter<"ChatRoom"> | number | null
    chatroomnoticeEditor?: StringNullableFilter<"ChatRoom"> | string | null
    chatroomnoticePublishTime?: BigIntNullableFilter<"ChatRoom"> | bigint | number | null
    chatroomNoticeNew?: IntNullableFilter<"ChatRoom"> | number | null
    chatroomLocalVersion?: BigIntNullableFilter<"ChatRoom"> | bigint | number | null
    chatroomStatus?: IntNullableFilter<"ChatRoom"> | number | null
    memberCount?: IntNullableFilter<"ChatRoom"> | number | null
    chatroomfamilystatusmodifytime?: BigIntNullableFilter<"ChatRoom"> | bigint | number | null
    associateOpenIMRoomName?: StringNullableFilter<"ChatRoom"> | string | null
    openIMRoomMigrateStatus?: IntNullableFilter<"ChatRoom"> | number | null
    saveByteVersion?: StringNullableFilter<"ChatRoom"> | string | null
    handleByteVersion?: StringNullableFilter<"ChatRoom"> | string | null
    roomInfoDetailResByte?: BytesNullableFilter<"ChatRoom"> | Bytes | null
    oldChatroomVersion?: IntNullableFilter<"ChatRoom"> | number | null
    localChatRoomWatchMembers?: BytesNullableFilter<"ChatRoom"> | Bytes | null
    spamStatus?: IntNullableFilter<"ChatRoom"> | number | null
    compactFlag?: BigIntNullableFilter<"ChatRoom"> | bigint | number | null
  }

  export type ChatRoomOrderByWithRelationInput = {
    chatroomname?: SortOrder
    addtime?: SortOrderInput | SortOrder
    memberlist?: SortOrderInput | SortOrder
    displayname?: SortOrderInput | SortOrder
    chatroomnick?: SortOrderInput | SortOrder
    roomflag?: SortOrderInput | SortOrder
    roomowner?: SortOrderInput | SortOrder
    roomdata?: SortOrderInput | SortOrder
    isShowname?: SortOrderInput | SortOrder
    selfDisplayName?: SortOrderInput | SortOrder
    style?: SortOrderInput | SortOrder
    chatroomdataflag?: SortOrderInput | SortOrder
    modifytime?: SortOrderInput | SortOrder
    chatroomnotice?: SortOrderInput | SortOrder
    xmlChatroomnotice?: SortOrderInput | SortOrder
    chatroomVersion?: SortOrderInput | SortOrder
    chatroomnoticeEditor?: SortOrderInput | SortOrder
    chatroomnoticePublishTime?: SortOrderInput | SortOrder
    chatroomNoticeNew?: SortOrderInput | SortOrder
    chatroomLocalVersion?: SortOrderInput | SortOrder
    chatroomStatus?: SortOrderInput | SortOrder
    memberCount?: SortOrderInput | SortOrder
    chatroomfamilystatusmodifytime?: SortOrderInput | SortOrder
    associateOpenIMRoomName?: SortOrderInput | SortOrder
    openIMRoomMigrateStatus?: SortOrderInput | SortOrder
    saveByteVersion?: SortOrderInput | SortOrder
    handleByteVersion?: SortOrderInput | SortOrder
    roomInfoDetailResByte?: SortOrderInput | SortOrder
    oldChatroomVersion?: SortOrderInput | SortOrder
    localChatRoomWatchMembers?: SortOrderInput | SortOrder
    spamStatus?: SortOrderInput | SortOrder
    compactFlag?: SortOrderInput | SortOrder
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    chatroomname?: string
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    addtime?: BigIntNullableFilter<"ChatRoom"> | bigint | number | null
    memberlist?: StringNullableFilter<"ChatRoom"> | string | null
    displayname?: StringNullableFilter<"ChatRoom"> | string | null
    chatroomnick?: StringNullableFilter<"ChatRoom"> | string | null
    roomflag?: IntNullableFilter<"ChatRoom"> | number | null
    roomowner?: StringNullableFilter<"ChatRoom"> | string | null
    roomdata?: BytesNullableFilter<"ChatRoom"> | Bytes | null
    isShowname?: IntNullableFilter<"ChatRoom"> | number | null
    selfDisplayName?: StringNullableFilter<"ChatRoom"> | string | null
    style?: IntNullableFilter<"ChatRoom"> | number | null
    chatroomdataflag?: IntNullableFilter<"ChatRoom"> | number | null
    modifytime?: BigIntNullableFilter<"ChatRoom"> | bigint | number | null
    chatroomnotice?: StringNullableFilter<"ChatRoom"> | string | null
    xmlChatroomnotice?: StringNullableFilter<"ChatRoom"> | string | null
    chatroomVersion?: IntNullableFilter<"ChatRoom"> | number | null
    chatroomnoticeEditor?: StringNullableFilter<"ChatRoom"> | string | null
    chatroomnoticePublishTime?: BigIntNullableFilter<"ChatRoom"> | bigint | number | null
    chatroomNoticeNew?: IntNullableFilter<"ChatRoom"> | number | null
    chatroomLocalVersion?: BigIntNullableFilter<"ChatRoom"> | bigint | number | null
    chatroomStatus?: IntNullableFilter<"ChatRoom"> | number | null
    memberCount?: IntNullableFilter<"ChatRoom"> | number | null
    chatroomfamilystatusmodifytime?: BigIntNullableFilter<"ChatRoom"> | bigint | number | null
    associateOpenIMRoomName?: StringNullableFilter<"ChatRoom"> | string | null
    openIMRoomMigrateStatus?: IntNullableFilter<"ChatRoom"> | number | null
    saveByteVersion?: StringNullableFilter<"ChatRoom"> | string | null
    handleByteVersion?: StringNullableFilter<"ChatRoom"> | string | null
    roomInfoDetailResByte?: BytesNullableFilter<"ChatRoom"> | Bytes | null
    oldChatroomVersion?: IntNullableFilter<"ChatRoom"> | number | null
    localChatRoomWatchMembers?: BytesNullableFilter<"ChatRoom"> | Bytes | null
    spamStatus?: IntNullableFilter<"ChatRoom"> | number | null
    compactFlag?: BigIntNullableFilter<"ChatRoom"> | bigint | number | null
  }, "chatroomname">

  export type ChatRoomOrderByWithAggregationInput = {
    chatroomname?: SortOrder
    addtime?: SortOrderInput | SortOrder
    memberlist?: SortOrderInput | SortOrder
    displayname?: SortOrderInput | SortOrder
    chatroomnick?: SortOrderInput | SortOrder
    roomflag?: SortOrderInput | SortOrder
    roomowner?: SortOrderInput | SortOrder
    roomdata?: SortOrderInput | SortOrder
    isShowname?: SortOrderInput | SortOrder
    selfDisplayName?: SortOrderInput | SortOrder
    style?: SortOrderInput | SortOrder
    chatroomdataflag?: SortOrderInput | SortOrder
    modifytime?: SortOrderInput | SortOrder
    chatroomnotice?: SortOrderInput | SortOrder
    xmlChatroomnotice?: SortOrderInput | SortOrder
    chatroomVersion?: SortOrderInput | SortOrder
    chatroomnoticeEditor?: SortOrderInput | SortOrder
    chatroomnoticePublishTime?: SortOrderInput | SortOrder
    chatroomNoticeNew?: SortOrderInput | SortOrder
    chatroomLocalVersion?: SortOrderInput | SortOrder
    chatroomStatus?: SortOrderInput | SortOrder
    memberCount?: SortOrderInput | SortOrder
    chatroomfamilystatusmodifytime?: SortOrderInput | SortOrder
    associateOpenIMRoomName?: SortOrderInput | SortOrder
    openIMRoomMigrateStatus?: SortOrderInput | SortOrder
    saveByteVersion?: SortOrderInput | SortOrder
    handleByteVersion?: SortOrderInput | SortOrder
    roomInfoDetailResByte?: SortOrderInput | SortOrder
    oldChatroomVersion?: SortOrderInput | SortOrder
    localChatRoomWatchMembers?: SortOrderInput | SortOrder
    spamStatus?: SortOrderInput | SortOrder
    compactFlag?: SortOrderInput | SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _avg?: ChatRoomAvgOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
    _sum?: ChatRoomSumOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    chatroomname?: StringWithAggregatesFilter<"ChatRoom"> | string
    addtime?: BigIntNullableWithAggregatesFilter<"ChatRoom"> | bigint | number | null
    memberlist?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    displayname?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    chatroomnick?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    roomflag?: IntNullableWithAggregatesFilter<"ChatRoom"> | number | null
    roomowner?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    roomdata?: BytesNullableWithAggregatesFilter<"ChatRoom"> | Bytes | null
    isShowname?: IntNullableWithAggregatesFilter<"ChatRoom"> | number | null
    selfDisplayName?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    style?: IntNullableWithAggregatesFilter<"ChatRoom"> | number | null
    chatroomdataflag?: IntNullableWithAggregatesFilter<"ChatRoom"> | number | null
    modifytime?: BigIntNullableWithAggregatesFilter<"ChatRoom"> | bigint | number | null
    chatroomnotice?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    xmlChatroomnotice?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    chatroomVersion?: IntNullableWithAggregatesFilter<"ChatRoom"> | number | null
    chatroomnoticeEditor?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    chatroomnoticePublishTime?: BigIntNullableWithAggregatesFilter<"ChatRoom"> | bigint | number | null
    chatroomNoticeNew?: IntNullableWithAggregatesFilter<"ChatRoom"> | number | null
    chatroomLocalVersion?: BigIntNullableWithAggregatesFilter<"ChatRoom"> | bigint | number | null
    chatroomStatus?: IntNullableWithAggregatesFilter<"ChatRoom"> | number | null
    memberCount?: IntNullableWithAggregatesFilter<"ChatRoom"> | number | null
    chatroomfamilystatusmodifytime?: BigIntNullableWithAggregatesFilter<"ChatRoom"> | bigint | number | null
    associateOpenIMRoomName?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    openIMRoomMigrateStatus?: IntNullableWithAggregatesFilter<"ChatRoom"> | number | null
    saveByteVersion?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    handleByteVersion?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    roomInfoDetailResByte?: BytesNullableWithAggregatesFilter<"ChatRoom"> | Bytes | null
    oldChatroomVersion?: IntNullableWithAggregatesFilter<"ChatRoom"> | number | null
    localChatRoomWatchMembers?: BytesNullableWithAggregatesFilter<"ChatRoom"> | Bytes | null
    spamStatus?: IntNullableWithAggregatesFilter<"ChatRoom"> | number | null
    compactFlag?: BigIntNullableWithAggregatesFilter<"ChatRoom"> | bigint | number | null
  }

  export type ImgFlagWhereInput = {
    AND?: ImgFlagWhereInput | ImgFlagWhereInput[]
    OR?: ImgFlagWhereInput[]
    NOT?: ImgFlagWhereInput | ImgFlagWhereInput[]
    username?: StringFilter<"ImgFlag"> | string
    imgflag?: IntNullableFilter<"ImgFlag"> | number | null
    lastupdatetime?: IntNullableFilter<"ImgFlag"> | number | null
    reserved1?: StringNullableFilter<"ImgFlag"> | string | null
    reserved2?: StringNullableFilter<"ImgFlag"> | string | null
    reserved3?: IntNullableFilter<"ImgFlag"> | number | null
    reserved4?: IntNullableFilter<"ImgFlag"> | number | null
    updateflag?: IntNullableFilter<"ImgFlag"> | number | null
  }

  export type ImgFlagOrderByWithRelationInput = {
    username?: SortOrder
    imgflag?: SortOrderInput | SortOrder
    lastupdatetime?: SortOrderInput | SortOrder
    reserved1?: SortOrderInput | SortOrder
    reserved2?: SortOrderInput | SortOrder
    reserved3?: SortOrderInput | SortOrder
    reserved4?: SortOrderInput | SortOrder
    updateflag?: SortOrderInput | SortOrder
  }

  export type ImgFlagWhereUniqueInput = Prisma.AtLeast<{
    username?: string
    AND?: ImgFlagWhereInput | ImgFlagWhereInput[]
    OR?: ImgFlagWhereInput[]
    NOT?: ImgFlagWhereInput | ImgFlagWhereInput[]
    imgflag?: IntNullableFilter<"ImgFlag"> | number | null
    lastupdatetime?: IntNullableFilter<"ImgFlag"> | number | null
    reserved1?: StringNullableFilter<"ImgFlag"> | string | null
    reserved2?: StringNullableFilter<"ImgFlag"> | string | null
    reserved3?: IntNullableFilter<"ImgFlag"> | number | null
    reserved4?: IntNullableFilter<"ImgFlag"> | number | null
    updateflag?: IntNullableFilter<"ImgFlag"> | number | null
  }, "username">

  export type ImgFlagOrderByWithAggregationInput = {
    username?: SortOrder
    imgflag?: SortOrderInput | SortOrder
    lastupdatetime?: SortOrderInput | SortOrder
    reserved1?: SortOrderInput | SortOrder
    reserved2?: SortOrderInput | SortOrder
    reserved3?: SortOrderInput | SortOrder
    reserved4?: SortOrderInput | SortOrder
    updateflag?: SortOrderInput | SortOrder
    _count?: ImgFlagCountOrderByAggregateInput
    _avg?: ImgFlagAvgOrderByAggregateInput
    _max?: ImgFlagMaxOrderByAggregateInput
    _min?: ImgFlagMinOrderByAggregateInput
    _sum?: ImgFlagSumOrderByAggregateInput
  }

  export type ImgFlagScalarWhereWithAggregatesInput = {
    AND?: ImgFlagScalarWhereWithAggregatesInput | ImgFlagScalarWhereWithAggregatesInput[]
    OR?: ImgFlagScalarWhereWithAggregatesInput[]
    NOT?: ImgFlagScalarWhereWithAggregatesInput | ImgFlagScalarWhereWithAggregatesInput[]
    username?: StringWithAggregatesFilter<"ImgFlag"> | string
    imgflag?: IntNullableWithAggregatesFilter<"ImgFlag"> | number | null
    lastupdatetime?: IntNullableWithAggregatesFilter<"ImgFlag"> | number | null
    reserved1?: StringNullableWithAggregatesFilter<"ImgFlag"> | string | null
    reserved2?: StringNullableWithAggregatesFilter<"ImgFlag"> | string | null
    reserved3?: IntNullableWithAggregatesFilter<"ImgFlag"> | number | null
    reserved4?: IntNullableWithAggregatesFilter<"ImgFlag"> | number | null
    updateflag?: IntNullableWithAggregatesFilter<"ImgFlag"> | number | null
  }

  export type EmojiInfoDescWhereInput = {
    AND?: EmojiInfoDescWhereInput | EmojiInfoDescWhereInput[]
    OR?: EmojiInfoDescWhereInput[]
    NOT?: EmojiInfoDescWhereInput | EmojiInfoDescWhereInput[]
    md5_lang?: StringFilter<"EmojiInfoDesc"> | string
    md5?: StringNullableFilter<"EmojiInfoDesc"> | string | null
    lang?: StringNullableFilter<"EmojiInfoDesc"> | string | null
    desc?: StringNullableFilter<"EmojiInfoDesc"> | string | null
    groupId?: StringNullableFilter<"EmojiInfoDesc"> | string | null
    click_flag?: IntNullableFilter<"EmojiInfoDesc"> | number | null
    download_flag?: IntNullableFilter<"EmojiInfoDesc"> | number | null
  }

  export type EmojiInfoDescOrderByWithRelationInput = {
    md5_lang?: SortOrder
    md5?: SortOrderInput | SortOrder
    lang?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    click_flag?: SortOrderInput | SortOrder
    download_flag?: SortOrderInput | SortOrder
  }

  export type EmojiInfoDescWhereUniqueInput = Prisma.AtLeast<{
    md5_lang?: string
    AND?: EmojiInfoDescWhereInput | EmojiInfoDescWhereInput[]
    OR?: EmojiInfoDescWhereInput[]
    NOT?: EmojiInfoDescWhereInput | EmojiInfoDescWhereInput[]
    md5?: StringNullableFilter<"EmojiInfoDesc"> | string | null
    lang?: StringNullableFilter<"EmojiInfoDesc"> | string | null
    desc?: StringNullableFilter<"EmojiInfoDesc"> | string | null
    groupId?: StringNullableFilter<"EmojiInfoDesc"> | string | null
    click_flag?: IntNullableFilter<"EmojiInfoDesc"> | number | null
    download_flag?: IntNullableFilter<"EmojiInfoDesc"> | number | null
  }, "md5_lang">

  export type EmojiInfoDescOrderByWithAggregationInput = {
    md5_lang?: SortOrder
    md5?: SortOrderInput | SortOrder
    lang?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    click_flag?: SortOrderInput | SortOrder
    download_flag?: SortOrderInput | SortOrder
    _count?: EmojiInfoDescCountOrderByAggregateInput
    _avg?: EmojiInfoDescAvgOrderByAggregateInput
    _max?: EmojiInfoDescMaxOrderByAggregateInput
    _min?: EmojiInfoDescMinOrderByAggregateInput
    _sum?: EmojiInfoDescSumOrderByAggregateInput
  }

  export type EmojiInfoDescScalarWhereWithAggregatesInput = {
    AND?: EmojiInfoDescScalarWhereWithAggregatesInput | EmojiInfoDescScalarWhereWithAggregatesInput[]
    OR?: EmojiInfoDescScalarWhereWithAggregatesInput[]
    NOT?: EmojiInfoDescScalarWhereWithAggregatesInput | EmojiInfoDescScalarWhereWithAggregatesInput[]
    md5_lang?: StringWithAggregatesFilter<"EmojiInfoDesc"> | string
    md5?: StringNullableWithAggregatesFilter<"EmojiInfoDesc"> | string | null
    lang?: StringNullableWithAggregatesFilter<"EmojiInfoDesc"> | string | null
    desc?: StringNullableWithAggregatesFilter<"EmojiInfoDesc"> | string | null
    groupId?: StringNullableWithAggregatesFilter<"EmojiInfoDesc"> | string | null
    click_flag?: IntNullableWithAggregatesFilter<"EmojiInfoDesc"> | number | null
    download_flag?: IntNullableWithAggregatesFilter<"EmojiInfoDesc"> | number | null
  }

  export type EmojiInfoWhereInput = {
    AND?: EmojiInfoWhereInput | EmojiInfoWhereInput[]
    OR?: EmojiInfoWhereInput[]
    NOT?: EmojiInfoWhereInput | EmojiInfoWhereInput[]
    md5?: StringFilter<"EmojiInfo"> | string
    svrid?: StringNullableFilter<"EmojiInfo"> | string | null
    catalog?: IntNullableFilter<"EmojiInfo"> | number | null
    type?: IntNullableFilter<"EmojiInfo"> | number | null
    size?: IntNullableFilter<"EmojiInfo"> | number | null
    start?: IntNullableFilter<"EmojiInfo"> | number | null
    state?: IntNullableFilter<"EmojiInfo"> | number | null
    name?: StringNullableFilter<"EmojiInfo"> | string | null
    content?: StringNullableFilter<"EmojiInfo"> | string | null
    reserved1?: StringNullableFilter<"EmojiInfo"> | string | null
    reserved2?: StringNullableFilter<"EmojiInfo"> | string | null
    reserved3?: IntNullableFilter<"EmojiInfo"> | number | null
    reserved4?: IntNullableFilter<"EmojiInfo"> | number | null
    app_id?: StringNullableFilter<"EmojiInfo"> | string | null
    groupId?: StringNullableFilter<"EmojiInfo"> | string | null
    lastUseTime?: BigIntNullableFilter<"EmojiInfo"> | bigint | number | null
    framesInfo?: StringNullableFilter<"EmojiInfo"> | string | null
    idx?: IntNullableFilter<"EmojiInfo"> | number | null
    temp?: IntNullableFilter<"EmojiInfo"> | number | null
    source?: IntNullableFilter<"EmojiInfo"> | number | null
    needupload?: IntNullableFilter<"EmojiInfo"> | number | null
    designerID?: StringNullableFilter<"EmojiInfo"> | string | null
    thumbUrl?: StringNullableFilter<"EmojiInfo"> | string | null
    cdnUrl?: StringNullableFilter<"EmojiInfo"> | string | null
    encrypturl?: StringNullableFilter<"EmojiInfo"> | string | null
    aeskey?: StringNullableFilter<"EmojiInfo"> | string | null
    width?: IntNullableFilter<"EmojiInfo"> | number | null
    height?: IntNullableFilter<"EmojiInfo"> | number | null
    externUrl?: StringNullableFilter<"EmojiInfo"> | string | null
    externMd5?: StringNullableFilter<"EmojiInfo"> | string | null
    activityid?: StringNullableFilter<"EmojiInfo"> | string | null
    tpurl?: StringNullableFilter<"EmojiInfo"> | string | null
    tpauthkey?: StringNullableFilter<"EmojiInfo"> | string | null
    wxamMd5?: StringNullableFilter<"EmojiInfo"> | string | null
    attachedText?: StringNullableFilter<"EmojiInfo"> | string | null
    captureStatus?: IntNullableFilter<"EmojiInfo"> | number | null
    attachedEmojiMD5?: BytesNullableFilter<"EmojiInfo"> | Bytes | null
    imitateMd5?: StringNullableFilter<"EmojiInfo"> | string | null
    captureUploadErrCode?: IntNullableFilter<"EmojiInfo"> | number | null
    captureUploadCounter?: IntNullableFilter<"EmojiInfo"> | number | null
    captureEnterTime?: BigIntNullableFilter<"EmojiInfo"> | bigint | number | null
    lensId?: StringNullableFilter<"EmojiInfo"> | string | null
    attachTextColor?: StringNullableFilter<"EmojiInfo"> | string | null
    captureScene?: IntNullableFilter<"EmojiInfo"> | number | null
    attr?: StringNullableFilter<"EmojiInfo"> | string | null
    linkId?: StringNullableFilter<"EmojiInfo"> | string | null
    meanings?: StringNullableFilter<"EmojiInfo"> | string | null
    custom_meaning?: StringNullableFilter<"EmojiInfo"> | string | null
    emojiFlag?: BigIntNullableFilter<"EmojiInfo"> | bigint | number | null
  }

  export type EmojiInfoOrderByWithRelationInput = {
    md5?: SortOrder
    svrid?: SortOrderInput | SortOrder
    catalog?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    start?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    reserved1?: SortOrderInput | SortOrder
    reserved2?: SortOrderInput | SortOrder
    reserved3?: SortOrderInput | SortOrder
    reserved4?: SortOrderInput | SortOrder
    app_id?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    lastUseTime?: SortOrderInput | SortOrder
    framesInfo?: SortOrderInput | SortOrder
    idx?: SortOrderInput | SortOrder
    temp?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    needupload?: SortOrderInput | SortOrder
    designerID?: SortOrderInput | SortOrder
    thumbUrl?: SortOrderInput | SortOrder
    cdnUrl?: SortOrderInput | SortOrder
    encrypturl?: SortOrderInput | SortOrder
    aeskey?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    externUrl?: SortOrderInput | SortOrder
    externMd5?: SortOrderInput | SortOrder
    activityid?: SortOrderInput | SortOrder
    tpurl?: SortOrderInput | SortOrder
    tpauthkey?: SortOrderInput | SortOrder
    wxamMd5?: SortOrderInput | SortOrder
    attachedText?: SortOrderInput | SortOrder
    captureStatus?: SortOrderInput | SortOrder
    attachedEmojiMD5?: SortOrderInput | SortOrder
    imitateMd5?: SortOrderInput | SortOrder
    captureUploadErrCode?: SortOrderInput | SortOrder
    captureUploadCounter?: SortOrderInput | SortOrder
    captureEnterTime?: SortOrderInput | SortOrder
    lensId?: SortOrderInput | SortOrder
    attachTextColor?: SortOrderInput | SortOrder
    captureScene?: SortOrderInput | SortOrder
    attr?: SortOrderInput | SortOrder
    linkId?: SortOrderInput | SortOrder
    meanings?: SortOrderInput | SortOrder
    custom_meaning?: SortOrderInput | SortOrder
    emojiFlag?: SortOrderInput | SortOrder
  }

  export type EmojiInfoWhereUniqueInput = Prisma.AtLeast<{
    md5?: string
    AND?: EmojiInfoWhereInput | EmojiInfoWhereInput[]
    OR?: EmojiInfoWhereInput[]
    NOT?: EmojiInfoWhereInput | EmojiInfoWhereInput[]
    svrid?: StringNullableFilter<"EmojiInfo"> | string | null
    catalog?: IntNullableFilter<"EmojiInfo"> | number | null
    type?: IntNullableFilter<"EmojiInfo"> | number | null
    size?: IntNullableFilter<"EmojiInfo"> | number | null
    start?: IntNullableFilter<"EmojiInfo"> | number | null
    state?: IntNullableFilter<"EmojiInfo"> | number | null
    name?: StringNullableFilter<"EmojiInfo"> | string | null
    content?: StringNullableFilter<"EmojiInfo"> | string | null
    reserved1?: StringNullableFilter<"EmojiInfo"> | string | null
    reserved2?: StringNullableFilter<"EmojiInfo"> | string | null
    reserved3?: IntNullableFilter<"EmojiInfo"> | number | null
    reserved4?: IntNullableFilter<"EmojiInfo"> | number | null
    app_id?: StringNullableFilter<"EmojiInfo"> | string | null
    groupId?: StringNullableFilter<"EmojiInfo"> | string | null
    lastUseTime?: BigIntNullableFilter<"EmojiInfo"> | bigint | number | null
    framesInfo?: StringNullableFilter<"EmojiInfo"> | string | null
    idx?: IntNullableFilter<"EmojiInfo"> | number | null
    temp?: IntNullableFilter<"EmojiInfo"> | number | null
    source?: IntNullableFilter<"EmojiInfo"> | number | null
    needupload?: IntNullableFilter<"EmojiInfo"> | number | null
    designerID?: StringNullableFilter<"EmojiInfo"> | string | null
    thumbUrl?: StringNullableFilter<"EmojiInfo"> | string | null
    cdnUrl?: StringNullableFilter<"EmojiInfo"> | string | null
    encrypturl?: StringNullableFilter<"EmojiInfo"> | string | null
    aeskey?: StringNullableFilter<"EmojiInfo"> | string | null
    width?: IntNullableFilter<"EmojiInfo"> | number | null
    height?: IntNullableFilter<"EmojiInfo"> | number | null
    externUrl?: StringNullableFilter<"EmojiInfo"> | string | null
    externMd5?: StringNullableFilter<"EmojiInfo"> | string | null
    activityid?: StringNullableFilter<"EmojiInfo"> | string | null
    tpurl?: StringNullableFilter<"EmojiInfo"> | string | null
    tpauthkey?: StringNullableFilter<"EmojiInfo"> | string | null
    wxamMd5?: StringNullableFilter<"EmojiInfo"> | string | null
    attachedText?: StringNullableFilter<"EmojiInfo"> | string | null
    captureStatus?: IntNullableFilter<"EmojiInfo"> | number | null
    attachedEmojiMD5?: BytesNullableFilter<"EmojiInfo"> | Bytes | null
    imitateMd5?: StringNullableFilter<"EmojiInfo"> | string | null
    captureUploadErrCode?: IntNullableFilter<"EmojiInfo"> | number | null
    captureUploadCounter?: IntNullableFilter<"EmojiInfo"> | number | null
    captureEnterTime?: BigIntNullableFilter<"EmojiInfo"> | bigint | number | null
    lensId?: StringNullableFilter<"EmojiInfo"> | string | null
    attachTextColor?: StringNullableFilter<"EmojiInfo"> | string | null
    captureScene?: IntNullableFilter<"EmojiInfo"> | number | null
    attr?: StringNullableFilter<"EmojiInfo"> | string | null
    linkId?: StringNullableFilter<"EmojiInfo"> | string | null
    meanings?: StringNullableFilter<"EmojiInfo"> | string | null
    custom_meaning?: StringNullableFilter<"EmojiInfo"> | string | null
    emojiFlag?: BigIntNullableFilter<"EmojiInfo"> | bigint | number | null
  }, "md5">

  export type EmojiInfoOrderByWithAggregationInput = {
    md5?: SortOrder
    svrid?: SortOrderInput | SortOrder
    catalog?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    start?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    reserved1?: SortOrderInput | SortOrder
    reserved2?: SortOrderInput | SortOrder
    reserved3?: SortOrderInput | SortOrder
    reserved4?: SortOrderInput | SortOrder
    app_id?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    lastUseTime?: SortOrderInput | SortOrder
    framesInfo?: SortOrderInput | SortOrder
    idx?: SortOrderInput | SortOrder
    temp?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    needupload?: SortOrderInput | SortOrder
    designerID?: SortOrderInput | SortOrder
    thumbUrl?: SortOrderInput | SortOrder
    cdnUrl?: SortOrderInput | SortOrder
    encrypturl?: SortOrderInput | SortOrder
    aeskey?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    externUrl?: SortOrderInput | SortOrder
    externMd5?: SortOrderInput | SortOrder
    activityid?: SortOrderInput | SortOrder
    tpurl?: SortOrderInput | SortOrder
    tpauthkey?: SortOrderInput | SortOrder
    wxamMd5?: SortOrderInput | SortOrder
    attachedText?: SortOrderInput | SortOrder
    captureStatus?: SortOrderInput | SortOrder
    attachedEmojiMD5?: SortOrderInput | SortOrder
    imitateMd5?: SortOrderInput | SortOrder
    captureUploadErrCode?: SortOrderInput | SortOrder
    captureUploadCounter?: SortOrderInput | SortOrder
    captureEnterTime?: SortOrderInput | SortOrder
    lensId?: SortOrderInput | SortOrder
    attachTextColor?: SortOrderInput | SortOrder
    captureScene?: SortOrderInput | SortOrder
    attr?: SortOrderInput | SortOrder
    linkId?: SortOrderInput | SortOrder
    meanings?: SortOrderInput | SortOrder
    custom_meaning?: SortOrderInput | SortOrder
    emojiFlag?: SortOrderInput | SortOrder
    _count?: EmojiInfoCountOrderByAggregateInput
    _avg?: EmojiInfoAvgOrderByAggregateInput
    _max?: EmojiInfoMaxOrderByAggregateInput
    _min?: EmojiInfoMinOrderByAggregateInput
    _sum?: EmojiInfoSumOrderByAggregateInput
  }

  export type EmojiInfoScalarWhereWithAggregatesInput = {
    AND?: EmojiInfoScalarWhereWithAggregatesInput | EmojiInfoScalarWhereWithAggregatesInput[]
    OR?: EmojiInfoScalarWhereWithAggregatesInput[]
    NOT?: EmojiInfoScalarWhereWithAggregatesInput | EmojiInfoScalarWhereWithAggregatesInput[]
    md5?: StringWithAggregatesFilter<"EmojiInfo"> | string
    svrid?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    catalog?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    type?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    size?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    start?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    state?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    name?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    content?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    reserved1?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    reserved2?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    reserved3?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    reserved4?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    app_id?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    groupId?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    lastUseTime?: BigIntNullableWithAggregatesFilter<"EmojiInfo"> | bigint | number | null
    framesInfo?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    idx?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    temp?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    source?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    needupload?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    designerID?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    thumbUrl?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    cdnUrl?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    encrypturl?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    aeskey?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    width?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    height?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    externUrl?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    externMd5?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    activityid?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    tpurl?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    tpauthkey?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    wxamMd5?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    attachedText?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    captureStatus?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    attachedEmojiMD5?: BytesNullableWithAggregatesFilter<"EmojiInfo"> | Bytes | null
    imitateMd5?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    captureUploadErrCode?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    captureUploadCounter?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    captureEnterTime?: BigIntNullableWithAggregatesFilter<"EmojiInfo"> | bigint | number | null
    lensId?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    attachTextColor?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    captureScene?: IntNullableWithAggregatesFilter<"EmojiInfo"> | number | null
    attr?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    linkId?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    meanings?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    custom_meaning?: StringNullableWithAggregatesFilter<"EmojiInfo"> | string | null
    emojiFlag?: BigIntNullableWithAggregatesFilter<"EmojiInfo"> | bigint | number | null
  }

  export type ImgInfo2WhereInput = {
    AND?: ImgInfo2WhereInput | ImgInfo2WhereInput[]
    OR?: ImgInfo2WhereInput[]
    NOT?: ImgInfo2WhereInput | ImgInfo2WhereInput[]
    id?: IntFilter<"ImgInfo2"> | number
    msgSvrId?: BigIntNullableFilter<"ImgInfo2"> | bigint | number | null
    offset?: IntNullableFilter<"ImgInfo2"> | number | null
    totalLen?: IntNullableFilter<"ImgInfo2"> | number | null
    bigImgPath?: StringNullableFilter<"ImgInfo2"> | string | null
    thumbImgPath?: StringNullableFilter<"ImgInfo2"> | string | null
    createtime?: IntNullableFilter<"ImgInfo2"> | number | null
    msglocalid?: IntNullableFilter<"ImgInfo2"> | number | null
    status?: IntNullableFilter<"ImgInfo2"> | number | null
    nettimes?: IntNullableFilter<"ImgInfo2"> | number | null
    reserved1?: IntNullableFilter<"ImgInfo2"> | number | null
    reserved2?: IntNullableFilter<"ImgInfo2"> | number | null
    reserved3?: StringNullableFilter<"ImgInfo2"> | string | null
    reserved4?: StringNullableFilter<"ImgInfo2"> | string | null
    hashdthumb?: IntNullableFilter<"ImgInfo2"> | number | null
    iscomplete?: IntNullableFilter<"ImgInfo2"> | number | null
    origImgMD5?: StringNullableFilter<"ImgInfo2"> | string | null
    compressType?: IntNullableFilter<"ImgInfo2"> | number | null
    midImgPath?: StringNullableFilter<"ImgInfo2"> | string | null
    forwardType?: IntNullableFilter<"ImgInfo2"> | number | null
    hevcPath?: StringNullableFilter<"ImgInfo2"> | string | null
    sendImgType?: IntNullableFilter<"ImgInfo2"> | number | null
    originSourceMd5?: StringNullableFilter<"ImgInfo2"> | string | null
    msgTalker?: StringNullableFilter<"ImgInfo2"> | string | null
  }

  export type ImgInfo2OrderByWithRelationInput = {
    id?: SortOrder
    msgSvrId?: SortOrderInput | SortOrder
    offset?: SortOrderInput | SortOrder
    totalLen?: SortOrderInput | SortOrder
    bigImgPath?: SortOrderInput | SortOrder
    thumbImgPath?: SortOrderInput | SortOrder
    createtime?: SortOrderInput | SortOrder
    msglocalid?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    nettimes?: SortOrderInput | SortOrder
    reserved1?: SortOrderInput | SortOrder
    reserved2?: SortOrderInput | SortOrder
    reserved3?: SortOrderInput | SortOrder
    reserved4?: SortOrderInput | SortOrder
    hashdthumb?: SortOrderInput | SortOrder
    iscomplete?: SortOrderInput | SortOrder
    origImgMD5?: SortOrderInput | SortOrder
    compressType?: SortOrderInput | SortOrder
    midImgPath?: SortOrderInput | SortOrder
    forwardType?: SortOrderInput | SortOrder
    hevcPath?: SortOrderInput | SortOrder
    sendImgType?: SortOrderInput | SortOrder
    originSourceMd5?: SortOrderInput | SortOrder
    msgTalker?: SortOrderInput | SortOrder
  }

  export type ImgInfo2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImgInfo2WhereInput | ImgInfo2WhereInput[]
    OR?: ImgInfo2WhereInput[]
    NOT?: ImgInfo2WhereInput | ImgInfo2WhereInput[]
    msgSvrId?: BigIntNullableFilter<"ImgInfo2"> | bigint | number | null
    offset?: IntNullableFilter<"ImgInfo2"> | number | null
    totalLen?: IntNullableFilter<"ImgInfo2"> | number | null
    bigImgPath?: StringNullableFilter<"ImgInfo2"> | string | null
    thumbImgPath?: StringNullableFilter<"ImgInfo2"> | string | null
    createtime?: IntNullableFilter<"ImgInfo2"> | number | null
    msglocalid?: IntNullableFilter<"ImgInfo2"> | number | null
    status?: IntNullableFilter<"ImgInfo2"> | number | null
    nettimes?: IntNullableFilter<"ImgInfo2"> | number | null
    reserved1?: IntNullableFilter<"ImgInfo2"> | number | null
    reserved2?: IntNullableFilter<"ImgInfo2"> | number | null
    reserved3?: StringNullableFilter<"ImgInfo2"> | string | null
    reserved4?: StringNullableFilter<"ImgInfo2"> | string | null
    hashdthumb?: IntNullableFilter<"ImgInfo2"> | number | null
    iscomplete?: IntNullableFilter<"ImgInfo2"> | number | null
    origImgMD5?: StringNullableFilter<"ImgInfo2"> | string | null
    compressType?: IntNullableFilter<"ImgInfo2"> | number | null
    midImgPath?: StringNullableFilter<"ImgInfo2"> | string | null
    forwardType?: IntNullableFilter<"ImgInfo2"> | number | null
    hevcPath?: StringNullableFilter<"ImgInfo2"> | string | null
    sendImgType?: IntNullableFilter<"ImgInfo2"> | number | null
    originSourceMd5?: StringNullableFilter<"ImgInfo2"> | string | null
    msgTalker?: StringNullableFilter<"ImgInfo2"> | string | null
  }, "id">

  export type ImgInfo2OrderByWithAggregationInput = {
    id?: SortOrder
    msgSvrId?: SortOrderInput | SortOrder
    offset?: SortOrderInput | SortOrder
    totalLen?: SortOrderInput | SortOrder
    bigImgPath?: SortOrderInput | SortOrder
    thumbImgPath?: SortOrderInput | SortOrder
    createtime?: SortOrderInput | SortOrder
    msglocalid?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    nettimes?: SortOrderInput | SortOrder
    reserved1?: SortOrderInput | SortOrder
    reserved2?: SortOrderInput | SortOrder
    reserved3?: SortOrderInput | SortOrder
    reserved4?: SortOrderInput | SortOrder
    hashdthumb?: SortOrderInput | SortOrder
    iscomplete?: SortOrderInput | SortOrder
    origImgMD5?: SortOrderInput | SortOrder
    compressType?: SortOrderInput | SortOrder
    midImgPath?: SortOrderInput | SortOrder
    forwardType?: SortOrderInput | SortOrder
    hevcPath?: SortOrderInput | SortOrder
    sendImgType?: SortOrderInput | SortOrder
    originSourceMd5?: SortOrderInput | SortOrder
    msgTalker?: SortOrderInput | SortOrder
    _count?: ImgInfo2CountOrderByAggregateInput
    _avg?: ImgInfo2AvgOrderByAggregateInput
    _max?: ImgInfo2MaxOrderByAggregateInput
    _min?: ImgInfo2MinOrderByAggregateInput
    _sum?: ImgInfo2SumOrderByAggregateInput
  }

  export type ImgInfo2ScalarWhereWithAggregatesInput = {
    AND?: ImgInfo2ScalarWhereWithAggregatesInput | ImgInfo2ScalarWhereWithAggregatesInput[]
    OR?: ImgInfo2ScalarWhereWithAggregatesInput[]
    NOT?: ImgInfo2ScalarWhereWithAggregatesInput | ImgInfo2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImgInfo2"> | number
    msgSvrId?: BigIntNullableWithAggregatesFilter<"ImgInfo2"> | bigint | number | null
    offset?: IntNullableWithAggregatesFilter<"ImgInfo2"> | number | null
    totalLen?: IntNullableWithAggregatesFilter<"ImgInfo2"> | number | null
    bigImgPath?: StringNullableWithAggregatesFilter<"ImgInfo2"> | string | null
    thumbImgPath?: StringNullableWithAggregatesFilter<"ImgInfo2"> | string | null
    createtime?: IntNullableWithAggregatesFilter<"ImgInfo2"> | number | null
    msglocalid?: IntNullableWithAggregatesFilter<"ImgInfo2"> | number | null
    status?: IntNullableWithAggregatesFilter<"ImgInfo2"> | number | null
    nettimes?: IntNullableWithAggregatesFilter<"ImgInfo2"> | number | null
    reserved1?: IntNullableWithAggregatesFilter<"ImgInfo2"> | number | null
    reserved2?: IntNullableWithAggregatesFilter<"ImgInfo2"> | number | null
    reserved3?: StringNullableWithAggregatesFilter<"ImgInfo2"> | string | null
    reserved4?: StringNullableWithAggregatesFilter<"ImgInfo2"> | string | null
    hashdthumb?: IntNullableWithAggregatesFilter<"ImgInfo2"> | number | null
    iscomplete?: IntNullableWithAggregatesFilter<"ImgInfo2"> | number | null
    origImgMD5?: StringNullableWithAggregatesFilter<"ImgInfo2"> | string | null
    compressType?: IntNullableWithAggregatesFilter<"ImgInfo2"> | number | null
    midImgPath?: StringNullableWithAggregatesFilter<"ImgInfo2"> | string | null
    forwardType?: IntNullableWithAggregatesFilter<"ImgInfo2"> | number | null
    hevcPath?: StringNullableWithAggregatesFilter<"ImgInfo2"> | string | null
    sendImgType?: IntNullableWithAggregatesFilter<"ImgInfo2"> | number | null
    originSourceMd5?: StringNullableWithAggregatesFilter<"ImgInfo2"> | string | null
    msgTalker?: StringNullableWithAggregatesFilter<"ImgInfo2"> | string | null
  }

  export type RContactCreateInput = {
    username: string
    alias?: string | null
    conRemark?: string | null
    domainList?: string | null
    nickname?: string | null
    pyInitial?: string | null
    quanPin?: string | null
    showHead?: number | null
    type?: number | null
    uiType?: bigint | number | null
    weiboFlag?: number | null
    weiboNickname?: string | null
    conRemarkPYFull?: string | null
    conRemarkPYShort?: string | null
    lvbuff?: Bytes | null
    verifyFlag?: number | null
    encryptUsername?: string | null
    chatroomFlag?: number | null
    deleteFlag?: number | null
    contactLabelIds?: string | null
    descWordingId?: string | null
    openImAppid?: string | null
    sourceExtInfo?: string | null
    ticket?: string | null
    usernameFlag?: bigint | number | null
    contactExtra?: Bytes | null
    createTime?: bigint | number | null
  }

  export type RContactUncheckedCreateInput = {
    username: string
    alias?: string | null
    conRemark?: string | null
    domainList?: string | null
    nickname?: string | null
    pyInitial?: string | null
    quanPin?: string | null
    showHead?: number | null
    type?: number | null
    uiType?: bigint | number | null
    weiboFlag?: number | null
    weiboNickname?: string | null
    conRemarkPYFull?: string | null
    conRemarkPYShort?: string | null
    lvbuff?: Bytes | null
    verifyFlag?: number | null
    encryptUsername?: string | null
    chatroomFlag?: number | null
    deleteFlag?: number | null
    contactLabelIds?: string | null
    descWordingId?: string | null
    openImAppid?: string | null
    sourceExtInfo?: string | null
    ticket?: string | null
    usernameFlag?: bigint | number | null
    contactExtra?: Bytes | null
    createTime?: bigint | number | null
  }

  export type RContactUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    conRemark?: NullableStringFieldUpdateOperationsInput | string | null
    domainList?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    pyInitial?: NullableStringFieldUpdateOperationsInput | string | null
    quanPin?: NullableStringFieldUpdateOperationsInput | string | null
    showHead?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    uiType?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    weiboFlag?: NullableIntFieldUpdateOperationsInput | number | null
    weiboNickname?: NullableStringFieldUpdateOperationsInput | string | null
    conRemarkPYFull?: NullableStringFieldUpdateOperationsInput | string | null
    conRemarkPYShort?: NullableStringFieldUpdateOperationsInput | string | null
    lvbuff?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    verifyFlag?: NullableIntFieldUpdateOperationsInput | number | null
    encryptUsername?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomFlag?: NullableIntFieldUpdateOperationsInput | number | null
    deleteFlag?: NullableIntFieldUpdateOperationsInput | number | null
    contactLabelIds?: NullableStringFieldUpdateOperationsInput | string | null
    descWordingId?: NullableStringFieldUpdateOperationsInput | string | null
    openImAppid?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    usernameFlag?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    contactExtra?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type RContactUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    conRemark?: NullableStringFieldUpdateOperationsInput | string | null
    domainList?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    pyInitial?: NullableStringFieldUpdateOperationsInput | string | null
    quanPin?: NullableStringFieldUpdateOperationsInput | string | null
    showHead?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    uiType?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    weiboFlag?: NullableIntFieldUpdateOperationsInput | number | null
    weiboNickname?: NullableStringFieldUpdateOperationsInput | string | null
    conRemarkPYFull?: NullableStringFieldUpdateOperationsInput | string | null
    conRemarkPYShort?: NullableStringFieldUpdateOperationsInput | string | null
    lvbuff?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    verifyFlag?: NullableIntFieldUpdateOperationsInput | number | null
    encryptUsername?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomFlag?: NullableIntFieldUpdateOperationsInput | number | null
    deleteFlag?: NullableIntFieldUpdateOperationsInput | number | null
    contactLabelIds?: NullableStringFieldUpdateOperationsInput | string | null
    descWordingId?: NullableStringFieldUpdateOperationsInput | string | null
    openImAppid?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    usernameFlag?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    contactExtra?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type RContactCreateManyInput = {
    username: string
    alias?: string | null
    conRemark?: string | null
    domainList?: string | null
    nickname?: string | null
    pyInitial?: string | null
    quanPin?: string | null
    showHead?: number | null
    type?: number | null
    uiType?: bigint | number | null
    weiboFlag?: number | null
    weiboNickname?: string | null
    conRemarkPYFull?: string | null
    conRemarkPYShort?: string | null
    lvbuff?: Bytes | null
    verifyFlag?: number | null
    encryptUsername?: string | null
    chatroomFlag?: number | null
    deleteFlag?: number | null
    contactLabelIds?: string | null
    descWordingId?: string | null
    openImAppid?: string | null
    sourceExtInfo?: string | null
    ticket?: string | null
    usernameFlag?: bigint | number | null
    contactExtra?: Bytes | null
    createTime?: bigint | number | null
  }

  export type RContactUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    conRemark?: NullableStringFieldUpdateOperationsInput | string | null
    domainList?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    pyInitial?: NullableStringFieldUpdateOperationsInput | string | null
    quanPin?: NullableStringFieldUpdateOperationsInput | string | null
    showHead?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    uiType?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    weiboFlag?: NullableIntFieldUpdateOperationsInput | number | null
    weiboNickname?: NullableStringFieldUpdateOperationsInput | string | null
    conRemarkPYFull?: NullableStringFieldUpdateOperationsInput | string | null
    conRemarkPYShort?: NullableStringFieldUpdateOperationsInput | string | null
    lvbuff?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    verifyFlag?: NullableIntFieldUpdateOperationsInput | number | null
    encryptUsername?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomFlag?: NullableIntFieldUpdateOperationsInput | number | null
    deleteFlag?: NullableIntFieldUpdateOperationsInput | number | null
    contactLabelIds?: NullableStringFieldUpdateOperationsInput | string | null
    descWordingId?: NullableStringFieldUpdateOperationsInput | string | null
    openImAppid?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    usernameFlag?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    contactExtra?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type RContactUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    conRemark?: NullableStringFieldUpdateOperationsInput | string | null
    domainList?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    pyInitial?: NullableStringFieldUpdateOperationsInput | string | null
    quanPin?: NullableStringFieldUpdateOperationsInput | string | null
    showHead?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    uiType?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    weiboFlag?: NullableIntFieldUpdateOperationsInput | number | null
    weiboNickname?: NullableStringFieldUpdateOperationsInput | string | null
    conRemarkPYFull?: NullableStringFieldUpdateOperationsInput | string | null
    conRemarkPYShort?: NullableStringFieldUpdateOperationsInput | string | null
    lvbuff?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    verifyFlag?: NullableIntFieldUpdateOperationsInput | number | null
    encryptUsername?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomFlag?: NullableIntFieldUpdateOperationsInput | number | null
    deleteFlag?: NullableIntFieldUpdateOperationsInput | number | null
    contactLabelIds?: NullableStringFieldUpdateOperationsInput | string | null
    descWordingId?: NullableStringFieldUpdateOperationsInput | string | null
    openImAppid?: NullableStringFieldUpdateOperationsInput | string | null
    sourceExtInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    usernameFlag?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    contactExtra?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type MessageCreateInput = {
    msgId: number
    msgSvrId?: bigint | number | null
    type: number
    status?: number | null
    isSend: number
    isShowTimer?: number | null
    createTime: bigint | number
    talker: string
    content?: string | null
    imgPath?: string | null
    reserved?: string | null
    lvbuffer?: Bytes | null
    transContent?: string | null
    transBrandWording?: string | null
    talkerId?: number | null
    bizClientMsgId?: string | null
    bizChatId?: number | null
    bizChatUserId?: string | null
    msgSeq?: number | null
    flag?: number | null
    solitaireFoldInfo?: Bytes | null
    historyId?: string | null
  }

  export type MessageUncheckedCreateInput = {
    msgId: number
    msgSvrId?: bigint | number | null
    type: number
    status?: number | null
    isSend: number
    isShowTimer?: number | null
    createTime: bigint | number
    talker: string
    content?: string | null
    imgPath?: string | null
    reserved?: string | null
    lvbuffer?: Bytes | null
    transContent?: string | null
    transBrandWording?: string | null
    talkerId?: number | null
    bizClientMsgId?: string | null
    bizChatId?: number | null
    bizChatUserId?: string | null
    msgSeq?: number | null
    flag?: number | null
    solitaireFoldInfo?: Bytes | null
    historyId?: string | null
  }

  export type MessageUpdateInput = {
    msgId?: IntFieldUpdateOperationsInput | number
    msgSvrId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: IntFieldUpdateOperationsInput | number
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isSend?: IntFieldUpdateOperationsInput | number
    isShowTimer?: NullableIntFieldUpdateOperationsInput | number | null
    createTime?: BigIntFieldUpdateOperationsInput | bigint | number
    talker?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    reserved?: NullableStringFieldUpdateOperationsInput | string | null
    lvbuffer?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    transContent?: NullableStringFieldUpdateOperationsInput | string | null
    transBrandWording?: NullableStringFieldUpdateOperationsInput | string | null
    talkerId?: NullableIntFieldUpdateOperationsInput | number | null
    bizClientMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    bizChatId?: NullableIntFieldUpdateOperationsInput | number | null
    bizChatUserId?: NullableStringFieldUpdateOperationsInput | string | null
    msgSeq?: NullableIntFieldUpdateOperationsInput | number | null
    flag?: NullableIntFieldUpdateOperationsInput | number | null
    solitaireFoldInfo?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    historyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateInput = {
    msgId?: IntFieldUpdateOperationsInput | number
    msgSvrId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: IntFieldUpdateOperationsInput | number
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isSend?: IntFieldUpdateOperationsInput | number
    isShowTimer?: NullableIntFieldUpdateOperationsInput | number | null
    createTime?: BigIntFieldUpdateOperationsInput | bigint | number
    talker?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    reserved?: NullableStringFieldUpdateOperationsInput | string | null
    lvbuffer?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    transContent?: NullableStringFieldUpdateOperationsInput | string | null
    transBrandWording?: NullableStringFieldUpdateOperationsInput | string | null
    talkerId?: NullableIntFieldUpdateOperationsInput | number | null
    bizClientMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    bizChatId?: NullableIntFieldUpdateOperationsInput | number | null
    bizChatUserId?: NullableStringFieldUpdateOperationsInput | string | null
    msgSeq?: NullableIntFieldUpdateOperationsInput | number | null
    flag?: NullableIntFieldUpdateOperationsInput | number | null
    solitaireFoldInfo?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    historyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyInput = {
    msgId: number
    msgSvrId?: bigint | number | null
    type: number
    status?: number | null
    isSend: number
    isShowTimer?: number | null
    createTime: bigint | number
    talker: string
    content?: string | null
    imgPath?: string | null
    reserved?: string | null
    lvbuffer?: Bytes | null
    transContent?: string | null
    transBrandWording?: string | null
    talkerId?: number | null
    bizClientMsgId?: string | null
    bizChatId?: number | null
    bizChatUserId?: string | null
    msgSeq?: number | null
    flag?: number | null
    solitaireFoldInfo?: Bytes | null
    historyId?: string | null
  }

  export type MessageUpdateManyMutationInput = {
    msgId?: IntFieldUpdateOperationsInput | number
    msgSvrId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: IntFieldUpdateOperationsInput | number
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isSend?: IntFieldUpdateOperationsInput | number
    isShowTimer?: NullableIntFieldUpdateOperationsInput | number | null
    createTime?: BigIntFieldUpdateOperationsInput | bigint | number
    talker?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    reserved?: NullableStringFieldUpdateOperationsInput | string | null
    lvbuffer?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    transContent?: NullableStringFieldUpdateOperationsInput | string | null
    transBrandWording?: NullableStringFieldUpdateOperationsInput | string | null
    talkerId?: NullableIntFieldUpdateOperationsInput | number | null
    bizClientMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    bizChatId?: NullableIntFieldUpdateOperationsInput | number | null
    bizChatUserId?: NullableStringFieldUpdateOperationsInput | string | null
    msgSeq?: NullableIntFieldUpdateOperationsInput | number | null
    flag?: NullableIntFieldUpdateOperationsInput | number | null
    solitaireFoldInfo?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    historyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyInput = {
    msgId?: IntFieldUpdateOperationsInput | number
    msgSvrId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: IntFieldUpdateOperationsInput | number
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isSend?: IntFieldUpdateOperationsInput | number
    isShowTimer?: NullableIntFieldUpdateOperationsInput | number | null
    createTime?: BigIntFieldUpdateOperationsInput | bigint | number
    talker?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imgPath?: NullableStringFieldUpdateOperationsInput | string | null
    reserved?: NullableStringFieldUpdateOperationsInput | string | null
    lvbuffer?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    transContent?: NullableStringFieldUpdateOperationsInput | string | null
    transBrandWording?: NullableStringFieldUpdateOperationsInput | string | null
    talkerId?: NullableIntFieldUpdateOperationsInput | number | null
    bizClientMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    bizChatId?: NullableIntFieldUpdateOperationsInput | number | null
    bizChatUserId?: NullableStringFieldUpdateOperationsInput | string | null
    msgSeq?: NullableIntFieldUpdateOperationsInput | number | null
    flag?: NullableIntFieldUpdateOperationsInput | number | null
    solitaireFoldInfo?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    historyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatRoomCreateInput = {
    chatroomname: string
    addtime?: bigint | number | null
    memberlist?: string | null
    displayname?: string | null
    chatroomnick?: string | null
    roomflag?: number | null
    roomowner?: string | null
    roomdata?: Bytes | null
    isShowname?: number | null
    selfDisplayName?: string | null
    style?: number | null
    chatroomdataflag?: number | null
    modifytime?: bigint | number | null
    chatroomnotice?: string | null
    xmlChatroomnotice?: string | null
    chatroomVersion?: number | null
    chatroomnoticeEditor?: string | null
    chatroomnoticePublishTime?: bigint | number | null
    chatroomNoticeNew?: number | null
    chatroomLocalVersion?: bigint | number | null
    chatroomStatus?: number | null
    memberCount?: number | null
    chatroomfamilystatusmodifytime?: bigint | number | null
    associateOpenIMRoomName?: string | null
    openIMRoomMigrateStatus?: number | null
    saveByteVersion?: string | null
    handleByteVersion?: string | null
    roomInfoDetailResByte?: Bytes | null
    oldChatroomVersion?: number | null
    localChatRoomWatchMembers?: Bytes | null
    spamStatus?: number | null
    compactFlag?: bigint | number | null
  }

  export type ChatRoomUncheckedCreateInput = {
    chatroomname: string
    addtime?: bigint | number | null
    memberlist?: string | null
    displayname?: string | null
    chatroomnick?: string | null
    roomflag?: number | null
    roomowner?: string | null
    roomdata?: Bytes | null
    isShowname?: number | null
    selfDisplayName?: string | null
    style?: number | null
    chatroomdataflag?: number | null
    modifytime?: bigint | number | null
    chatroomnotice?: string | null
    xmlChatroomnotice?: string | null
    chatroomVersion?: number | null
    chatroomnoticeEditor?: string | null
    chatroomnoticePublishTime?: bigint | number | null
    chatroomNoticeNew?: number | null
    chatroomLocalVersion?: bigint | number | null
    chatroomStatus?: number | null
    memberCount?: number | null
    chatroomfamilystatusmodifytime?: bigint | number | null
    associateOpenIMRoomName?: string | null
    openIMRoomMigrateStatus?: number | null
    saveByteVersion?: string | null
    handleByteVersion?: string | null
    roomInfoDetailResByte?: Bytes | null
    oldChatroomVersion?: number | null
    localChatRoomWatchMembers?: Bytes | null
    spamStatus?: number | null
    compactFlag?: bigint | number | null
  }

  export type ChatRoomUpdateInput = {
    chatroomname?: StringFieldUpdateOperationsInput | string
    addtime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    memberlist?: NullableStringFieldUpdateOperationsInput | string | null
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomnick?: NullableStringFieldUpdateOperationsInput | string | null
    roomflag?: NullableIntFieldUpdateOperationsInput | number | null
    roomowner?: NullableStringFieldUpdateOperationsInput | string | null
    roomdata?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    isShowname?: NullableIntFieldUpdateOperationsInput | number | null
    selfDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomdataflag?: NullableIntFieldUpdateOperationsInput | number | null
    modifytime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatroomnotice?: NullableStringFieldUpdateOperationsInput | string | null
    xmlChatroomnotice?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomVersion?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomnoticeEditor?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomnoticePublishTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatroomNoticeNew?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomLocalVersion?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatroomStatus?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomfamilystatusmodifytime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    associateOpenIMRoomName?: NullableStringFieldUpdateOperationsInput | string | null
    openIMRoomMigrateStatus?: NullableIntFieldUpdateOperationsInput | number | null
    saveByteVersion?: NullableStringFieldUpdateOperationsInput | string | null
    handleByteVersion?: NullableStringFieldUpdateOperationsInput | string | null
    roomInfoDetailResByte?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    oldChatroomVersion?: NullableIntFieldUpdateOperationsInput | number | null
    localChatRoomWatchMembers?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    spamStatus?: NullableIntFieldUpdateOperationsInput | number | null
    compactFlag?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ChatRoomUncheckedUpdateInput = {
    chatroomname?: StringFieldUpdateOperationsInput | string
    addtime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    memberlist?: NullableStringFieldUpdateOperationsInput | string | null
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomnick?: NullableStringFieldUpdateOperationsInput | string | null
    roomflag?: NullableIntFieldUpdateOperationsInput | number | null
    roomowner?: NullableStringFieldUpdateOperationsInput | string | null
    roomdata?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    isShowname?: NullableIntFieldUpdateOperationsInput | number | null
    selfDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomdataflag?: NullableIntFieldUpdateOperationsInput | number | null
    modifytime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatroomnotice?: NullableStringFieldUpdateOperationsInput | string | null
    xmlChatroomnotice?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomVersion?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomnoticeEditor?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomnoticePublishTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatroomNoticeNew?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomLocalVersion?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatroomStatus?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomfamilystatusmodifytime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    associateOpenIMRoomName?: NullableStringFieldUpdateOperationsInput | string | null
    openIMRoomMigrateStatus?: NullableIntFieldUpdateOperationsInput | number | null
    saveByteVersion?: NullableStringFieldUpdateOperationsInput | string | null
    handleByteVersion?: NullableStringFieldUpdateOperationsInput | string | null
    roomInfoDetailResByte?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    oldChatroomVersion?: NullableIntFieldUpdateOperationsInput | number | null
    localChatRoomWatchMembers?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    spamStatus?: NullableIntFieldUpdateOperationsInput | number | null
    compactFlag?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ChatRoomCreateManyInput = {
    chatroomname: string
    addtime?: bigint | number | null
    memberlist?: string | null
    displayname?: string | null
    chatroomnick?: string | null
    roomflag?: number | null
    roomowner?: string | null
    roomdata?: Bytes | null
    isShowname?: number | null
    selfDisplayName?: string | null
    style?: number | null
    chatroomdataflag?: number | null
    modifytime?: bigint | number | null
    chatroomnotice?: string | null
    xmlChatroomnotice?: string | null
    chatroomVersion?: number | null
    chatroomnoticeEditor?: string | null
    chatroomnoticePublishTime?: bigint | number | null
    chatroomNoticeNew?: number | null
    chatroomLocalVersion?: bigint | number | null
    chatroomStatus?: number | null
    memberCount?: number | null
    chatroomfamilystatusmodifytime?: bigint | number | null
    associateOpenIMRoomName?: string | null
    openIMRoomMigrateStatus?: number | null
    saveByteVersion?: string | null
    handleByteVersion?: string | null
    roomInfoDetailResByte?: Bytes | null
    oldChatroomVersion?: number | null
    localChatRoomWatchMembers?: Bytes | null
    spamStatus?: number | null
    compactFlag?: bigint | number | null
  }

  export type ChatRoomUpdateManyMutationInput = {
    chatroomname?: StringFieldUpdateOperationsInput | string
    addtime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    memberlist?: NullableStringFieldUpdateOperationsInput | string | null
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomnick?: NullableStringFieldUpdateOperationsInput | string | null
    roomflag?: NullableIntFieldUpdateOperationsInput | number | null
    roomowner?: NullableStringFieldUpdateOperationsInput | string | null
    roomdata?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    isShowname?: NullableIntFieldUpdateOperationsInput | number | null
    selfDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomdataflag?: NullableIntFieldUpdateOperationsInput | number | null
    modifytime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatroomnotice?: NullableStringFieldUpdateOperationsInput | string | null
    xmlChatroomnotice?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomVersion?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomnoticeEditor?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomnoticePublishTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatroomNoticeNew?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomLocalVersion?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatroomStatus?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomfamilystatusmodifytime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    associateOpenIMRoomName?: NullableStringFieldUpdateOperationsInput | string | null
    openIMRoomMigrateStatus?: NullableIntFieldUpdateOperationsInput | number | null
    saveByteVersion?: NullableStringFieldUpdateOperationsInput | string | null
    handleByteVersion?: NullableStringFieldUpdateOperationsInput | string | null
    roomInfoDetailResByte?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    oldChatroomVersion?: NullableIntFieldUpdateOperationsInput | number | null
    localChatRoomWatchMembers?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    spamStatus?: NullableIntFieldUpdateOperationsInput | number | null
    compactFlag?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    chatroomname?: StringFieldUpdateOperationsInput | string
    addtime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    memberlist?: NullableStringFieldUpdateOperationsInput | string | null
    displayname?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomnick?: NullableStringFieldUpdateOperationsInput | string | null
    roomflag?: NullableIntFieldUpdateOperationsInput | number | null
    roomowner?: NullableStringFieldUpdateOperationsInput | string | null
    roomdata?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    isShowname?: NullableIntFieldUpdateOperationsInput | number | null
    selfDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomdataflag?: NullableIntFieldUpdateOperationsInput | number | null
    modifytime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatroomnotice?: NullableStringFieldUpdateOperationsInput | string | null
    xmlChatroomnotice?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomVersion?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomnoticeEditor?: NullableStringFieldUpdateOperationsInput | string | null
    chatroomnoticePublishTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatroomNoticeNew?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomLocalVersion?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatroomStatus?: NullableIntFieldUpdateOperationsInput | number | null
    memberCount?: NullableIntFieldUpdateOperationsInput | number | null
    chatroomfamilystatusmodifytime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    associateOpenIMRoomName?: NullableStringFieldUpdateOperationsInput | string | null
    openIMRoomMigrateStatus?: NullableIntFieldUpdateOperationsInput | number | null
    saveByteVersion?: NullableStringFieldUpdateOperationsInput | string | null
    handleByteVersion?: NullableStringFieldUpdateOperationsInput | string | null
    roomInfoDetailResByte?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    oldChatroomVersion?: NullableIntFieldUpdateOperationsInput | number | null
    localChatRoomWatchMembers?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    spamStatus?: NullableIntFieldUpdateOperationsInput | number | null
    compactFlag?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ImgFlagCreateInput = {
    username: string
    imgflag?: number | null
    lastupdatetime?: number | null
    reserved1?: string | null
    reserved2?: string | null
    reserved3?: number | null
    reserved4?: number | null
    updateflag?: number | null
  }

  export type ImgFlagUncheckedCreateInput = {
    username: string
    imgflag?: number | null
    lastupdatetime?: number | null
    reserved1?: string | null
    reserved2?: string | null
    reserved3?: number | null
    reserved4?: number | null
    updateflag?: number | null
  }

  export type ImgFlagUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    imgflag?: NullableIntFieldUpdateOperationsInput | number | null
    lastupdatetime?: NullableIntFieldUpdateOperationsInput | number | null
    reserved1?: NullableStringFieldUpdateOperationsInput | string | null
    reserved2?: NullableStringFieldUpdateOperationsInput | string | null
    reserved3?: NullableIntFieldUpdateOperationsInput | number | null
    reserved4?: NullableIntFieldUpdateOperationsInput | number | null
    updateflag?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImgFlagUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    imgflag?: NullableIntFieldUpdateOperationsInput | number | null
    lastupdatetime?: NullableIntFieldUpdateOperationsInput | number | null
    reserved1?: NullableStringFieldUpdateOperationsInput | string | null
    reserved2?: NullableStringFieldUpdateOperationsInput | string | null
    reserved3?: NullableIntFieldUpdateOperationsInput | number | null
    reserved4?: NullableIntFieldUpdateOperationsInput | number | null
    updateflag?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImgFlagCreateManyInput = {
    username: string
    imgflag?: number | null
    lastupdatetime?: number | null
    reserved1?: string | null
    reserved2?: string | null
    reserved3?: number | null
    reserved4?: number | null
    updateflag?: number | null
  }

  export type ImgFlagUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    imgflag?: NullableIntFieldUpdateOperationsInput | number | null
    lastupdatetime?: NullableIntFieldUpdateOperationsInput | number | null
    reserved1?: NullableStringFieldUpdateOperationsInput | string | null
    reserved2?: NullableStringFieldUpdateOperationsInput | string | null
    reserved3?: NullableIntFieldUpdateOperationsInput | number | null
    reserved4?: NullableIntFieldUpdateOperationsInput | number | null
    updateflag?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImgFlagUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    imgflag?: NullableIntFieldUpdateOperationsInput | number | null
    lastupdatetime?: NullableIntFieldUpdateOperationsInput | number | null
    reserved1?: NullableStringFieldUpdateOperationsInput | string | null
    reserved2?: NullableStringFieldUpdateOperationsInput | string | null
    reserved3?: NullableIntFieldUpdateOperationsInput | number | null
    reserved4?: NullableIntFieldUpdateOperationsInput | number | null
    updateflag?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmojiInfoDescCreateInput = {
    md5_lang: string
    md5?: string | null
    lang?: string | null
    desc?: string | null
    groupId?: string | null
    click_flag?: number | null
    download_flag?: number | null
  }

  export type EmojiInfoDescUncheckedCreateInput = {
    md5_lang: string
    md5?: string | null
    lang?: string | null
    desc?: string | null
    groupId?: string | null
    click_flag?: number | null
    download_flag?: number | null
  }

  export type EmojiInfoDescUpdateInput = {
    md5_lang?: StringFieldUpdateOperationsInput | string
    md5?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    click_flag?: NullableIntFieldUpdateOperationsInput | number | null
    download_flag?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmojiInfoDescUncheckedUpdateInput = {
    md5_lang?: StringFieldUpdateOperationsInput | string
    md5?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    click_flag?: NullableIntFieldUpdateOperationsInput | number | null
    download_flag?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmojiInfoDescCreateManyInput = {
    md5_lang: string
    md5?: string | null
    lang?: string | null
    desc?: string | null
    groupId?: string | null
    click_flag?: number | null
    download_flag?: number | null
  }

  export type EmojiInfoDescUpdateManyMutationInput = {
    md5_lang?: StringFieldUpdateOperationsInput | string
    md5?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    click_flag?: NullableIntFieldUpdateOperationsInput | number | null
    download_flag?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmojiInfoDescUncheckedUpdateManyInput = {
    md5_lang?: StringFieldUpdateOperationsInput | string
    md5?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    click_flag?: NullableIntFieldUpdateOperationsInput | number | null
    download_flag?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmojiInfoCreateInput = {
    md5: string
    svrid?: string | null
    catalog?: number | null
    type?: number | null
    size?: number | null
    start?: number | null
    state?: number | null
    name?: string | null
    content?: string | null
    reserved1?: string | null
    reserved2?: string | null
    reserved3?: number | null
    reserved4?: number | null
    app_id?: string | null
    groupId?: string | null
    lastUseTime?: bigint | number | null
    framesInfo?: string | null
    idx?: number | null
    temp?: number | null
    source?: number | null
    needupload?: number | null
    designerID?: string | null
    thumbUrl?: string | null
    cdnUrl?: string | null
    encrypturl?: string | null
    aeskey?: string | null
    width?: number | null
    height?: number | null
    externUrl?: string | null
    externMd5?: string | null
    activityid?: string | null
    tpurl?: string | null
    tpauthkey?: string | null
    wxamMd5?: string | null
    attachedText?: string | null
    captureStatus?: number | null
    attachedEmojiMD5?: Bytes | null
    imitateMd5?: string | null
    captureUploadErrCode?: number | null
    captureUploadCounter?: number | null
    captureEnterTime?: bigint | number | null
    lensId?: string | null
    attachTextColor?: string | null
    captureScene?: number | null
    attr?: string | null
    linkId?: string | null
    meanings?: string | null
    custom_meaning?: string | null
    emojiFlag?: bigint | number | null
  }

  export type EmojiInfoUncheckedCreateInput = {
    md5: string
    svrid?: string | null
    catalog?: number | null
    type?: number | null
    size?: number | null
    start?: number | null
    state?: number | null
    name?: string | null
    content?: string | null
    reserved1?: string | null
    reserved2?: string | null
    reserved3?: number | null
    reserved4?: number | null
    app_id?: string | null
    groupId?: string | null
    lastUseTime?: bigint | number | null
    framesInfo?: string | null
    idx?: number | null
    temp?: number | null
    source?: number | null
    needupload?: number | null
    designerID?: string | null
    thumbUrl?: string | null
    cdnUrl?: string | null
    encrypturl?: string | null
    aeskey?: string | null
    width?: number | null
    height?: number | null
    externUrl?: string | null
    externMd5?: string | null
    activityid?: string | null
    tpurl?: string | null
    tpauthkey?: string | null
    wxamMd5?: string | null
    attachedText?: string | null
    captureStatus?: number | null
    attachedEmojiMD5?: Bytes | null
    imitateMd5?: string | null
    captureUploadErrCode?: number | null
    captureUploadCounter?: number | null
    captureEnterTime?: bigint | number | null
    lensId?: string | null
    attachTextColor?: string | null
    captureScene?: number | null
    attr?: string | null
    linkId?: string | null
    meanings?: string | null
    custom_meaning?: string | null
    emojiFlag?: bigint | number | null
  }

  export type EmojiInfoUpdateInput = {
    md5?: StringFieldUpdateOperationsInput | string
    svrid?: NullableStringFieldUpdateOperationsInput | string | null
    catalog?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    start?: NullableIntFieldUpdateOperationsInput | number | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    reserved1?: NullableStringFieldUpdateOperationsInput | string | null
    reserved2?: NullableStringFieldUpdateOperationsInput | string | null
    reserved3?: NullableIntFieldUpdateOperationsInput | number | null
    reserved4?: NullableIntFieldUpdateOperationsInput | number | null
    app_id?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    lastUseTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    framesInfo?: NullableStringFieldUpdateOperationsInput | string | null
    idx?: NullableIntFieldUpdateOperationsInput | number | null
    temp?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableIntFieldUpdateOperationsInput | number | null
    needupload?: NullableIntFieldUpdateOperationsInput | number | null
    designerID?: NullableStringFieldUpdateOperationsInput | string | null
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cdnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    encrypturl?: NullableStringFieldUpdateOperationsInput | string | null
    aeskey?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    externUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externMd5?: NullableStringFieldUpdateOperationsInput | string | null
    activityid?: NullableStringFieldUpdateOperationsInput | string | null
    tpurl?: NullableStringFieldUpdateOperationsInput | string | null
    tpauthkey?: NullableStringFieldUpdateOperationsInput | string | null
    wxamMd5?: NullableStringFieldUpdateOperationsInput | string | null
    attachedText?: NullableStringFieldUpdateOperationsInput | string | null
    captureStatus?: NullableIntFieldUpdateOperationsInput | number | null
    attachedEmojiMD5?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    imitateMd5?: NullableStringFieldUpdateOperationsInput | string | null
    captureUploadErrCode?: NullableIntFieldUpdateOperationsInput | number | null
    captureUploadCounter?: NullableIntFieldUpdateOperationsInput | number | null
    captureEnterTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lensId?: NullableStringFieldUpdateOperationsInput | string | null
    attachTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    captureScene?: NullableIntFieldUpdateOperationsInput | number | null
    attr?: NullableStringFieldUpdateOperationsInput | string | null
    linkId?: NullableStringFieldUpdateOperationsInput | string | null
    meanings?: NullableStringFieldUpdateOperationsInput | string | null
    custom_meaning?: NullableStringFieldUpdateOperationsInput | string | null
    emojiFlag?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type EmojiInfoUncheckedUpdateInput = {
    md5?: StringFieldUpdateOperationsInput | string
    svrid?: NullableStringFieldUpdateOperationsInput | string | null
    catalog?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    start?: NullableIntFieldUpdateOperationsInput | number | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    reserved1?: NullableStringFieldUpdateOperationsInput | string | null
    reserved2?: NullableStringFieldUpdateOperationsInput | string | null
    reserved3?: NullableIntFieldUpdateOperationsInput | number | null
    reserved4?: NullableIntFieldUpdateOperationsInput | number | null
    app_id?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    lastUseTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    framesInfo?: NullableStringFieldUpdateOperationsInput | string | null
    idx?: NullableIntFieldUpdateOperationsInput | number | null
    temp?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableIntFieldUpdateOperationsInput | number | null
    needupload?: NullableIntFieldUpdateOperationsInput | number | null
    designerID?: NullableStringFieldUpdateOperationsInput | string | null
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cdnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    encrypturl?: NullableStringFieldUpdateOperationsInput | string | null
    aeskey?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    externUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externMd5?: NullableStringFieldUpdateOperationsInput | string | null
    activityid?: NullableStringFieldUpdateOperationsInput | string | null
    tpurl?: NullableStringFieldUpdateOperationsInput | string | null
    tpauthkey?: NullableStringFieldUpdateOperationsInput | string | null
    wxamMd5?: NullableStringFieldUpdateOperationsInput | string | null
    attachedText?: NullableStringFieldUpdateOperationsInput | string | null
    captureStatus?: NullableIntFieldUpdateOperationsInput | number | null
    attachedEmojiMD5?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    imitateMd5?: NullableStringFieldUpdateOperationsInput | string | null
    captureUploadErrCode?: NullableIntFieldUpdateOperationsInput | number | null
    captureUploadCounter?: NullableIntFieldUpdateOperationsInput | number | null
    captureEnterTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lensId?: NullableStringFieldUpdateOperationsInput | string | null
    attachTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    captureScene?: NullableIntFieldUpdateOperationsInput | number | null
    attr?: NullableStringFieldUpdateOperationsInput | string | null
    linkId?: NullableStringFieldUpdateOperationsInput | string | null
    meanings?: NullableStringFieldUpdateOperationsInput | string | null
    custom_meaning?: NullableStringFieldUpdateOperationsInput | string | null
    emojiFlag?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type EmojiInfoCreateManyInput = {
    md5: string
    svrid?: string | null
    catalog?: number | null
    type?: number | null
    size?: number | null
    start?: number | null
    state?: number | null
    name?: string | null
    content?: string | null
    reserved1?: string | null
    reserved2?: string | null
    reserved3?: number | null
    reserved4?: number | null
    app_id?: string | null
    groupId?: string | null
    lastUseTime?: bigint | number | null
    framesInfo?: string | null
    idx?: number | null
    temp?: number | null
    source?: number | null
    needupload?: number | null
    designerID?: string | null
    thumbUrl?: string | null
    cdnUrl?: string | null
    encrypturl?: string | null
    aeskey?: string | null
    width?: number | null
    height?: number | null
    externUrl?: string | null
    externMd5?: string | null
    activityid?: string | null
    tpurl?: string | null
    tpauthkey?: string | null
    wxamMd5?: string | null
    attachedText?: string | null
    captureStatus?: number | null
    attachedEmojiMD5?: Bytes | null
    imitateMd5?: string | null
    captureUploadErrCode?: number | null
    captureUploadCounter?: number | null
    captureEnterTime?: bigint | number | null
    lensId?: string | null
    attachTextColor?: string | null
    captureScene?: number | null
    attr?: string | null
    linkId?: string | null
    meanings?: string | null
    custom_meaning?: string | null
    emojiFlag?: bigint | number | null
  }

  export type EmojiInfoUpdateManyMutationInput = {
    md5?: StringFieldUpdateOperationsInput | string
    svrid?: NullableStringFieldUpdateOperationsInput | string | null
    catalog?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    start?: NullableIntFieldUpdateOperationsInput | number | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    reserved1?: NullableStringFieldUpdateOperationsInput | string | null
    reserved2?: NullableStringFieldUpdateOperationsInput | string | null
    reserved3?: NullableIntFieldUpdateOperationsInput | number | null
    reserved4?: NullableIntFieldUpdateOperationsInput | number | null
    app_id?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    lastUseTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    framesInfo?: NullableStringFieldUpdateOperationsInput | string | null
    idx?: NullableIntFieldUpdateOperationsInput | number | null
    temp?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableIntFieldUpdateOperationsInput | number | null
    needupload?: NullableIntFieldUpdateOperationsInput | number | null
    designerID?: NullableStringFieldUpdateOperationsInput | string | null
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cdnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    encrypturl?: NullableStringFieldUpdateOperationsInput | string | null
    aeskey?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    externUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externMd5?: NullableStringFieldUpdateOperationsInput | string | null
    activityid?: NullableStringFieldUpdateOperationsInput | string | null
    tpurl?: NullableStringFieldUpdateOperationsInput | string | null
    tpauthkey?: NullableStringFieldUpdateOperationsInput | string | null
    wxamMd5?: NullableStringFieldUpdateOperationsInput | string | null
    attachedText?: NullableStringFieldUpdateOperationsInput | string | null
    captureStatus?: NullableIntFieldUpdateOperationsInput | number | null
    attachedEmojiMD5?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    imitateMd5?: NullableStringFieldUpdateOperationsInput | string | null
    captureUploadErrCode?: NullableIntFieldUpdateOperationsInput | number | null
    captureUploadCounter?: NullableIntFieldUpdateOperationsInput | number | null
    captureEnterTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lensId?: NullableStringFieldUpdateOperationsInput | string | null
    attachTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    captureScene?: NullableIntFieldUpdateOperationsInput | number | null
    attr?: NullableStringFieldUpdateOperationsInput | string | null
    linkId?: NullableStringFieldUpdateOperationsInput | string | null
    meanings?: NullableStringFieldUpdateOperationsInput | string | null
    custom_meaning?: NullableStringFieldUpdateOperationsInput | string | null
    emojiFlag?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type EmojiInfoUncheckedUpdateManyInput = {
    md5?: StringFieldUpdateOperationsInput | string
    svrid?: NullableStringFieldUpdateOperationsInput | string | null
    catalog?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    start?: NullableIntFieldUpdateOperationsInput | number | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    reserved1?: NullableStringFieldUpdateOperationsInput | string | null
    reserved2?: NullableStringFieldUpdateOperationsInput | string | null
    reserved3?: NullableIntFieldUpdateOperationsInput | number | null
    reserved4?: NullableIntFieldUpdateOperationsInput | number | null
    app_id?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    lastUseTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    framesInfo?: NullableStringFieldUpdateOperationsInput | string | null
    idx?: NullableIntFieldUpdateOperationsInput | number | null
    temp?: NullableIntFieldUpdateOperationsInput | number | null
    source?: NullableIntFieldUpdateOperationsInput | number | null
    needupload?: NullableIntFieldUpdateOperationsInput | number | null
    designerID?: NullableStringFieldUpdateOperationsInput | string | null
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cdnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    encrypturl?: NullableStringFieldUpdateOperationsInput | string | null
    aeskey?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    externUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externMd5?: NullableStringFieldUpdateOperationsInput | string | null
    activityid?: NullableStringFieldUpdateOperationsInput | string | null
    tpurl?: NullableStringFieldUpdateOperationsInput | string | null
    tpauthkey?: NullableStringFieldUpdateOperationsInput | string | null
    wxamMd5?: NullableStringFieldUpdateOperationsInput | string | null
    attachedText?: NullableStringFieldUpdateOperationsInput | string | null
    captureStatus?: NullableIntFieldUpdateOperationsInput | number | null
    attachedEmojiMD5?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    imitateMd5?: NullableStringFieldUpdateOperationsInput | string | null
    captureUploadErrCode?: NullableIntFieldUpdateOperationsInput | number | null
    captureUploadCounter?: NullableIntFieldUpdateOperationsInput | number | null
    captureEnterTime?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    lensId?: NullableStringFieldUpdateOperationsInput | string | null
    attachTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    captureScene?: NullableIntFieldUpdateOperationsInput | number | null
    attr?: NullableStringFieldUpdateOperationsInput | string | null
    linkId?: NullableStringFieldUpdateOperationsInput | string | null
    meanings?: NullableStringFieldUpdateOperationsInput | string | null
    custom_meaning?: NullableStringFieldUpdateOperationsInput | string | null
    emojiFlag?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ImgInfo2CreateInput = {
    id: number
    msgSvrId?: bigint | number | null
    offset?: number | null
    totalLen?: number | null
    bigImgPath?: string | null
    thumbImgPath?: string | null
    createtime?: number | null
    msglocalid?: number | null
    status?: number | null
    nettimes?: number | null
    reserved1?: number | null
    reserved2?: number | null
    reserved3?: string | null
    reserved4?: string | null
    hashdthumb?: number | null
    iscomplete?: number | null
    origImgMD5?: string | null
    compressType?: number | null
    midImgPath?: string | null
    forwardType?: number | null
    hevcPath?: string | null
    sendImgType?: number | null
    originSourceMd5?: string | null
    msgTalker?: string | null
  }

  export type ImgInfo2UncheckedCreateInput = {
    id: number
    msgSvrId?: bigint | number | null
    offset?: number | null
    totalLen?: number | null
    bigImgPath?: string | null
    thumbImgPath?: string | null
    createtime?: number | null
    msglocalid?: number | null
    status?: number | null
    nettimes?: number | null
    reserved1?: number | null
    reserved2?: number | null
    reserved3?: string | null
    reserved4?: string | null
    hashdthumb?: number | null
    iscomplete?: number | null
    origImgMD5?: string | null
    compressType?: number | null
    midImgPath?: string | null
    forwardType?: number | null
    hevcPath?: string | null
    sendImgType?: number | null
    originSourceMd5?: string | null
    msgTalker?: string | null
  }

  export type ImgInfo2UpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    msgSvrId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    offset?: NullableIntFieldUpdateOperationsInput | number | null
    totalLen?: NullableIntFieldUpdateOperationsInput | number | null
    bigImgPath?: NullableStringFieldUpdateOperationsInput | string | null
    thumbImgPath?: NullableStringFieldUpdateOperationsInput | string | null
    createtime?: NullableIntFieldUpdateOperationsInput | number | null
    msglocalid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    nettimes?: NullableIntFieldUpdateOperationsInput | number | null
    reserved1?: NullableIntFieldUpdateOperationsInput | number | null
    reserved2?: NullableIntFieldUpdateOperationsInput | number | null
    reserved3?: NullableStringFieldUpdateOperationsInput | string | null
    reserved4?: NullableStringFieldUpdateOperationsInput | string | null
    hashdthumb?: NullableIntFieldUpdateOperationsInput | number | null
    iscomplete?: NullableIntFieldUpdateOperationsInput | number | null
    origImgMD5?: NullableStringFieldUpdateOperationsInput | string | null
    compressType?: NullableIntFieldUpdateOperationsInput | number | null
    midImgPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardType?: NullableIntFieldUpdateOperationsInput | number | null
    hevcPath?: NullableStringFieldUpdateOperationsInput | string | null
    sendImgType?: NullableIntFieldUpdateOperationsInput | number | null
    originSourceMd5?: NullableStringFieldUpdateOperationsInput | string | null
    msgTalker?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImgInfo2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    msgSvrId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    offset?: NullableIntFieldUpdateOperationsInput | number | null
    totalLen?: NullableIntFieldUpdateOperationsInput | number | null
    bigImgPath?: NullableStringFieldUpdateOperationsInput | string | null
    thumbImgPath?: NullableStringFieldUpdateOperationsInput | string | null
    createtime?: NullableIntFieldUpdateOperationsInput | number | null
    msglocalid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    nettimes?: NullableIntFieldUpdateOperationsInput | number | null
    reserved1?: NullableIntFieldUpdateOperationsInput | number | null
    reserved2?: NullableIntFieldUpdateOperationsInput | number | null
    reserved3?: NullableStringFieldUpdateOperationsInput | string | null
    reserved4?: NullableStringFieldUpdateOperationsInput | string | null
    hashdthumb?: NullableIntFieldUpdateOperationsInput | number | null
    iscomplete?: NullableIntFieldUpdateOperationsInput | number | null
    origImgMD5?: NullableStringFieldUpdateOperationsInput | string | null
    compressType?: NullableIntFieldUpdateOperationsInput | number | null
    midImgPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardType?: NullableIntFieldUpdateOperationsInput | number | null
    hevcPath?: NullableStringFieldUpdateOperationsInput | string | null
    sendImgType?: NullableIntFieldUpdateOperationsInput | number | null
    originSourceMd5?: NullableStringFieldUpdateOperationsInput | string | null
    msgTalker?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImgInfo2CreateManyInput = {
    id: number
    msgSvrId?: bigint | number | null
    offset?: number | null
    totalLen?: number | null
    bigImgPath?: string | null
    thumbImgPath?: string | null
    createtime?: number | null
    msglocalid?: number | null
    status?: number | null
    nettimes?: number | null
    reserved1?: number | null
    reserved2?: number | null
    reserved3?: string | null
    reserved4?: string | null
    hashdthumb?: number | null
    iscomplete?: number | null
    origImgMD5?: string | null
    compressType?: number | null
    midImgPath?: string | null
    forwardType?: number | null
    hevcPath?: string | null
    sendImgType?: number | null
    originSourceMd5?: string | null
    msgTalker?: string | null
  }

  export type ImgInfo2UpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    msgSvrId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    offset?: NullableIntFieldUpdateOperationsInput | number | null
    totalLen?: NullableIntFieldUpdateOperationsInput | number | null
    bigImgPath?: NullableStringFieldUpdateOperationsInput | string | null
    thumbImgPath?: NullableStringFieldUpdateOperationsInput | string | null
    createtime?: NullableIntFieldUpdateOperationsInput | number | null
    msglocalid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    nettimes?: NullableIntFieldUpdateOperationsInput | number | null
    reserved1?: NullableIntFieldUpdateOperationsInput | number | null
    reserved2?: NullableIntFieldUpdateOperationsInput | number | null
    reserved3?: NullableStringFieldUpdateOperationsInput | string | null
    reserved4?: NullableStringFieldUpdateOperationsInput | string | null
    hashdthumb?: NullableIntFieldUpdateOperationsInput | number | null
    iscomplete?: NullableIntFieldUpdateOperationsInput | number | null
    origImgMD5?: NullableStringFieldUpdateOperationsInput | string | null
    compressType?: NullableIntFieldUpdateOperationsInput | number | null
    midImgPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardType?: NullableIntFieldUpdateOperationsInput | number | null
    hevcPath?: NullableStringFieldUpdateOperationsInput | string | null
    sendImgType?: NullableIntFieldUpdateOperationsInput | number | null
    originSourceMd5?: NullableStringFieldUpdateOperationsInput | string | null
    msgTalker?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImgInfo2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    msgSvrId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    offset?: NullableIntFieldUpdateOperationsInput | number | null
    totalLen?: NullableIntFieldUpdateOperationsInput | number | null
    bigImgPath?: NullableStringFieldUpdateOperationsInput | string | null
    thumbImgPath?: NullableStringFieldUpdateOperationsInput | string | null
    createtime?: NullableIntFieldUpdateOperationsInput | number | null
    msglocalid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    nettimes?: NullableIntFieldUpdateOperationsInput | number | null
    reserved1?: NullableIntFieldUpdateOperationsInput | number | null
    reserved2?: NullableIntFieldUpdateOperationsInput | number | null
    reserved3?: NullableStringFieldUpdateOperationsInput | string | null
    reserved4?: NullableStringFieldUpdateOperationsInput | string | null
    hashdthumb?: NullableIntFieldUpdateOperationsInput | number | null
    iscomplete?: NullableIntFieldUpdateOperationsInput | number | null
    origImgMD5?: NullableStringFieldUpdateOperationsInput | string | null
    compressType?: NullableIntFieldUpdateOperationsInput | number | null
    midImgPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardType?: NullableIntFieldUpdateOperationsInput | number | null
    hevcPath?: NullableStringFieldUpdateOperationsInput | string | null
    sendImgType?: NullableIntFieldUpdateOperationsInput | number | null
    originSourceMd5?: NullableStringFieldUpdateOperationsInput | string | null
    msgTalker?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RContactCountOrderByAggregateInput = {
    username?: SortOrder
    alias?: SortOrder
    conRemark?: SortOrder
    domainList?: SortOrder
    nickname?: SortOrder
    pyInitial?: SortOrder
    quanPin?: SortOrder
    showHead?: SortOrder
    type?: SortOrder
    uiType?: SortOrder
    weiboFlag?: SortOrder
    weiboNickname?: SortOrder
    conRemarkPYFull?: SortOrder
    conRemarkPYShort?: SortOrder
    lvbuff?: SortOrder
    verifyFlag?: SortOrder
    encryptUsername?: SortOrder
    chatroomFlag?: SortOrder
    deleteFlag?: SortOrder
    contactLabelIds?: SortOrder
    descWordingId?: SortOrder
    openImAppid?: SortOrder
    sourceExtInfo?: SortOrder
    ticket?: SortOrder
    usernameFlag?: SortOrder
    contactExtra?: SortOrder
    createTime?: SortOrder
  }

  export type RContactAvgOrderByAggregateInput = {
    showHead?: SortOrder
    type?: SortOrder
    uiType?: SortOrder
    weiboFlag?: SortOrder
    verifyFlag?: SortOrder
    chatroomFlag?: SortOrder
    deleteFlag?: SortOrder
    usernameFlag?: SortOrder
    createTime?: SortOrder
  }

  export type RContactMaxOrderByAggregateInput = {
    username?: SortOrder
    alias?: SortOrder
    conRemark?: SortOrder
    domainList?: SortOrder
    nickname?: SortOrder
    pyInitial?: SortOrder
    quanPin?: SortOrder
    showHead?: SortOrder
    type?: SortOrder
    uiType?: SortOrder
    weiboFlag?: SortOrder
    weiboNickname?: SortOrder
    conRemarkPYFull?: SortOrder
    conRemarkPYShort?: SortOrder
    lvbuff?: SortOrder
    verifyFlag?: SortOrder
    encryptUsername?: SortOrder
    chatroomFlag?: SortOrder
    deleteFlag?: SortOrder
    contactLabelIds?: SortOrder
    descWordingId?: SortOrder
    openImAppid?: SortOrder
    sourceExtInfo?: SortOrder
    ticket?: SortOrder
    usernameFlag?: SortOrder
    contactExtra?: SortOrder
    createTime?: SortOrder
  }

  export type RContactMinOrderByAggregateInput = {
    username?: SortOrder
    alias?: SortOrder
    conRemark?: SortOrder
    domainList?: SortOrder
    nickname?: SortOrder
    pyInitial?: SortOrder
    quanPin?: SortOrder
    showHead?: SortOrder
    type?: SortOrder
    uiType?: SortOrder
    weiboFlag?: SortOrder
    weiboNickname?: SortOrder
    conRemarkPYFull?: SortOrder
    conRemarkPYShort?: SortOrder
    lvbuff?: SortOrder
    verifyFlag?: SortOrder
    encryptUsername?: SortOrder
    chatroomFlag?: SortOrder
    deleteFlag?: SortOrder
    contactLabelIds?: SortOrder
    descWordingId?: SortOrder
    openImAppid?: SortOrder
    sourceExtInfo?: SortOrder
    ticket?: SortOrder
    usernameFlag?: SortOrder
    contactExtra?: SortOrder
    createTime?: SortOrder
  }

  export type RContactSumOrderByAggregateInput = {
    showHead?: SortOrder
    type?: SortOrder
    uiType?: SortOrder
    weiboFlag?: SortOrder
    verifyFlag?: SortOrder
    chatroomFlag?: SortOrder
    deleteFlag?: SortOrder
    usernameFlag?: SortOrder
    createTime?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type MessageCountOrderByAggregateInput = {
    msgId?: SortOrder
    msgSvrId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    isSend?: SortOrder
    isShowTimer?: SortOrder
    createTime?: SortOrder
    talker?: SortOrder
    content?: SortOrder
    imgPath?: SortOrder
    reserved?: SortOrder
    lvbuffer?: SortOrder
    transContent?: SortOrder
    transBrandWording?: SortOrder
    talkerId?: SortOrder
    bizClientMsgId?: SortOrder
    bizChatId?: SortOrder
    bizChatUserId?: SortOrder
    msgSeq?: SortOrder
    flag?: SortOrder
    solitaireFoldInfo?: SortOrder
    historyId?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    msgId?: SortOrder
    msgSvrId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    isSend?: SortOrder
    isShowTimer?: SortOrder
    createTime?: SortOrder
    talkerId?: SortOrder
    bizChatId?: SortOrder
    msgSeq?: SortOrder
    flag?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    msgId?: SortOrder
    msgSvrId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    isSend?: SortOrder
    isShowTimer?: SortOrder
    createTime?: SortOrder
    talker?: SortOrder
    content?: SortOrder
    imgPath?: SortOrder
    reserved?: SortOrder
    lvbuffer?: SortOrder
    transContent?: SortOrder
    transBrandWording?: SortOrder
    talkerId?: SortOrder
    bizClientMsgId?: SortOrder
    bizChatId?: SortOrder
    bizChatUserId?: SortOrder
    msgSeq?: SortOrder
    flag?: SortOrder
    solitaireFoldInfo?: SortOrder
    historyId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    msgId?: SortOrder
    msgSvrId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    isSend?: SortOrder
    isShowTimer?: SortOrder
    createTime?: SortOrder
    talker?: SortOrder
    content?: SortOrder
    imgPath?: SortOrder
    reserved?: SortOrder
    lvbuffer?: SortOrder
    transContent?: SortOrder
    transBrandWording?: SortOrder
    talkerId?: SortOrder
    bizClientMsgId?: SortOrder
    bizChatId?: SortOrder
    bizChatUserId?: SortOrder
    msgSeq?: SortOrder
    flag?: SortOrder
    solitaireFoldInfo?: SortOrder
    historyId?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    msgId?: SortOrder
    msgSvrId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    isSend?: SortOrder
    isShowTimer?: SortOrder
    createTime?: SortOrder
    talkerId?: SortOrder
    bizChatId?: SortOrder
    msgSeq?: SortOrder
    flag?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type ChatRoomCountOrderByAggregateInput = {
    chatroomname?: SortOrder
    addtime?: SortOrder
    memberlist?: SortOrder
    displayname?: SortOrder
    chatroomnick?: SortOrder
    roomflag?: SortOrder
    roomowner?: SortOrder
    roomdata?: SortOrder
    isShowname?: SortOrder
    selfDisplayName?: SortOrder
    style?: SortOrder
    chatroomdataflag?: SortOrder
    modifytime?: SortOrder
    chatroomnotice?: SortOrder
    xmlChatroomnotice?: SortOrder
    chatroomVersion?: SortOrder
    chatroomnoticeEditor?: SortOrder
    chatroomnoticePublishTime?: SortOrder
    chatroomNoticeNew?: SortOrder
    chatroomLocalVersion?: SortOrder
    chatroomStatus?: SortOrder
    memberCount?: SortOrder
    chatroomfamilystatusmodifytime?: SortOrder
    associateOpenIMRoomName?: SortOrder
    openIMRoomMigrateStatus?: SortOrder
    saveByteVersion?: SortOrder
    handleByteVersion?: SortOrder
    roomInfoDetailResByte?: SortOrder
    oldChatroomVersion?: SortOrder
    localChatRoomWatchMembers?: SortOrder
    spamStatus?: SortOrder
    compactFlag?: SortOrder
  }

  export type ChatRoomAvgOrderByAggregateInput = {
    addtime?: SortOrder
    roomflag?: SortOrder
    isShowname?: SortOrder
    style?: SortOrder
    chatroomdataflag?: SortOrder
    modifytime?: SortOrder
    chatroomVersion?: SortOrder
    chatroomnoticePublishTime?: SortOrder
    chatroomNoticeNew?: SortOrder
    chatroomLocalVersion?: SortOrder
    chatroomStatus?: SortOrder
    memberCount?: SortOrder
    chatroomfamilystatusmodifytime?: SortOrder
    openIMRoomMigrateStatus?: SortOrder
    oldChatroomVersion?: SortOrder
    spamStatus?: SortOrder
    compactFlag?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    chatroomname?: SortOrder
    addtime?: SortOrder
    memberlist?: SortOrder
    displayname?: SortOrder
    chatroomnick?: SortOrder
    roomflag?: SortOrder
    roomowner?: SortOrder
    roomdata?: SortOrder
    isShowname?: SortOrder
    selfDisplayName?: SortOrder
    style?: SortOrder
    chatroomdataflag?: SortOrder
    modifytime?: SortOrder
    chatroomnotice?: SortOrder
    xmlChatroomnotice?: SortOrder
    chatroomVersion?: SortOrder
    chatroomnoticeEditor?: SortOrder
    chatroomnoticePublishTime?: SortOrder
    chatroomNoticeNew?: SortOrder
    chatroomLocalVersion?: SortOrder
    chatroomStatus?: SortOrder
    memberCount?: SortOrder
    chatroomfamilystatusmodifytime?: SortOrder
    associateOpenIMRoomName?: SortOrder
    openIMRoomMigrateStatus?: SortOrder
    saveByteVersion?: SortOrder
    handleByteVersion?: SortOrder
    roomInfoDetailResByte?: SortOrder
    oldChatroomVersion?: SortOrder
    localChatRoomWatchMembers?: SortOrder
    spamStatus?: SortOrder
    compactFlag?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    chatroomname?: SortOrder
    addtime?: SortOrder
    memberlist?: SortOrder
    displayname?: SortOrder
    chatroomnick?: SortOrder
    roomflag?: SortOrder
    roomowner?: SortOrder
    roomdata?: SortOrder
    isShowname?: SortOrder
    selfDisplayName?: SortOrder
    style?: SortOrder
    chatroomdataflag?: SortOrder
    modifytime?: SortOrder
    chatroomnotice?: SortOrder
    xmlChatroomnotice?: SortOrder
    chatroomVersion?: SortOrder
    chatroomnoticeEditor?: SortOrder
    chatroomnoticePublishTime?: SortOrder
    chatroomNoticeNew?: SortOrder
    chatroomLocalVersion?: SortOrder
    chatroomStatus?: SortOrder
    memberCount?: SortOrder
    chatroomfamilystatusmodifytime?: SortOrder
    associateOpenIMRoomName?: SortOrder
    openIMRoomMigrateStatus?: SortOrder
    saveByteVersion?: SortOrder
    handleByteVersion?: SortOrder
    roomInfoDetailResByte?: SortOrder
    oldChatroomVersion?: SortOrder
    localChatRoomWatchMembers?: SortOrder
    spamStatus?: SortOrder
    compactFlag?: SortOrder
  }

  export type ChatRoomSumOrderByAggregateInput = {
    addtime?: SortOrder
    roomflag?: SortOrder
    isShowname?: SortOrder
    style?: SortOrder
    chatroomdataflag?: SortOrder
    modifytime?: SortOrder
    chatroomVersion?: SortOrder
    chatroomnoticePublishTime?: SortOrder
    chatroomNoticeNew?: SortOrder
    chatroomLocalVersion?: SortOrder
    chatroomStatus?: SortOrder
    memberCount?: SortOrder
    chatroomfamilystatusmodifytime?: SortOrder
    openIMRoomMigrateStatus?: SortOrder
    oldChatroomVersion?: SortOrder
    spamStatus?: SortOrder
    compactFlag?: SortOrder
  }

  export type ImgFlagCountOrderByAggregateInput = {
    username?: SortOrder
    imgflag?: SortOrder
    lastupdatetime?: SortOrder
    reserved1?: SortOrder
    reserved2?: SortOrder
    reserved3?: SortOrder
    reserved4?: SortOrder
    updateflag?: SortOrder
  }

  export type ImgFlagAvgOrderByAggregateInput = {
    imgflag?: SortOrder
    lastupdatetime?: SortOrder
    reserved3?: SortOrder
    reserved4?: SortOrder
    updateflag?: SortOrder
  }

  export type ImgFlagMaxOrderByAggregateInput = {
    username?: SortOrder
    imgflag?: SortOrder
    lastupdatetime?: SortOrder
    reserved1?: SortOrder
    reserved2?: SortOrder
    reserved3?: SortOrder
    reserved4?: SortOrder
    updateflag?: SortOrder
  }

  export type ImgFlagMinOrderByAggregateInput = {
    username?: SortOrder
    imgflag?: SortOrder
    lastupdatetime?: SortOrder
    reserved1?: SortOrder
    reserved2?: SortOrder
    reserved3?: SortOrder
    reserved4?: SortOrder
    updateflag?: SortOrder
  }

  export type ImgFlagSumOrderByAggregateInput = {
    imgflag?: SortOrder
    lastupdatetime?: SortOrder
    reserved3?: SortOrder
    reserved4?: SortOrder
    updateflag?: SortOrder
  }

  export type EmojiInfoDescCountOrderByAggregateInput = {
    md5_lang?: SortOrder
    md5?: SortOrder
    lang?: SortOrder
    desc?: SortOrder
    groupId?: SortOrder
    click_flag?: SortOrder
    download_flag?: SortOrder
  }

  export type EmojiInfoDescAvgOrderByAggregateInput = {
    click_flag?: SortOrder
    download_flag?: SortOrder
  }

  export type EmojiInfoDescMaxOrderByAggregateInput = {
    md5_lang?: SortOrder
    md5?: SortOrder
    lang?: SortOrder
    desc?: SortOrder
    groupId?: SortOrder
    click_flag?: SortOrder
    download_flag?: SortOrder
  }

  export type EmojiInfoDescMinOrderByAggregateInput = {
    md5_lang?: SortOrder
    md5?: SortOrder
    lang?: SortOrder
    desc?: SortOrder
    groupId?: SortOrder
    click_flag?: SortOrder
    download_flag?: SortOrder
  }

  export type EmojiInfoDescSumOrderByAggregateInput = {
    click_flag?: SortOrder
    download_flag?: SortOrder
  }

  export type EmojiInfoCountOrderByAggregateInput = {
    md5?: SortOrder
    svrid?: SortOrder
    catalog?: SortOrder
    type?: SortOrder
    size?: SortOrder
    start?: SortOrder
    state?: SortOrder
    name?: SortOrder
    content?: SortOrder
    reserved1?: SortOrder
    reserved2?: SortOrder
    reserved3?: SortOrder
    reserved4?: SortOrder
    app_id?: SortOrder
    groupId?: SortOrder
    lastUseTime?: SortOrder
    framesInfo?: SortOrder
    idx?: SortOrder
    temp?: SortOrder
    source?: SortOrder
    needupload?: SortOrder
    designerID?: SortOrder
    thumbUrl?: SortOrder
    cdnUrl?: SortOrder
    encrypturl?: SortOrder
    aeskey?: SortOrder
    width?: SortOrder
    height?: SortOrder
    externUrl?: SortOrder
    externMd5?: SortOrder
    activityid?: SortOrder
    tpurl?: SortOrder
    tpauthkey?: SortOrder
    wxamMd5?: SortOrder
    attachedText?: SortOrder
    captureStatus?: SortOrder
    attachedEmojiMD5?: SortOrder
    imitateMd5?: SortOrder
    captureUploadErrCode?: SortOrder
    captureUploadCounter?: SortOrder
    captureEnterTime?: SortOrder
    lensId?: SortOrder
    attachTextColor?: SortOrder
    captureScene?: SortOrder
    attr?: SortOrder
    linkId?: SortOrder
    meanings?: SortOrder
    custom_meaning?: SortOrder
    emojiFlag?: SortOrder
  }

  export type EmojiInfoAvgOrderByAggregateInput = {
    catalog?: SortOrder
    type?: SortOrder
    size?: SortOrder
    start?: SortOrder
    state?: SortOrder
    reserved3?: SortOrder
    reserved4?: SortOrder
    lastUseTime?: SortOrder
    idx?: SortOrder
    temp?: SortOrder
    source?: SortOrder
    needupload?: SortOrder
    width?: SortOrder
    height?: SortOrder
    captureStatus?: SortOrder
    captureUploadErrCode?: SortOrder
    captureUploadCounter?: SortOrder
    captureEnterTime?: SortOrder
    captureScene?: SortOrder
    emojiFlag?: SortOrder
  }

  export type EmojiInfoMaxOrderByAggregateInput = {
    md5?: SortOrder
    svrid?: SortOrder
    catalog?: SortOrder
    type?: SortOrder
    size?: SortOrder
    start?: SortOrder
    state?: SortOrder
    name?: SortOrder
    content?: SortOrder
    reserved1?: SortOrder
    reserved2?: SortOrder
    reserved3?: SortOrder
    reserved4?: SortOrder
    app_id?: SortOrder
    groupId?: SortOrder
    lastUseTime?: SortOrder
    framesInfo?: SortOrder
    idx?: SortOrder
    temp?: SortOrder
    source?: SortOrder
    needupload?: SortOrder
    designerID?: SortOrder
    thumbUrl?: SortOrder
    cdnUrl?: SortOrder
    encrypturl?: SortOrder
    aeskey?: SortOrder
    width?: SortOrder
    height?: SortOrder
    externUrl?: SortOrder
    externMd5?: SortOrder
    activityid?: SortOrder
    tpurl?: SortOrder
    tpauthkey?: SortOrder
    wxamMd5?: SortOrder
    attachedText?: SortOrder
    captureStatus?: SortOrder
    attachedEmojiMD5?: SortOrder
    imitateMd5?: SortOrder
    captureUploadErrCode?: SortOrder
    captureUploadCounter?: SortOrder
    captureEnterTime?: SortOrder
    lensId?: SortOrder
    attachTextColor?: SortOrder
    captureScene?: SortOrder
    attr?: SortOrder
    linkId?: SortOrder
    meanings?: SortOrder
    custom_meaning?: SortOrder
    emojiFlag?: SortOrder
  }

  export type EmojiInfoMinOrderByAggregateInput = {
    md5?: SortOrder
    svrid?: SortOrder
    catalog?: SortOrder
    type?: SortOrder
    size?: SortOrder
    start?: SortOrder
    state?: SortOrder
    name?: SortOrder
    content?: SortOrder
    reserved1?: SortOrder
    reserved2?: SortOrder
    reserved3?: SortOrder
    reserved4?: SortOrder
    app_id?: SortOrder
    groupId?: SortOrder
    lastUseTime?: SortOrder
    framesInfo?: SortOrder
    idx?: SortOrder
    temp?: SortOrder
    source?: SortOrder
    needupload?: SortOrder
    designerID?: SortOrder
    thumbUrl?: SortOrder
    cdnUrl?: SortOrder
    encrypturl?: SortOrder
    aeskey?: SortOrder
    width?: SortOrder
    height?: SortOrder
    externUrl?: SortOrder
    externMd5?: SortOrder
    activityid?: SortOrder
    tpurl?: SortOrder
    tpauthkey?: SortOrder
    wxamMd5?: SortOrder
    attachedText?: SortOrder
    captureStatus?: SortOrder
    attachedEmojiMD5?: SortOrder
    imitateMd5?: SortOrder
    captureUploadErrCode?: SortOrder
    captureUploadCounter?: SortOrder
    captureEnterTime?: SortOrder
    lensId?: SortOrder
    attachTextColor?: SortOrder
    captureScene?: SortOrder
    attr?: SortOrder
    linkId?: SortOrder
    meanings?: SortOrder
    custom_meaning?: SortOrder
    emojiFlag?: SortOrder
  }

  export type EmojiInfoSumOrderByAggregateInput = {
    catalog?: SortOrder
    type?: SortOrder
    size?: SortOrder
    start?: SortOrder
    state?: SortOrder
    reserved3?: SortOrder
    reserved4?: SortOrder
    lastUseTime?: SortOrder
    idx?: SortOrder
    temp?: SortOrder
    source?: SortOrder
    needupload?: SortOrder
    width?: SortOrder
    height?: SortOrder
    captureStatus?: SortOrder
    captureUploadErrCode?: SortOrder
    captureUploadCounter?: SortOrder
    captureEnterTime?: SortOrder
    captureScene?: SortOrder
    emojiFlag?: SortOrder
  }

  export type ImgInfo2CountOrderByAggregateInput = {
    id?: SortOrder
    msgSvrId?: SortOrder
    offset?: SortOrder
    totalLen?: SortOrder
    bigImgPath?: SortOrder
    thumbImgPath?: SortOrder
    createtime?: SortOrder
    msglocalid?: SortOrder
    status?: SortOrder
    nettimes?: SortOrder
    reserved1?: SortOrder
    reserved2?: SortOrder
    reserved3?: SortOrder
    reserved4?: SortOrder
    hashdthumb?: SortOrder
    iscomplete?: SortOrder
    origImgMD5?: SortOrder
    compressType?: SortOrder
    midImgPath?: SortOrder
    forwardType?: SortOrder
    hevcPath?: SortOrder
    sendImgType?: SortOrder
    originSourceMd5?: SortOrder
    msgTalker?: SortOrder
  }

  export type ImgInfo2AvgOrderByAggregateInput = {
    id?: SortOrder
    msgSvrId?: SortOrder
    offset?: SortOrder
    totalLen?: SortOrder
    createtime?: SortOrder
    msglocalid?: SortOrder
    status?: SortOrder
    nettimes?: SortOrder
    reserved1?: SortOrder
    reserved2?: SortOrder
    hashdthumb?: SortOrder
    iscomplete?: SortOrder
    compressType?: SortOrder
    forwardType?: SortOrder
    sendImgType?: SortOrder
  }

  export type ImgInfo2MaxOrderByAggregateInput = {
    id?: SortOrder
    msgSvrId?: SortOrder
    offset?: SortOrder
    totalLen?: SortOrder
    bigImgPath?: SortOrder
    thumbImgPath?: SortOrder
    createtime?: SortOrder
    msglocalid?: SortOrder
    status?: SortOrder
    nettimes?: SortOrder
    reserved1?: SortOrder
    reserved2?: SortOrder
    reserved3?: SortOrder
    reserved4?: SortOrder
    hashdthumb?: SortOrder
    iscomplete?: SortOrder
    origImgMD5?: SortOrder
    compressType?: SortOrder
    midImgPath?: SortOrder
    forwardType?: SortOrder
    hevcPath?: SortOrder
    sendImgType?: SortOrder
    originSourceMd5?: SortOrder
    msgTalker?: SortOrder
  }

  export type ImgInfo2MinOrderByAggregateInput = {
    id?: SortOrder
    msgSvrId?: SortOrder
    offset?: SortOrder
    totalLen?: SortOrder
    bigImgPath?: SortOrder
    thumbImgPath?: SortOrder
    createtime?: SortOrder
    msglocalid?: SortOrder
    status?: SortOrder
    nettimes?: SortOrder
    reserved1?: SortOrder
    reserved2?: SortOrder
    reserved3?: SortOrder
    reserved4?: SortOrder
    hashdthumb?: SortOrder
    iscomplete?: SortOrder
    origImgMD5?: SortOrder
    compressType?: SortOrder
    midImgPath?: SortOrder
    forwardType?: SortOrder
    hevcPath?: SortOrder
    sendImgType?: SortOrder
    originSourceMd5?: SortOrder
    msgTalker?: SortOrder
  }

  export type ImgInfo2SumOrderByAggregateInput = {
    id?: SortOrder
    msgSvrId?: SortOrder
    offset?: SortOrder
    totalLen?: SortOrder
    createtime?: SortOrder
    msglocalid?: SortOrder
    status?: SortOrder
    nettimes?: SortOrder
    reserved1?: SortOrder
    reserved2?: SortOrder
    hashdthumb?: SortOrder
    iscomplete?: SortOrder
    compressType?: SortOrder
    forwardType?: SortOrder
    sendImgType?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Bytes | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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