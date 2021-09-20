import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddOrderInput = {
  bill_id: Scalars['Int'];
  item_id: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type Bills = {
  __typename?: 'Bills';
  bill_id: Scalars['ID'];
  table_no: Scalars['Float'];
  netAmount: Scalars['Float'];
  ownerId: Scalars['Float'];
  orders: Array<Orders>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  firstThreeOrders?: Maybe<Array<Orders>>;
};

export type Category = {
  __typename?: 'Category';
  category_id: Scalars['Float'];
  name: Scalars['String'];
  items: Array<Item>;
};

export type ChangePasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type CreateItemInput = {
  name: Scalars['String'];
  rate: Scalars['Float'];
  category_id: Scalars['Int'];
};

export type Item = {
  __typename?: 'Item';
  item_id: Scalars['ID'];
  name: Scalars['String'];
  rate: Scalars['Float'];
  category_id: Scalars['Float'];
  ownerId: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  category_name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: User;
  login?: Maybe<User>;
  confirmUser: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword?: Maybe<User>;
  logout: Scalars['Boolean'];
  addItem: Item;
  updateItem?: Maybe<Item>;
  deleteItem: Scalars['Boolean'];
  createBill: Bills;
  deleteBill: Scalars['Boolean'];
  settleBill: Scalars['Boolean'];
  addOrder: Scalars['Boolean'];
  updateOrder: Scalars['Boolean'];
  deleteOrder: Scalars['Boolean'];
  createCategory: Category;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationConfirmUserArgs = {
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationAddItemArgs = {
  input: CreateItemInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationDeleteItemArgs = {
  id: Scalars['Int'];
};


export type MutationCreateBillArgs = {
  table_no: Scalars['Int'];
};


export type MutationDeleteBillArgs = {
  bill_id: Scalars['Int'];
};


export type MutationSettleBillArgs = {
  bill_id: Scalars['Int'];
};


export type MutationAddOrderArgs = {
  input: AddOrderInput;
};


export type MutationUpdateOrderArgs = {
  input: AddOrderInput;
};


export type MutationDeleteOrderArgs = {
  item_id: Scalars['Int'];
  bill_id: Scalars['Int'];
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String'];
};

export type Orders = {
  __typename?: 'Orders';
  item_id: Scalars['Float'];
  bill_id: Scalars['Float'];
  owner_id: Scalars['Float'];
  quantity: Scalars['Float'];
  total: Scalars['Float'];
  itemName: Scalars['String'];
  itemRate: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  helloWorld: Scalars['String'];
  me?: Maybe<User>;
  isLogged: Scalars['Boolean'];
  items: Array<Item>;
  getBill?: Maybe<Bills>;
  getUnsettledBills?: Maybe<Array<Bills>>;
  categories: Array<Category>;
};


export type QueryItemsArgs = {
  search?: Maybe<Scalars['String']>;
};


export type QueryGetBillArgs = {
  bill_id: Scalars['Int'];
};

export type RegisterInput = {
  password: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type UpdateItemInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  rate: Scalars['Float'];
  category_id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  user_id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type AddItemMutationVariables = Exact<{
  name: Scalars['String'];
  rate: Scalars['Float'];
  category_id: Scalars['Int'];
}>;


export type AddItemMutation = { __typename?: 'Mutation', addItem: { __typename?: 'Item', item_id: string, name: string, rate: number, category_name: string } };

export type AddOrderMutationVariables = Exact<{
  bill_id: Scalars['Int'];
  item_id: Scalars['Int'];
  quantity: Scalars['Int'];
}>;


export type AddOrderMutation = { __typename?: 'Mutation', addOrder: boolean };

export type CreateBillMutationVariables = Exact<{
  table_no: Scalars['Int'];
}>;


export type CreateBillMutation = { __typename?: 'Mutation', createBill: { __typename?: 'Bills', bill_id: string, table_no: number, netAmount: number, createdAt: string } };

export type DeleteBillMutationVariables = Exact<{
  bill_id: Scalars['Int'];
}>;


export type DeleteBillMutation = { __typename?: 'Mutation', deleteBill: boolean };

export type DeleteItemMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteItemMutation = { __typename?: 'Mutation', deleteItem: boolean };

export type DeleteOrderMutationVariables = Exact<{
  item_id: Scalars['Int'];
  bill_id: Scalars['Int'];
}>;


export type DeleteOrderMutation = { __typename?: 'Mutation', deleteOrder: boolean };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: Maybe<{ __typename?: 'User', user_id: string, name: string, email: string, createdAt: string, updatedAt: string }> };

export type SettleBillMutationVariables = Exact<{
  bill_id: Scalars['Int'];
}>;


export type SettleBillMutation = { __typename?: 'Mutation', settleBill: boolean };

export type UpdateItemMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
  rate: Scalars['Float'];
  category_id: Scalars['Int'];
}>;


export type UpdateItemMutation = { __typename?: 'Mutation', updateItem?: Maybe<{ __typename?: 'Item', item_id: string, name: string, rate: number, category_name: string }> };

export type UpdateOrderMutationVariables = Exact<{
  bill_id: Scalars['Int'];
  item_id: Scalars['Int'];
  quantity: Scalars['Int'];
}>;


export type UpdateOrderMutation = { __typename?: 'Mutation', updateOrder: boolean };

export type GetBillQueryVariables = Exact<{
  bill_id: Scalars['Int'];
}>;


export type GetBillQuery = { __typename?: 'Query', getBill?: Maybe<{ __typename?: 'Bills', bill_id: string, table_no: number, netAmount: number, createdAt: string, orders: Array<{ __typename?: 'Orders', item_id: number, quantity: number, total: number, itemName: string, itemRate: string }> }> };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', category_id: number, name: string }> };

export type GetItemsQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
}>;


export type GetItemsQuery = { __typename?: 'Query', items: Array<{ __typename?: 'Item', item_id: string, name: string, rate: number, category_name: string, category_id: number }> };

export type GetUnsettledBillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUnsettledBillsQuery = { __typename?: 'Query', getUnsettledBills?: Maybe<Array<{ __typename?: 'Bills', bill_id: string, table_no: number, netAmount: number, createdAt: string, firstThreeOrders?: Maybe<Array<{ __typename?: 'Orders', itemName: string, quantity: number }>> }>> };

export type IsLoggedQueryVariables = Exact<{ [key: string]: never; }>;


export type IsLoggedQuery = { __typename?: 'Query', isLogged: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'User', user_id: string, name: string, email: string }> };


export const AddItemDocument = gql`
    mutation AddItem($name: String!, $rate: Float!, $category_id: Int!) {
  addItem(input: {name: $name, rate: $rate, category_id: $category_id}) {
    item_id
    name
    rate
    category_name
  }
}
    `;
export type AddItemMutationFn = Apollo.MutationFunction<AddItemMutation, AddItemMutationVariables>;

/**
 * __useAddItemMutation__
 *
 * To run a mutation, you first call `useAddItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemMutation, { data, loading, error }] = useAddItemMutation({
 *   variables: {
 *      name: // value for 'name'
 *      rate: // value for 'rate'
 *      category_id: // value for 'category_id'
 *   },
 * });
 */
export function useAddItemMutation(baseOptions?: Apollo.MutationHookOptions<AddItemMutation, AddItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddItemMutation, AddItemMutationVariables>(AddItemDocument, options);
      }
export type AddItemMutationHookResult = ReturnType<typeof useAddItemMutation>;
export type AddItemMutationResult = Apollo.MutationResult<AddItemMutation>;
export type AddItemMutationOptions = Apollo.BaseMutationOptions<AddItemMutation, AddItemMutationVariables>;
export const AddOrderDocument = gql`
    mutation AddOrder($bill_id: Int!, $item_id: Int!, $quantity: Int!) {
  addOrder(input: {bill_id: $bill_id, item_id: $item_id, quantity: $quantity})
}
    `;
export type AddOrderMutationFn = Apollo.MutationFunction<AddOrderMutation, AddOrderMutationVariables>;

/**
 * __useAddOrderMutation__
 *
 * To run a mutation, you first call `useAddOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOrderMutation, { data, loading, error }] = useAddOrderMutation({
 *   variables: {
 *      bill_id: // value for 'bill_id'
 *      item_id: // value for 'item_id'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useAddOrderMutation(baseOptions?: Apollo.MutationHookOptions<AddOrderMutation, AddOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddOrderMutation, AddOrderMutationVariables>(AddOrderDocument, options);
      }
export type AddOrderMutationHookResult = ReturnType<typeof useAddOrderMutation>;
export type AddOrderMutationResult = Apollo.MutationResult<AddOrderMutation>;
export type AddOrderMutationOptions = Apollo.BaseMutationOptions<AddOrderMutation, AddOrderMutationVariables>;
export const CreateBillDocument = gql`
    mutation CreateBill($table_no: Int!) {
  createBill(table_no: $table_no) {
    bill_id
    table_no
    netAmount
    createdAt
  }
}
    `;
export type CreateBillMutationFn = Apollo.MutationFunction<CreateBillMutation, CreateBillMutationVariables>;

/**
 * __useCreateBillMutation__
 *
 * To run a mutation, you first call `useCreateBillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBillMutation, { data, loading, error }] = useCreateBillMutation({
 *   variables: {
 *      table_no: // value for 'table_no'
 *   },
 * });
 */
export function useCreateBillMutation(baseOptions?: Apollo.MutationHookOptions<CreateBillMutation, CreateBillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBillMutation, CreateBillMutationVariables>(CreateBillDocument, options);
      }
export type CreateBillMutationHookResult = ReturnType<typeof useCreateBillMutation>;
export type CreateBillMutationResult = Apollo.MutationResult<CreateBillMutation>;
export type CreateBillMutationOptions = Apollo.BaseMutationOptions<CreateBillMutation, CreateBillMutationVariables>;
export const DeleteBillDocument = gql`
    mutation DeleteBill($bill_id: Int!) {
  deleteBill(bill_id: $bill_id)
}
    `;
export type DeleteBillMutationFn = Apollo.MutationFunction<DeleteBillMutation, DeleteBillMutationVariables>;

/**
 * __useDeleteBillMutation__
 *
 * To run a mutation, you first call `useDeleteBillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBillMutation, { data, loading, error }] = useDeleteBillMutation({
 *   variables: {
 *      bill_id: // value for 'bill_id'
 *   },
 * });
 */
export function useDeleteBillMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBillMutation, DeleteBillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBillMutation, DeleteBillMutationVariables>(DeleteBillDocument, options);
      }
