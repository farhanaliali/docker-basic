############ Cloud init 
 
    sudo apt update -y && sudo apt install libguestfs-tools -y

Download Ubuntu (replace with the url of the one you chose from above)

    wget https://cloud-images.ubuntu.com/focal/current/focal-server-cloudimg-amd64.img

Create a new virtual machine

    qm create 8000 --memory 2048 --core 2 --name ubuntu-cloud --net0 virtio,bridge=vmbr0

Import the downloaded Ubuntu disk to local-lvm storage

    qm importdisk 8000 focal-server-cloudimg-amd64.img local-lvm

Attach the new disk to the vm as a scsi drive on the scsi controller

    qm set 8000 --scsihw virtio-scsi-pci --scsi0 local-lvm:vm-8000-disk-0

Add cloud init drive

    qm set 8000 --ide2 local-lvm:cloudinit

Make the cloud init drive bootable and restrict BIOS to boot from disk only

    qm set 8000 --boot c --bootdisk scsi0

Add serial console

    qm set 8000 --serial0 socket --vga serial0

Enable agent

    sudo qm set 8000 --agent enabled=1


Go to UI and set some parameters 

Go vm name 8000  

Go to 
 



Create clone

    qm template 8000
    



