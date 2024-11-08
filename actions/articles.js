const { articleModel } = require("@/models/article-model");
const { mongoDB } = require("@/monogoDB/mongoDB");

const getLatestArticles = async () => {
  try {
    await mongoDB();

    const articles = articleModel.find({}).sort({ publishedAt: -1 });
    return articles;
  } catch (err) {
    console.log(err);
  }
};

const createArticle = async (newArticle) => {
  try {
    await mongoDB();

    const article = await articleModel.create(newArticle);
    return article;
  } catch (err) {
    console.log(err.message);
  }
};