export type DeleteBillMutationHookResult = ReturnType<typeof useDeleteBillMutation>;
export type DeleteBillMutationResult = Apollo.MutationResult<DeleteBillMutation>;
export type DeleteBillMutationOptions = Apollo.BaseMutationOptions<DeleteBillMutation, DeleteBillMutationVariables>;
export const DeleteItemDocument = gql`
    mutation DeleteItem($id: Int!) {
  deleteItem(id: $id)
}
    `;
export type DeleteItemMutationFn = Apollo.MutationFunction<DeleteItemMutation, DeleteItemMutationVariables>;

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItemMutation, DeleteItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteItemMutation, DeleteItemMutationVariables>(DeleteItemDocument, options);
      }
export type DeleteItemMutationHookResult = ReturnType<typeof useDeleteItemMutation>;
export type DeleteItemMutationResult = Apollo.MutationResult<DeleteItemMutation>;
export type DeleteItemMutationOptions = Apollo.BaseMutationOptions<DeleteItemMutation, DeleteItemMutationVariables>;
export const DeleteOrderDocument = gql`
    mutation DeleteOrder($item_id: Int!, $bill_id: Int!) {
  deleteOrder(item_id: $item_id, bill_id: $bill_id)
}
    `;
export type DeleteOrderMutationFn = Apollo.MutationFunction<DeleteOrderMutation, DeleteOrderMutationVariables>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      item_id: // value for 'item_id'
 *      bill_id: // value for 'bill_id'
 *   },
 * });
 */
