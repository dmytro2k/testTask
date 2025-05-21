export type Product = {
  productId: string,
  productImageUrl: string,
  productName: string,
  productCount: number,
  productSize: {
    width: number,
    height: number
  },
  productWeight: string
}

export type Comment = {
  commentId: string,
  productId: string,
  commentDescription: string,
  commentDate: Date
}