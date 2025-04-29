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
    case name.toLowerCase().includes("notebook"):
    case name.toLowerCase().includes("ultrabook"):
      return "https://images.pexels.com/photos/1174775/pexels-photo-1174775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("headphone"):
    case name.toLowerCase().includes("earphone"):
    case name.toLowerCase().includes("earbud"):
    case name.toLowerCase().includes("airpod"):
      return "https://images.pexels.com/photos/31666152/pexels-photo-31666152/free-photo-of-close-up-of-white-wireless-earbuds-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("smartphone"):
    case name.toLowerCase().includes("phone"):
    case name.toLowerCase().includes("mobile"):
    case name.toLowerCase().includes("iphone"):
    case name.toLowerCase().includes("android"):
      return "https://images.pexels.com/photos/23496809/pexels-photo-23496809/free-photo-of-blank-screen-smartphone-mockup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("tablet"):
    case name.toLowerCase().includes("ipad"):
      return "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("desktop"):
    case name.toLowerCase().includes("computer"):
    case name.toLowerCase().includes("pc"):
    case name.toLowerCase().includes("mac"):
    case name.toLowerCase().includes("workstation"):
      return "https://images.pexels.com/photos/6177567/pexels-photo-6177567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("gaming"):
    case name.toLowerCase().includes("console"):
    case name.toLowerCase().includes("playstation"):
    case name.toLowerCase().includes("ps5"):
    case name.toLowerCase().includes("xbox"):
    case name.toLowerCase().includes("nintendo"):
    case name.toLowerCase().includes("game controller"):
      return "https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("tv"):
    case name.toLowerCase().includes("television"):
    case name.toLowerCase().includes("oled"):
    case name.toLowerCase().includes("led tv"):
    case name.toLowerCase().includes("smart tv"):
      return "https://images.pexels.com/photos/7947958/pexels-photo-7947958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("camera"):
    case name.toLowerCase().includes("cam"):
    case name.toLowerCase().includes("dslr"):
    case name.toLowerCase().includes("photography"):
    case name.toLowerCase().includes("gopro"):
    case name.toLowerCase().includes("camcorder"):
      return "https://images.pexels.com/photos/21365311/pexels-photo-21365311/free-photo-of-two-analog-cameras-lying-on-a-stone-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("drone"):
    case name.toLowerCase().includes("quadcopter"):
      return "https://images.pexels.com/photos/690360/pexels-photo-690360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("smartwatch"):
    case name.toLowerCase().includes("fitness tracker"):
    case name.toLowerCase().includes("wearable"):
    case name.toLowerCase().includes("fitness watch"):
      return "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("projector"):
      return "https://images.pexels.com/photos/2736135/pexels-photo-2736135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("home theater"):
    case name.toLowerCase().includes("speaker"):
      return "https://images.pexels.com/photos/8133000/pexels-photo-8133000.jpeg?auto=compress&cs=tinysrgb&w=1200";
    case name.toLowerCase().includes("charger"):
    case name.toLowerCase().includes("power bank"):
    case name.toLowerCase().includes("charging dock"):
    case name.toLowerCase().includes("cable"):
      return "https://images.pexels.com/photos/1028674/pexels-photo-1028674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("printer"):
    case name.toLowerCase().includes("scanner"):
    case name.toLowerCase().includes("all-in-one printer"):
      return "https://images.pexels.com/photos/7014416/pexels-photo-7014416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("vr"):
    case name.toLowerCase().includes("virtual reality"):
    case name.toLowerCase().includes("ar"):
    case name.toLowerCase().includes("augmented reality"):
    case name.toLowerCase().includes("vr headset"):
      return "https://images.pexels.com/photos/1261816/pexels-photo-1261816.jpeg?auto=compress&cs=tinysrgb&w=1200";
    case name.toLowerCase().includes("router"):
    case name.toLowerCase().includes("wi-fi"):
    case name.toLowerCase().includes("modem"):
    case name.toLowerCase().includes("extender"):
      return "https://images.pexels.com/photos/29711663/pexels-photo-29711663/free-photo-of-modern-wireless-router-with-antennas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("hard drive"):
    case name.toLowerCase().includes("ssd"):
    case name.toLowerCase().includes("usb"):
    case name.toLowerCase().includes("flash drive"):
    case name.toLowerCase().includes("storage"):
      return "https://images.pexels.com/photos/175449/pexels-photo-175449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("smart speaker"):
    case name.toLowerCase().includes("alexa"):
    case name.toLowerCase().includes("google home"):
    case name.toLowerCase().includes("echo dot"):
      return "https://images.pexels.com/photos/4790257/pexels-photo-4790257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("smart light"):
    case name.toLowerCase().includes("smart bulb"):
    case name.toLowerCase().includes("smart plug"):
      return "https://images.pexels.com/photos/1616472/pexels-photo-1616472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("e-reader"):
    case name.toLowerCase().includes("kindle"):
      return "https://images.pexels.com/photos/844734/pexels-photo-844734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    case name.toLowerCase().includes("electric scooter"):
    case name.toLowerCase().includes("e-bike"):
    case name.toLowerCase().includes("electric vehicle"):
    case name.toLowerCase().includes("hoverboard"):
      return "https://images.pexels.com/photos/1731751/pexels-photo-1731751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
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
