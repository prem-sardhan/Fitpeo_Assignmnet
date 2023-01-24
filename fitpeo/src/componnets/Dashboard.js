import Grid from "@mui/material/Grid";
import Customers from "../Section/Customers";
import Orders from "../Section/Orders";
import OrderStats from "../Section/OrderStats";
import Overview from "../Section/Overview";
import Profile from "../Section/Profile";
import Revenue from "../Section/Revenue";
import TopProducts from "../Section/TopProduct";
import UserActivity from "../Section/UserActivity";
;

const Dashboard = () => {
  return (
    <>
      <Grid container px={1} py={2}>
        <Grid item lg={9} xs={12}>
          <Grid container sx={{ height: "100%" }}>
            <Grid item lg={4} xs={12} p={1}>
              <Revenue />
            </Grid>
            <Grid item lg={4} xs={12} p={1}>
              <Orders />
            </Grid>
            <Grid item lg={4} xs={12} p={1}>
              <Customers />
            </Grid>
            <Grid item lg={12} xs={12} p={1}>
              <Overview />
            </Grid>
            <Grid item lg={4} xs={12} p={1}>
              <UserActivity />
            </Grid>
            <Grid item lg={4} xs={12} p={1}>
              <OrderStats />
            </Grid>
            <Grid item lg={4} xs={12} p={1}>
              <TopProducts />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3} xs={12} p={1}>
          <Profile />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
