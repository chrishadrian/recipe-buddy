import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY });

const generateImage = async (prompt) => {
	const image = await openai.images.generate({
		prompt,
		n: 1,
		size: '512x512',
	});

	console.log(image.data);
	return image.data[0].url;
};

export default generateImage;
