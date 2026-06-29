import requests

from .tables import NOCODB_TABLE_MAP
from .config import NOCODB_PATH, NOCODB_XC_TOKEN
from . import models

class Noco:
    """
    Class to interact with NocoDB
    """
    def __init__(self):
        self.request = requests
        self.headers = {'xc-token': NOCODB_XC_TOKEN}
        self.base_url = NOCODB_PATH

    def get_auth_headers(self) -> dict:
        return self.headers

    def get_nocodb_path(self, table: str) -> str:
        return f"{self.base_url}/api/v2/tables/{table}/records"

    def get_storage_upload_path(self) -> str:
        return f"{self.base_url}/api/v2/storage/upload"
    
    def get_data(self, table: str) -> dict:
        """
            Function to get data from a table

            Arguments:
                table (str): The name of the table to get data from.
            
            Returns:
                dict: The data from the table
            
            Raises:
                Exception: If there is an error getting data from the table
        """
        try:
            response = self.request.get(self.get_nocodb_path(table), headers=self.get_auth_headers())
            response.raise_for_status()
            return response.json()
        except:
            raise

    def get_keys(self) -> models.KeyLists:
        """
            Get the key data from NocoDB using the API

            Returns:
                KeyObject: An object containing the key data
            
            Raises:
                Exception: If there is an error getting the key data using the API
        """
        try:
            response = self.get_data(NOCODB_TABLE_MAP.key_table)
            key_data = models.KeyLists(
                envvars=[item['envvar'] for item in response['list']],
                envvals=[item['envval'] for item in response['list']]
            )
            return key_data
        except:
            raise

    def post_data(self, table: str, data: dict) -> None:
        """
            Function to post data to a table

            Arguments:
                table (str): The name of the table to post data to.
                data (dict): The data to post to the table.
            
            Raises:
                Exception: If there is an error posting data to the table
        """
        try:
            response = self.request.post(self.get_nocodb_path(table), json=data, headers=self.get_auth_headers())
            response.raise_for_status()
        except:
            raise

    def patch_data(self, table: str, data: dict) -> None:
        """
            Function to patch data in a table

            Arguments:
                table (str): The name of the table to patch data in.
                data (dict): The data to patch in the table.

            Raises:
                Exception: If there is an error patching data in the table
        """
        try:
            response = self.request.patch(self.get_nocodb_path(table), json=data, headers=self.get_auth_headers())
            response.raise_for_status()
        except:
            raise

    def delete_data(self, table: str, record_id: int) -> None:
        """
            Function to delete data from a table

            Arguments:
                table (str): The name of the table to delete data from.
                record_id (int): The ID of the record to delete from the table.
            
            Raises:
                Exception: If there is an error deleting data from the table
        """
        try:
            response = self.request.delete(f"{self.get_nocodb_path(table)}", headers=self.get_auth_headers(), json={"Id": record_id})
            response.raise_for_status()
        except:
            raise
