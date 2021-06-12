import { Request, Response } from 'express';

export function helloWorld(_: Request, res: Response) {
    try {
	res.status(200).send('Hello World!');
    } catch (err) {
        res.status(500).send(err)
    }
}