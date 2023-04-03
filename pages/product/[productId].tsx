import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1>Details About Product {productId}</h1>;
}
