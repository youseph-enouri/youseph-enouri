import cv2

name = "./TS.png"

# Read with alpha channel (transparency)
image = cv2.imread(name, cv2.IMREAD_UNCHANGED)

# If the image has an alpha channel (PNG transparency)
if image.shape[2] == 4:  # Check if there are 4 channels (RGBA)
    desired_height = 1500
    scale = desired_height / image.shape[0]
    new_width = int(image.shape[1] * scale)

    resized_image = cv2.resize(image, (new_width, desired_height), interpolation=cv2.INTER_LINEAR)

    # Save with transparency
    cv2.imwrite(name, resized_image)
else:
    print("Image does not have an alpha channel.")