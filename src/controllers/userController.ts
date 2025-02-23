import { Request, Response } from "express"
import User from "../models/userModel"

export const createData = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email } = req.body

        // Validasi sederhana untuk memastikan data tidak kosong
        if (!username || !email) {
            res.status(400).json({ message: "Username dan email has required" })
            return;
        }

        const add = await User.create({
            username,
            email
        });

        res.status(201).json({
            status: "Success",
            message: "Create user successfully",
            data: add
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Create user has failed" })
    }
};

export const getAllUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.findAll()
        if (!users || users.length === 0) {
            res.status(200).json({ message: "No have user" })
            return
        }
        res.status(200).json({
            status: "Success",
            message: "Get all users successfully",
            data: users
        })
        return
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Get all data users has failed" })
        return
    }
}

export const detailUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!user) {
            res.status(404).json({ message: "User not found" })
            return
        }

        res.status(200).json({
            status: "Success",
            message: "Get detail data user successfully",
            data: user
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Get detail user has failed" })
        return
    }
}

export const editlUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!user) {
            res.status(404).json({ message: "User not found" })
            return
        }

        const { username, email } = req.body;

        // Validasi sederhana untuk memastikan data tidak kosong
        if (!username || !email) {
            res.status(400).json({ message: "Username dan email has required" });
            return;
        }

        await user.update({
            username, email
        })
        res.status(200).json({
            status: "Success",
            message: "Data user has updated",
            data: user
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Edit user has failed" })
        return
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!user) {
            res.status(404).json({ message: "User not found" })
            return
        }

        await user.destroy()
        res.status(200).json({
            status: "Success",
            message: "User has deleted",
            data: user
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Delete user has failed" })
        return
    }
}