import os
from PIL import Image

def resize_image(input_path, output_path, target_size=(50, 50)):
    try:
        img = Image.open(input_path)
        img.thumbnail(target_size)
        img.save(output_path)
        return True
    except Exception as e:
        print(f"Error resizing image {input_path}: {e}")
        return False

def main():
    source_directory = r"C:\Users\Administrator\Documents\GitHub\zimowuer.github.io\背景\新建文件夹"  # 替换为您的源目录路径
    output_directory = r"C:\Users\Administrator\Documents\GitHub\zimowuer.github.io\素材"  # 替换为您的输出目录路径
    target_size = (50, 50)

    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    for filename in os.listdir(source_directory):
        if filename.endswith(".jpg") or filename.endswith(".png"):
            source_path = os.path.join(source_directory, filename)
            output_path = os.path.join(output_directory, filename)

            img = Image.open(source_path)
            if img.size == target_size:
                img.save(output_path)
                print(f"Copied image: {filename}")
            else:
                if resize_image(source_path, output_path, target_size):
                    print(f"Resized image: {filename}")

if __name__ == "__main__":
    main()