export function useDeleteOrderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument, options);
      }
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = Apollo.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<DeleteOrderMutation, DeleteOrderMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user_id
    name
    email
    createdAt
    updatedAt
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SettleBillDocument = gql`
    mutation SettleBill($bill_id: Int!) {
  settleBill(bill_id: $bill_id)
}
    `;
export type SettleBillMutationFn = Apollo.MutationFunction<SettleBillMutation, SettleBillMutationVariables>;

/**
 * __useSettleBillMutation__
 *
 * To run a mutation, you first call `useSettleBillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSettleBillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [settleBillMutation, { data, loading, error }] = useSettleBillMutation({
 *   variables: {
 *      bill_id: // value for 'bill_id'
 *   },
 * });
 */
export function useSettleBillMutation(baseOptions?: Apollo.MutationHookOptions<SettleBillMutation, SettleBillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SettleBillMutation, SettleBillMutationVariables>(SettleBillDocument, options);
      }
export type SettleBillMutationHookResult = ReturnType<typeof useSettleBillMutation>;
export type SettleBillMutationResult = Apollo.MutationResult<SettleBillMutation>;
export type SettleBillMutationOptions = Apollo.BaseMutationOptions<SettleBillMutation, SettleBillMutationVariables>;
export const UpdateItemDocument = gql`
    mutation UpdateItem($id: Int!, $name: String!, $rate: Float!, $category_id: Int!) {
  updateItem(
    input: {id: $id, name: $name, rate: $rate, category_id: $category_id}
  ) {
    item_id
    name
    rate
    category_name
  }
}
    `;
export type UpdateItemMutationFn = Apollo.MutationFunction<UpdateItemMutation, UpdateItemMutationVariables>;

/**
 * __useUpdateItemMutation__
 *
 * To run a mutation, you first call `useUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemMutation, { data, loading, error }] = useUpdateItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      rate: // value for 'rate'
 *      category_id: // value for 'category_id'
 *   },
 * });
 */
export function useUpdateItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItemMutation, UpdateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItemMutation, UpdateItemMutationVariables>(UpdateItemDocument, options);
      }
