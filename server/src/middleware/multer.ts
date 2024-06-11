import multer from "multer";
import path from 'path';
import fs from 'fs';
import { NextFunction, Request, Response } from "express";

const date = Date.now();
const folderRand = Math.round(Math.random() * 100);

const storage = multer.diskStorage({
  destination: (req: Request, file, cb) => {
		const folder = req.params.classroom;
    const folderPath = `${process.cwd()}/uploads/${folder}/`;
    fs.mkdirSync(folderPath, { recursive: true });
		cb(null, folderPath);
  },
  filename: (req: Request, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}${ext}`);
		// cb(null, Date.now() + '-' +  Buffer.from(file.originalname, 'latin1').toString('utf8'));
  }
});

const upload = multer({ storage });

export const postUpload = (req: Request, res: Response, next: NextFunction) => {
	upload.array('files[]', 16)(req, res, (err) => {
		if (err) {
			return res.status(400).send({ message: err.message });
		}

		// Retrieve uploaded files
		const files: any = req.files;
		const errors: any = [];

		if (files && files.length) {
			files.forEach((file: any) => {
				const maxSize = 250 * 1024 * 1024; // 250MB

				if (file.size > maxSize) {
					errors.push(`Datoteka je prevelika: ${file.originalname}`);
				}
			});

			// Handle validation errors
			if (errors.length > 0) {
				// Optionally, remove uploaded files if you don't need them anymore
				files.forEach((file: any) => {
					fs.unlinkSync(file.path);
				});

				return res.status(400).send({ message: errors.join(', ') });
			}

			// Attach files to the request object if needed
			req.files = files;
		}

		next();
	});
}
