import { StarIcon } from "@heroicons/react/24/solid";
import * as css_review_item from './css-review-item';

type Props = {
    name: string;
    role: string;
    image: string
}

export default function ReviewItem({ name, role, image }: Props) {
    return (
        <div className={css_review_item.container}>
            <img src={image} alt={name} className={css_review_item.review_image} />
            <div className={css_review_item.star_container}>
                <StarIcon className={css_review_item.star_style} />
                <StarIcon className={css_review_item.star_style} />
                <StarIcon className={css_review_item.star_style} />
                <StarIcon className={css_review_item.star_style} />
                <StarIcon className={css_review_item.star_style} />
            </div>
            <h1 className={css_review_item.review_title}>
                {name}
            </h1>
            <p className={css_review_item.review_role}>
                {role}
            </p>
            <p className={css_review_item.review_description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Atque perspiciatis dicta dolor beatae, modi aut sint harum minus sequi officia?
            </p>
        </div >
    );
}