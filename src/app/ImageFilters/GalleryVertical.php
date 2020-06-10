<?php namespace App\ImageFilters;

use Intervention\Image\Filters\FilterInterface;
use Intervention\Image\Image;

class GalleryVertical implements FilterInterface
{

    /**
     * Applies filter effects to given image
     *
     * @param \Intervention\Image\Image $image
     * @return \Intervention\Image\Image
     */
    public function applyFilter(Image $image)
    {
        $image->fit(268, 250);

        return $image;
    }
}
