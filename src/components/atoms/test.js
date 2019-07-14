function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 2));

const handleClick = () => spinner();

const spinner = () => {
  const [spinnerThing] = document.getElementsByClassName('cool-spinner');
  console.log('spinner: ', spinnerThing[0]);
  spinnerThing.classList.add('animate');
};
