import './style.scss';

const check = async () => {
  await fetch('https://google.com');
}

check().then(() => {
  console.log('success');
}).catch((err) => {
  console.log(err.message);
})
