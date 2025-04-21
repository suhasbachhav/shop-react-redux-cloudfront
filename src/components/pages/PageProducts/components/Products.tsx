import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { formatAsPrice } from "~/utils/utils";
import AddProductToCart from "~/components/AddProductToCart/AddProductToCart";
import { useAvailableProducts } from "~/queries/products";

function getImageUrl(name: string) {
  switch (true) {
    case name.toLowerCase().includes("laptop"):
      return "https://images.pexels.com/photos/1174775/pexels-photo-1174775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("headphone"):
    case name.toLowerCase().includes("airpod"):
    case name.toLowerCase().includes("earphone"):
      return "https://images.pexels.com/photos/31666152/pexels-photo-31666152/free-photo-of-close-up-of-white-wireless-earbuds-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("phone"):
    case name.toLowerCase().includes("mobile"):
    case name.toLowerCase().includes("tablet"):
      return "https://images.pexels.com/photos/23496809/pexels-photo-23496809/free-photo-of-blank-screen-smartphone-mockup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("computer"):
    case name.toLowerCase().includes("mac"):
      return "https://images.pexels.com/photos/6177567/pexels-photo-6177567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("speaker"):
    case name.toLowerCase().includes("bluetooth"):
      return "https://images.pexels.com/photos/31683433/pexels-photo-31683433/free-photo-of-marshall-portable-bluetooth-speaker-close-up.jpeg?auto=compress&cs=tinysrgb&w=1200";
    case name.toLowerCase().includes("mouse"):
      return "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("keyboard"):
      return "https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("camera"):
      return "https://images.pexels.com/photos/21365311/pexels-photo-21365311/free-photo-of-two-analog-cameras-lying-on-a-stone-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("cam"):
    case name.toLowerCase().includes("cctv"):
        return "https://images.pexels.com/photos/27574914/pexels-photo-27574914/free-photo-of-security-start-home-web-cam-neon-pastel-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    default:
      return "https://images.pexels.com/photos/3843282/pexels-photo-3843282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  }
}

export default function Products() {
  const { data = [], isLoading } = useAvailableProducts();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {data.map(({ count, ...product }, index) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              sx={{ pt: "56.25%" }}
              image={`${getImageUrl(product.title)}`}
              title="Image title"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.title}
              </Typography>
              <Typography>{formatAsPrice(product.price)}</Typography>
            </CardContent>
            <CardActions>
              <AddProductToCart product={product} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
