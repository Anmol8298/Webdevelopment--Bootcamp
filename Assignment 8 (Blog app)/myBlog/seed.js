const mongoose = require('mongoose');
const blogpost = require('./models/blogpost');

const posts = [
    {
        title:'Elon Musk',
        description:'Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX; early stage investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and Open',
        image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE'
    },
    {
        title:'Bill gates',
        description:'William Henry Gates III is an American business magnate, software developer, investor, author, and philanthropist. He is the co-founder of Microsoft Corporation.',
        image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT12cP23udqvCqHW_2oAvK257g3oVQkv23tOumxtpfFOhHi8a5B',
    },
    {
        title:'Jeff Boses',
        description:'Jeffrey Preston Bezos is an American internet entrepreneur, businessman, media proprietor, and investor. Bezos is the founder and CEO of the multi-national technology company Amazon',
        image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVvdf3mtAr8BQaBqwu2wAFbJD1dH6jtmyAK7hZRRnbFc0yc_pT'
    }
];

const seedDb = async ()=>{
    await blogpost.insertMany(posts);
    console.log('db seeded');
}

module.exports = seedDb;