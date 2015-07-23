export default function () {
    this.name = 'AngularJS';

    this.greet = () => {
        this.greeting = `Hello ${this.name}!`;
    };

    this.greet();
};