export type UpdateItemMutationHookResult = ReturnType<typeof useUpdateItemMutation>;
export type UpdateItemMutationResult = Apollo.MutationResult<UpdateItemMutation>;
export type UpdateItemMutationOptions = Apollo.BaseMutationOptions<UpdateItemMutation, UpdateItemMutationVariables>;
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($bill_id: Int!, $item_id: Int!, $quantity: Int!) {
  updateOrder(input: {bill_id: $bill_id, item_id: $item_id, quantity: $quantity})
}
    `;
export type UpdateOrderMutationFn = Apollo.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      bill_id: // value for 'bill_id'
 *      item_id: // value for 'item_id'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useUpdateOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, options);
      }
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const GetBillDocument = gql`
    query GetBill($bill_id: Int!) {
  getBill(bill_id: $bill_id) {
    bill_id
    table_no
    netAmount
    orders {
      item_id
      quantity
      total
      itemName
      itemRate
    }
    createdAt
  }
}
    `;

/**
 * __useGetBillQuery__
 *
 * To run a query within a React component, call `useGetBillQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBillQuery({
 *   variables: {
 *      bill_id: // value for 'bill_id'
 *   },
 * });
 */
export function useGetBillQuery(baseOptions: Apollo.QueryHookOptions<GetBillQuery, GetBillQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBillQuery, GetBillQueryVariables>(GetBillDocument, options);
      }
export function useGetBillLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBillQuery, GetBillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBillQuery, GetBillQueryVariables>(GetBillDocument, options);
        }
export type GetBillQueryHookResult = ReturnType<typeof useGetBillQuery>;
export type GetBillLazyQueryHookResult = ReturnType<typeof useGetBillLazyQuery>;
export type GetBillQueryResult = Apollo.QueryResult<GetBillQuery, GetBillQueryVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories {
  categories {
    category_id
    name
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetItemsDocument = gql`
    query GetItems($search: String) {
  items(search: $search) {
    item_id
    name
    rate
    category_name
    category_id
  }
}
    `;

/**
 * __useGetItemsQuery__
 *
 * To run a query within a React component, call `useGetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, options);
      }
export function useGetItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, options);
        }
export type GetItemsQueryHookResult = ReturnType<typeof useGetItemsQuery>;
export type GetItemsLazyQueryHookResult = ReturnType<typeof useGetItemsLazyQuery>;
export type GetItemsQueryResult = Apollo.QueryResult<GetItemsQuery, GetItemsQueryVariables>;
export const GetUnsettledBillsDocument = gql`
    query getUnsettledBills {
  getUnsettledBills {
    bill_id
    table_no
    netAmount
    firstThreeOrders {
      itemName
      quantity
    }
    createdAt
  }
}
    `;

/**
 * __useGetUnsettledBillsQuery__
 *
 * To run a query within a React component, call `useGetUnsettledBillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnsettledBillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnsettledBillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUnsettledBillsQuery(baseOptions?: Apollo.QueryHookOptions<GetUnsettledBillsQuery, GetUnsettledBillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnsettledBillsQuery, GetUnsettledBillsQueryVariables>(GetUnsettledBillsDocument, options);
      }
export function useGetUnsettledBillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnsettledBillsQuery, GetUnsettledBillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnsettledBillsQuery, GetUnsettledBillsQueryVariables>(GetUnsettledBillsDocument, options);
        }
export type GetUnsettledBillsQueryHookResult = ReturnType<typeof useGetUnsettledBillsQuery>;
export type GetUnsettledBillsLazyQueryHookResult = ReturnType<typeof useGetUnsettledBillsLazyQuery>;
export type GetUnsettledBillsQueryResult = Apollo.QueryResult<GetUnsettledBillsQuery, GetUnsettledBillsQueryVariables>;
export const IsLoggedDocument = gql`
    query IsLogged {
  isLogged
}
    `;

/**
 * __useIsLoggedQuery__
 *
 * To run a query within a React component, call `useIsLoggedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsLoggedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsLoggedQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsLoggedQuery(baseOptions?: Apollo.QueryHookOptions<IsLoggedQuery, IsLoggedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsLoggedQuery, IsLoggedQueryVariables>(IsLoggedDocument, options);
      }
export function useIsLoggedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsLoggedQuery, IsLoggedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsLoggedQuery, IsLoggedQueryVariables>(IsLoggedDocument, options);
        }
export type IsLoggedQueryHookResult = ReturnType<typeof useIsLoggedQuery>;
export type IsLoggedLazyQueryHookResult = ReturnType<typeof useIsLoggedLazyQuery>;
export type IsLoggedQueryResult = Apollo.QueryResult<IsLoggedQuery, IsLoggedQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    user_id
    name
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;