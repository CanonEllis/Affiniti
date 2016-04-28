<?php

require 's3.php';

 S3::setAuth('AKIAJ34QHS4HVITT6WHA','uPhZqr3+17sC2e2i5t27942zqOEBDxu/2YE4JtYr');
//$newName = time() . '.txt';
$newName = 'upload.txt';

S3::putObject(
	//filename ideas, username.jpg
	//need to check file type to make sure its is a .jpeg .png and that it is a certain size
	//what if they want to change picture?
	S3::inputFile('uploadme.txt',false),
	'affinitiprofiles',   //bucket name
	$newName,
	S3::ACL_PUBLIC_READ, //permissions
	array(), //place holder array
	array(), //place holder array b/c we want to use reuced redundancy storage
	S3::STORAGE_CLASS_RRS

);

#S3::deleteObject(
#	'affinitiprofiles',
#	$newName
#	);



// /**
// 	* Delete an object
// 	*
// 	* @param string $bucket Bucket name
// 	* @param string $uri Object URI
// 	* @return boolean
// 	*/
// 	public static function deleteObject($bucket, $uri)
// 	{
// 		$rest = new S3Request('DELETE', $bucket, $uri, self::$endpoint);
// 		$rest = $rest->getResponse();
// 		if ($rest->error === false && $rest->code !== 204)
// 			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
// 		if ($rest->error !== false)
// 		{
// 			self::__triggerError(sprintf("S3::deleteObject(): [%s] %s",
// 			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
// 			return false;
// 		}
// 		return true;
// 	}

