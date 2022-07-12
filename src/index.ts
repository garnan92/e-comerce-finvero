import express from "express";
import { PORT } from "infra/constants";
import { CATEGORY_URI, USER_URI } from "domain/api/constants";
import { connectDB } from "interfaces/http/handlers/database/conection";
import userRoutes from "domain/api/routes/users";
import categoryRoutes from "domain/api/routes/category";

const app = express();

app.use(express.json());

// const router = express.Router();

// const getUsers = (_req: Request, res: Response, _next: NextFunction) => {
//   User.find()
//     .select({ _id: 1, mail: 1 })
//     .exec()
//     .then((results) => {
//       return res.status(200).json({
//         users: results,
//       });
//     })
//     .catch((_error) => {
//       return res.status(500).json({
//         message: "error",
//       });
//     });
// };

app.use(USER_URI, userRoutes);
app.use(CATEGORY_URI, categoryRoutes);

app.listen(PORT, () => {
  console.log(`port listening ${PORT}`);
  connectDB();
});
