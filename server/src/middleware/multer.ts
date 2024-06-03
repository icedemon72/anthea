import multer from "multer";
import path from 'path';
import fs from 'fs';
import { NextFunction, Request, Response } from "express";
import { newError } from "../utils";

const date = Date.now();
const folderRand = Math.round(Math.random() * 100);

const storage = multer.diskStorage({
  destination: (req: Request, file, cb) => {
		cb(null, 'uploads/');
    // const folder = `${date}-${folderRand}`;
    // const folderPath = `${process.cwd()}/../client/src/assets/uploads/${folder}/`;
    // fs.mkdirSync(folderPath, { recursive: true });
    // callback(null, folderPath);
  },
  filename: (req: Request, file, cb) => {
    // const ext = path.extname(file.originalname);
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    // callback(null, `${uniqueSuffix}${ext}`);
		cb(null, Date.now() + '-' + file.originalname);
		console.log(file.originalname);
  }
});

const upload = multer({ storage });

export const postUpload = (req: Request, res: Response, next: NextFunction) => {
	try {
		console.log(req.body);
		upload.array('files', 5) (req, res, (err) => {
			if (err) {
				throw newError(400, err.message);
			}
	
			// Retrieve uploaded files
			const files: any = req.files;
			const errors: any = [];
			
			if(files?.length) {
				files.forEach((file: any) => {
					const maxSize = 250 * 1024 * 1024; // 250MB
		
					if (file.size > maxSize) {
						errors.push(`Datoteka je prevelika: ${file.originalname}`);
					}
				});
		
				// Handle validation errors
				if (errors.length > 0) {
					// Remove uploaded files
					files.forEach((file: any) => {
						fs.unlinkSync(file.path);
					});
		
					throw newError(400, err.message);
				}
		
				// Attach files to the request object
				req.files = files;
			}
	
			// Validate file types and sizes
	
			// Proceed to the next middleware or route handler
			next();
		});
	} catch (e: any) {
		return res.status(500).send({ message: e.message });
	}
}

// export default upload;