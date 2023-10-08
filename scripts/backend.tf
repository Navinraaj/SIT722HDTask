terraform {
    # Uncomment this to get it running in the CD pipeline.
    backend "azurerm" {
        resource_group_name  = "flextube_hd_task"
        storage_account_name = "week10hdnavin"
        container_name       = "terraform"
        key                  = "terraform.tfstate"
    }
}