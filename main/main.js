module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}`);
	console.log(`o) 最大值 = ${sequence.maxmum()}`);
	console.log(`o) 元素数量 = ${sequence.total()}`);
	console.log(`o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
    this.input=input;
  }

  minimum() {
    var array=this.input;
	var min= array[0];
	for(var i = 1; i < array.length-1; i++){
		if(min > array[i])
			max=array[i];
	} 
	return min;
  }
	
	maxmum(){
		var array=this.input;
		var max= array[0];
		for(var i = 1; i < array.length-1; i++){
			if(max < array[i])
				max=array[i];
		} 
		return max;
	}

	total(){
		return this.input.length;
	}

	average(){
		var array=this.input;
		var sum= 0;
		var avg = 0;
		for(var i = 0; i < array.length-1; i++){
			sum+=array[i];
		} 
		avg = Math.round((parseFloat(sum) / array.length)*100)*100;
		return avg;
	}
}
