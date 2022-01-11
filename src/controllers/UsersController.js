import User from "../models/User";
import { createPasswordHash } from "../services/auth";

class UsersController {
    async index(req, res) {
        try {
            const users = await User.find();
            return res.json(users);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error." });
        }
    }

    async create(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (user) return res.status(422).json({ message: `User ${email} already exists.` });

            //Criptograph password
            const encryptedPassword = await createPasswordHash(password);
            console.log(encryptedPassword);
            const newUser = await User.create({
                email: email,
                password: encryptedPassword
            });

            return res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error." });
        }
    }

    async read(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);
            if (!user) return res.status(404).json();
            return res.json(user);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error." });
        }
    }

    async update(req, res) {
        try {
            const { email } = req.body;
        } catch (error) {

        }
    }

    async delete(req, res) {
        try {
            const { email } = req.body;
        } catch (error) {

        }
    }

}
export default new UsersController();